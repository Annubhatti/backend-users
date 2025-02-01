const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, username: "octocat", name: "The Octocat", repoCount: 8, location: "San Francisco" },
  { id: 2, username: "torvalds", name: "Linus Torvalds", repoCount: 25, location: "Portland" },
  { id: 3, username: "gaearon", name: "Dan Abramov", repoCount: 50, location: "London" },
  { id: 4, username: "addyosmani", name: "Addy Osmani", repoCount: 42, location: "Mountain View" },
  { id: 5, username: "tj", name: "TJ Holowaychuk", repoCount: 150, location: "Victoria" },
];

// Route: Get all users
app.get("/users", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json({ users });
});

// Route: Get user by ID
app.get("/users/:id", (req, res) => {
  let userId = parseInt(req.params.id);
  let user = users.find((user) => user.id === userId);

  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ message: "User not found." });
  }
});

// ✅ Export the app (important for Vercel)
module.exports = app;
