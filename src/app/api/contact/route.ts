import { NextResponse } from "next/server";
import { getSupabaseAdmin, hasSupabaseConfig } from "@/lib/supabase/server";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  intent?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const intent = (body.intent ?? "other").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please use a valid email." }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json(
      { ok: false, error: "A few more words would help us reply well." },
      { status: 400 },
    );
  }

  // If Supabase isn't configured, accept gracefully so the form is still useful
  // during local development / preview deploys.
  if (!hasSupabaseConfig()) {
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      phone: phone || null,
      intent,
      message,
      user_agent: req.headers.get("user-agent") ?? null,
    });
    if (error) throw error;
    return NextResponse.json({ ok: true, stored: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "We could not save the note. Please try WhatsApp." },
      { status: 500 },
    );
  }
}
