const nodemailer = require("nodemailer");
// const MailGen = require("mailgen");
const { pass } = require("../pass");

// const mailGenerator = new MailGen({
//   theme: "salted",
//   product: {
//     name: "Awesome App",
//     link: "http://example.com",
//     // logo: your app logo url
//   },
// });

// const email = {
//   body: {
//     name: "Jon Doe",
//     intro: "Welcome to email verification",
//     action: {
//       instructions: "Please click the button below to verify your account",
//       button: {
//         color: "#33b5e5",
//         text: "Verify account",
//         link: "http://example.com/verify_account",
//       },
//     },
//   },
// };

// const emailTemplate = mailGenerator.generate(email);

const sendMail = async (info) => {
  var transporter = nodemailer.createTransport({
    // service: "gmail",
    // auth: {
    //   user: "locbilla@gmail.com",
    //   pass: pass,
    // },
    service: "Gmail",
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'locbilla@gmail.com',
        pass: pass
    }
  });

  console.log(info)

  var mailOptions = {
    from: "locbilla@gmail.com",
    to: info.toEmail,
    subject: "Sending Email using Node.js",
    html: `
    <h1>${info.name}</h1>
    <p>${info.toEmail}</p>
    <p>${info.number}</p>
    <p>${info.message}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
};
module.exports = {
  sendMail,
};
