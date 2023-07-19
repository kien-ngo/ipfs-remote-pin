import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://gw3.io";

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader)
    return NextResponse.json({
      success: false,
      message: "Missing Authorization header",
    });
  const accessAndSecretKeys = authHeader.split(" ")[1];
  const [accessKey, secretKey] = accessAndSecretKeys.split(":");
  if (!accessKey)
    return NextResponse.json({
      success: false,
      message: "Missing Gw3 Access Key",
    });
  if (!secretKey)
    return NextResponse.json({
      success: false,
      message: "Missing Gw3 Secret Key",
    });
  const { cid, name } = await req.json();
  const now = new Date().getTime();
  const response = await fetch(
    `${BASE_URL}/api/v0/pin/add?arg=${cid}&ts=${now}`,
    {
      method: "POST",
      headers: {
        "X-Access-Key": accessKey,
        "X-Access-Secret": secretKey,
      },
    }
  ).then((r) => r.json());
  return NextResponse.json(response);
}

export async function DELETE(req: NextRequest) {
  return NextResponse.json({
    success: false,
    message: "Test delete request",
  });
}
