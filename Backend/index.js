const express = require("express");
const dotenv = require("dotenv");
const productsRouter = require("./router/products.router");
const cors = require("cors");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);

app.get("/store", (req, res) => {
  datas.push(req.query.data);

  res.status(200).json({ response: datas });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("http://localhost:" + PORT));
