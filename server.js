const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const routes = require ('./routes/routes')
const app = express();

app.use(express.json());

app.use("/api",routes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`));
