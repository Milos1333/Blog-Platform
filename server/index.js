const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Omogući pristup slikama iz 'uploads' foldera
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Multer podešavanje sa logovanjem
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("Setting destination for file upload");
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    console.log("Setting filename:", uniqueName);
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// MySQL konekcija
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Klepas123...",
  database: "bplog",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Registracija
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  const checkUserQuery = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(checkUserQuery, [email, username], (err, results) => {
    if (err) {
      console.error("Register query error:", err);
      return res.status(500).json({ error: err });
    }

    if (results.length > 0) {
      console.log("User already exists:", email, username);
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const insertUserQuery =
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(insertUserQuery, [username, email, hashedPassword], (err) => {
      if (err) {
        console.error("Error inserting user:", err);
        return res.status(500).json({ error: err });
      }

      console.log("User registered successfully:", username);
      res.status(201).json({ message: "User registered successfully." });
    });
  });
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const findUserQuery = "SELECT * FROM users WHERE email = ?";
  db.query(findUserQuery, [email], (err, results) => {
    if (err) {
      console.error("Login query error:", err);
      return res.status(500).json({ error: err });
    }

    if (results.length === 0) {
      console.log("User not found for email:", email);
      return res.status(400).json({ message: "User does not exist." });
    }

    const user = results[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      console.log("Incorrect password attempt for email:", email);
      return res.status(400).json({ message: "Incorrect password." });
    }

    console.log("User logged in:", user.username);
    res.json({
      message: "Successfully logged in",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  });
});

// Upload slike sa multer error handlingom i logovanjem
app.post(
  "/upload",
  (req, res, next) => {
    upload.single("image")(req, res, function (err) {
      if (err) {
        console.error("Multer error:", err);
        return res.status(500).json({ message: "Upload failed", error: err });
      }
      next();
    });
  },
  (req, res) => {
    console.log("Received upload request");
    console.log("File info:", req.file);

    if (!req.file) {
      console.log("No file uploaded!");
      return res.status(400).json({ message: "No file uploaded" });
    }

    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    console.log("Image uploaded successfully:", imageUrl);
    res.status(200).json({ imageUrl });
  }
);

// Kreiranje blog posta
app.post("/posts", (req, res) => {
  const { user_id, title, content, category, image, created_at } = req.body;

  if (!user_id || !title || !content) {
    console.log("Missing required fields in create post");
    return res.status(400).json({ message: "Missing required fields." });
  }

  const insertPostQuery = `
    INSERT INTO posts (user_id, title, content, category, image, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    insertPostQuery,
    [user_id, title, content, category, image, created_at],
    (err, result) => {
      if (err) {
        console.error("Error inserting post:", err);
        return res.status(500).json({ message: "Database error." });
      }

      console.log("Post created successfully, ID:", result.insertId);
      res.status(201).json({
        message: "Post created successfully.",
        postId: result.insertId,
      });
    }
  );
});

// Dobavljanje svih blogova
app.get("/posts", (req, res) => {
  const query = "SELECT * FROM posts ORDER BY created_at DESC";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching posts:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
});

// Brisanje blog posta
app.delete("/posts/:id", (req, res) => {
  const postId = req.params.id;

  const deleteQuery = "DELETE FROM posts WHERE id = ?";
  db.query(deleteQuery, [postId], (err, result) => {
    if (err) {
      console.error("Error deleting post:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    console.log("Post deleted successfully, ID:", postId);
    res.status(200).json({ message: "Post deleted successfully" });
  });
});

// Start servera
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
