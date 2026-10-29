require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const noteRoutes = require("./routes/noteRoutes");

app.use("/api/notes", noteRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
