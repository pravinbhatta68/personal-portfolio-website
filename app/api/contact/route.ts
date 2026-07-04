import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { rateLimit } from "@/lib/rate-limit";
import { brand } from "@/lib/data";

const schema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(120),
  email: z.string().trim().email("A valid email is required").max(160),
  phone: z.string().trim().max(40).optional(),
  company: z.string().trim().max(140).optional(),
  subject: z.string().trim().min(3, "Subject is required").max(160),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(3000),
  website: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "local";
  const limited = rateLimit(ip);
  if (!limited.success) {
    return NextResponse.json({ message: "Too many messages. Please try again in a minute." }, { status: 429 });
  }

  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());
  const parsed = schema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ message: parsed.error.issues[0]?.message || "Invalid form submission." }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ message: "Message sent successfully." });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;

  if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"${brand.name}" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL || brand.email,
      replyTo: parsed.data.email,
      subject: `New consultation request: ${parsed.data.subject}`,
      text: [
        `Name: ${parsed.data.fullName}`,
        `Email: ${parsed.data.email}`,
        `Phone: ${parsed.data.phone || "Not provided"}`,
        `Company: ${parsed.data.company || "Not provided"}`,
        "",
        parsed.data.message,
      ].join("\n"),
    });
  } else {
    console.info("Contact form submission:", parsed.data);
  }

  return NextResponse.json({ message: "Message sent successfully. I will get back to you soon." });
}
