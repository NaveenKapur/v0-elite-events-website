import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, eventType, message } = body

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "First name, email, and message are required fields" },
        { status: 400 }
      )
    }

    // Configure the transporter with environment variables
    // Users must set these in their .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true" || Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "",
        pass: process.env.SMTP_PASS || "",
      },
    })

    // Prepare the email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER || "noreply@1ders.in",
      to: "info@1ders.in",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
You have received a new message from your website contact form.

Name: ${firstName} ${lastName || ""}
Email: ${email}
Phone: ${phone || "Not provided"}
Event Type: ${eventType || "Not provided"}

Message:
${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p>You have received a new message from your website contact form.</p>
        <table border="1" cellpadding="5" style="border-collapse: collapse;">
          <tr>
            <td><strong>Name:</strong></td>
            <td>${firstName} ${lastName || ""}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td><strong>Phone:</strong></td>
            <td>${phone || "Not provided"}</td>
          </tr>
          <tr>
            <td><strong>Event Type:</strong></td>
            <td>${eventType || "Not provided"}</td>
          </tr>
        </table>
        <h4>Message:</h4>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error: any) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email. Please try again later or verify your SMTP settings." },
      { status: 500 }
    )
  }
}
