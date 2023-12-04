require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { readdirSync } = require("fs");
const app = express();

const PORT = process.env.PORT;

//connect to db
const uri = "mongodb://127.0.0.1:27017/";
mongoose.set("strictQuery", false);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
  // Your code here
});
//middlewares
app.use(express.json());
app.use(cors());

//routes
const transactionRoutes = require("./routes/transactions");

// const productRoute = require("./routes/product");

// const cartRoute = require("./routes/cart");

app.use("/transactions", transactionRoutes);

// app.use("/products", productRoute);

// app.use("/carts", cartRoute);


const server = () => {
  console.log("Port listening to : ", PORT);
};

server();
