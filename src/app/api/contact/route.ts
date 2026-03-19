import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, subject } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'info@karpfgarten.ch',
      subject: subject || `Kontaktanfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone || 'Nicht angegeben'}\n\nNachricht:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'E-Mail erfolgreich gesendet' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Fehler beim Senden der E-Mail' }, { status: 500 });
  }
}
