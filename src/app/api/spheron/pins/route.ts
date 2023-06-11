import SpheronClient from "@spheron/storage";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader)
    return NextResponse.json({
      success: false,
      message: "Missing Authorization header",
    });
  const token = authHeader.split(" ")[1];
  const client = new SpheronClient({ token });
  const { cid, name } = await req.json();
  const response = await client.pinCID({
    name,
    cid,
  });
  return NextResponse.json(response);
}
