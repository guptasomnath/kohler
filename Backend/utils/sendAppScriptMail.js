const sendAppScriptMail = async (info) => {
  const script = process.env.GMAIL_SCRIPT;

  const url =
    script +
    `?toEmail=subrata.ash@gmail.com&subject=User want to contact&body=<h4>Name : ${info.name}</h4><h4>Email : ${info.toEmail}</h4><h4>Number : ${info.number}</h4><h4>Message : ${info.message}</h4>`;

  const response = await fetch(url, { method: "GET" });
  const result = await response.text();

  return result;
};

module.exports = {
  sendAppScriptMail,
};
