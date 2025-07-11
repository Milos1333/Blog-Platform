const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
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

// Registration
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  const checkUserQuery = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(checkUserQuery, [email, username], (err, results) => {
    if (err) return res.status(500).json({ error: err });

    if (results.length > 0) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const insertUserQuery =
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(insertUserQuery, [username, email, hashedPassword], (err) => {
      if (err) return res.status(500).json({ error: err });

      res.status(201).json({ message: "User registered successfully." });
    });
  });
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const findUserQuery = "SELECT * FROM users WHERE email = ?";
  db.query(findUserQuery, [email], (err, results) => {
    if (err) return res.status(500).json({ error: err });

    if (results.length === 0) {
      return res.status(400).json({ message: "User does not exist." });
    }

    const user = results[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Incorrect password." });
    }

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

// Create blog post
app.post("/posts", (req, res) => {
  const { user_id, title, content, category, image } = req.body;

  if (!user_id || !title || !content) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  const insertPostQuery = `
    INSERT INTO posts (user_id, title, content, category, image)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    insertPostQuery,
    [user_id, title, content, category, image],
    (err, result) => {
      if (err) {
        console.error("Error inserting post:", err);
        return res.status(500).json({ message: "Database error." });
      }

      res.status(201).json({
        message: "Post created successfully.",
        postId: result.insertId,
      });
    }
  );
});

//  Get all blog posts
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

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
