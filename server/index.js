const http = require("http");
const mysql = require("mysql");

// Kreiraj konekciju sa MySQL-om
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Zameni sa korisničkim imenom tvoje baze
  password: "lozinka123", // Zameni sa lozinkom tvoje baze
  database: "bplog", // Zameni sa imenom tvoje baze
});

// Kreiraj server
const server = http.createServer((req, res) => {
  // Testna ruta
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Backend radi! 🚀");
  }
});

server.listen(5000, () => {
  console.log("Server radi na http://localhost:5000");
});
