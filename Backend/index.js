const express = require("express");
const dotenv = require("dotenv");
const productsRouter = require("./router/products.router");
const {emailRouter} = require("./router/mail.router");
const cors = require("cors");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);
app.use("/", emailRouter);

const datas = ["Data 1"];

app.get("/datas", (req, res) => {
  res.status(200).json({ response: datas });
});

app.get("/store", (req, res) => {
  datas.push(req.query.data);

  res.status(200).json({ response: datas });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("http://localhost:" + PORT));
