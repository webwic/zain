const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  console.log("Event Body:", event.body); // Add this line for debugging

  const { name, subject, email, message } = JSON.parse(event.body);
  // Configure your email transport using nodemailer
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER, // Use environment variable for email
      pass: process.env.GMAIL_PASSWORD, // Use environment variable for password
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: "info@webwic.com",
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
