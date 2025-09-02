import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, brief, prefer } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://the-ux-people.vercel.app";
    const logoUrl = `${siteUrl}/images/logo.png`;

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; background: #f7f7f7; padding: 32px;">
          <div style="max-width: 480px; margin: auto; background: #fff; border-radius: 16px; box-shadow: 0 2px 8px #0001; padding: 32px;">
            <div style="text-align: center; margin-bottom: 24px;">
              <img src="${logoUrl}" alt="Logo" style="height: 24px; margin-bottom: 16px;" />
              <h2 style="color: #25B5AE; margin: 0;">New Contact Request</h2>
            </div>
            <table style="width: 100%; font-size: 16px; margin-bottom: 24px;">
              <tr>
                <td style="color: #888; width: 140px;">Full Name:</td>
                <td style="color: #222;">${fullName}</td>
              </tr>
              <tr>
                <td style="color: #888;">Email:</td>
                <td style="color: #222;">${email}</td>
              </tr>
              <tr>
                <td style="color: #888;">Phone:</td>
                <td style="color: #222;">${phone}</td>
              </tr>
              <tr>
                <td style="color: #888;">Preference:</td>
                <td style="color: #222;">${prefer}</td>
              </tr>
            </table>
            ${
              brief
                ? `<div style="margin-bottom: 16px;">
                    <div style="color: #888; font-size: 15px; margin-bottom: 4px;">Project Brief:</div>
                    <div style="color: #222; background: #f3f3f3; border-radius: 8px; padding: 12px;">${brief}</div>
                  </div>`
                : ""
            }
            <div style="text-align: center; color: #aaa; font-size: 13px; margin-top: 32px;">
              This message was sent from the contact form on <a href="${siteUrl}" style="color: #25B5AE;">theuxpeople.com</a>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
