const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api", require("./routes/registrationRoutes"));

app.use("/api", require("./routes/productRoutes"));


app.listen(process.env.PORT, () => {
  console.log(
    `Server Running on Port ${process.env.PORT}`
  );
});