const ApiResponse = require("../utils/ApiResponse");
const { sendAppScriptMail } = require("../utils/sendAppScriptMail");
const express = require("express");

const emailRouter = express.Router();

emailRouter.post("/sendmail", async (req, res) => {
  const fullname = req.body.fullname?.trim();
  const email = req.body.email?.trim();
  const number = req.body.number?.trim();
  const message = req.body.message?.trim();

  if (!fullname)
    return res.status(400).json(new ApiResponse(400, "Full name is required"));
  if (!email)
    return res.status(400).json(new ApiResponse(400, "Email is required"));
  if (!number)
    return res.status(400).json(new ApiResponse(400, "Number is required"));
  if (!message)
    return res.status(400).json(new ApiResponse(400, "Message is required"));

  try {
    await sendAppScriptMail({
      name: fullname,
      toEmail: email,
      number: number,
      message: message,
    });
    res.status(200).json(new ApiResponse(200, "Mail sended successfully"));
  } catch (error) {
    res.status(400).json(new ApiResponse(400, "Error when sending email"));
  }
});

module.exports = {
  emailRouter,
};
