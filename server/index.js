const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Povezivanje s MySQL bazom
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Klepas123...",
  database: "bplog",
});

db.connect((err) => {
  if (err) {
    console.error("Greška pri povezivanju sa bazom:", err);
    return;
  }
  console.log("Povezan sa MySQL bazom!");
});

// Ruta za registraciju
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  const checkUserQuery = "SELECT * FROM users WHERE email = ?";
  db.query(checkUserQuery, [email], (err, results) => {
    if (err) return res.status(500).json({ error: err });

    if (results.length > 0) {
      return res.status(400).json({ message: "Korisnik već postoji" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const insertUserQuery =
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(
      insertUserQuery,
      [username, email, hashedPassword],
      (err, results) => {
        if (err) return res.status(500).json({ error: err });

        res.status(201).json({ message: "Korisnik uspešno registrovan" });
      }
    );
  });
});

// Ruta za login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Stigao zahtev za login:", req.body);

  const findUserQuery = "SELECT * FROM users WHERE email = ?";
  db.query(findUserQuery, [email], (err, results) => {
    if (err) return res.status(500).json({ error: err });

    if (results.length === 0) {
      return res.status(400).json({ message: "Korisnik ne postoji" });
    }

    const user = results[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Pogrešna lozinka" });
    }

    res.json({
      message: "Uspešno ulogovan",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server radi na http://localhost:${PORT}`);
});
