// In your serverless function (e.g., sendEmail.js)
const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  const { name, subject, email, message } = JSON.parse(event.body);

  // Configure your email transport using nodemailer
  const transporter = nodemailer.createTransport({
    // Configure your email service here (e.g., Gmail)
    service: "Gmail",
    auth: {
      user: "webwicquery@gmail.com",
      pass: "AXbycz02$",
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "info@zainpropertymanagement.com",
    subject,
    text: `Name: ${name}\nSubject: ${subject}\nEmail: ${email}\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Email could not be sent" }),
    };
  }
};
