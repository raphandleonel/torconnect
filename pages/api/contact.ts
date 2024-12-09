  import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const contactHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill out all required fields." });
  }

  try {
    // Create a transporter using your email credentials
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_SMTP_HOST, // e.g., "smtp.gmail.com"
      port: Number(process.env.NEXT_SMTP_PORT) || 587,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.NEXT_SMTP_USER, // Your email address
        pass: process.env.NEXT_SMTP_PASS, // Your email password or app password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.NEXT_SMTP_USER,
      to: process.env.NEXT_SMTP_RECIPIENT, // Your email address to receive the messages
      subject: subject || "Contact Form Submission",
      text: message,
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "No subject"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email. Please try again later." });
  }
};

export default contactHandler;
