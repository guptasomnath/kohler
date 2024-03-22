const { query } = require("../database/db");
const ApiResponse = require("../utils/ApiResponse");
const { demo } = require("../demo");
const {
  fetchDataFromMultipleTableQuery,
} = require("../utils/fetchDataFromTables");

const getAllProducts = async (req, res) => {
  let catname = req.query.catname.trim();

  // const d = ""; d.toLowerCase()

  // catname = catname.replaceAll(" ", "_").replaceAll("&", "_").toLowerCase();
  // console.log(catname.t)

  if (!catname)
    return res.status(400).json(new ApiResponse(400, "catname is required"));

  const limit = req.query.limit || 10;
  const skip = req.query.skip || 0;

  try {
    const datas = await query(
      `SELECT * from ${catname} LIMIT ${limit} OFFSET ${skip}`
    );
    const totalRecords = await query(
      `SELECT COUNT(*) AS total_rows FROM ${catname}`
    );
    res.status(200).json({
      products: datas,
      pages: Math.ceil(totalRecords[0].total_rows / limit),
    });
  } catch (error) {
    res.status(400).json(new ApiResponse(400, error.message, error));
  }
};

const getProducts = async (req, res) => {
  const catNames = req.body.catname;

  if (!catNames)
    return res.status(400).json(new ApiResponse(400, "catname is required"));

  if (!Array.isArray(catNames))
    return res
      .status(400)
      .json(new ApiResponse(400, "catname should be an array"));

  const limit = req.body.limit || 6;
  const skip = req.body.skip || 0;

  try {
    const response = await query(
      fetchDataFromMultipleTableQuery(catNames, limit, skip)
    );

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(new ApiResponse(400, error.message));
  }
};

const storeData = async (req, res) => {
  // const values = data.map(obj => [obj.field1, obj.field2]);

  const values = demo.map((item) => [
    item.title,
    item.subtitle,
    item.productsimg,
  ]);

  const sql = "INSERT INTO basin (title, subtitle, productsimg) VALUES ?";

  const result = await query(sql, [values]);
  res.send("Done");
};

module.exports = {
  getAllProducts,
  storeData,
  getProducts,
};
