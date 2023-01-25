const sendMail = async () => {
  const outputMessage = `
      <h1>Mail Details</h1>
      <ul>
        <li> Name : test1 </li>
        <li> Email : test2 </li>
      </ul>
      <h1>Message</h1>
      <p> test3 </p>
      `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "hncal02@gmail.com", // email account
      pass: "zimjmnzjnyjhvfkm", // gmail pass
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "Smart EDU 👻", // sender address
    to: "mustafahncal@gmail.com", // list of receivers
    subject: "Smart EDU New Message ✔", // Subject line
    html: outputMessage, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

function worker() {
  sendMail();
}
