import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Private-Network": "true",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    const { base64, filename } = await req.json();
    const data = base64.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(data, "base64");
    const filePath = path.join(process.cwd(), "public", filename);
    await writeFile(filePath, buffer);
    return NextResponse.json({ ok: true, path: filePath }, { headers: corsHeaders });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500, headers: corsHeaders });
  }
}
