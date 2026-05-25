import { NextRequest, NextResponse } from "next/server";
import { writeFileSync } from "fs";
import { join } from "path";

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const { base64, filename } = await req.json();
    const data = base64.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(data, "base64");
    const filePath = join(process.cwd(), "public", filename);
    writeFileSync(filePath, buffer);
    return new NextResponse(JSON.stringify({ ok: true, path: filePath }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (e) {
    return new NextResponse(JSON.stringify({ ok: false, error: String(e) }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
