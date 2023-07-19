import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader)
    return NextResponse.json({
      success: false,
      message: "Missing Authorization header",
    });
  const token = authHeader.split(" ")[1];
  const { cid, name } = await req.json();
  const response = await fetch(`https://www.eternum.io/api/pin/?key=${token}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      body: JSON.stringify({ hash: cid, name, tag: "" }),
    },
  }).then((r) => r.json());
  return NextResponse.json(response);
}
