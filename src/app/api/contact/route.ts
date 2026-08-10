import { Resend } from "resend";
import { NextResponse } from "next/server";

const TO_EMAIL = "thesenthil2105@gmail.com";
/** Resend's shared sandbox sender — swap for a verified mlforge.in address
 *  once the domain is added in the Resend dashboard. */
const FROM_EMAIL = "MLForge Studio <onboarding@resend.dev>";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email not configured" },
      { status: 500 },
    );
  }

  const body = await request.json();
  const { name, email, company, message } = body as Record<string, string>;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
