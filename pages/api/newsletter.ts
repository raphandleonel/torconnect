import redis from "lib/redis";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    try {
      // Store email in Redis
      await redis.set(`subscription:${email}`, JSON.stringify({ email, date: new Date() }));

      // Send notification email
      const transporter = nodemailer.createTransport({
        host: process.env.NEXT_SMTP_HOST,
        port: parseInt(process.env.NEXT_SMTP_PORT!, 10),
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.NEXT_SMTP_USER,
          pass: process.env.NEXT_SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"TorConnect Newsletter" <${process.env.NEXT_SMTP_USER}>`,
        to: process.env.NEXT_SMTP_RECIPIENT,
        subject: "New Newsletter Subscription",
        text: `You have a new subscription: ${email}`,
        html: `<p><strong>New Subscriber:</strong> ${email}</p>`,
      });

      res.status(200).json({ message: "Subscription successful." });
    } catch (error) {
      console.error("Error handling subscription:", error);
      res.status(500).json({ error: "Failed to process subscription. Please try again later." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}
