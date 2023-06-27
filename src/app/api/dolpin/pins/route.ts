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
  const response = await fetch(
    `https://gateway.dolpin.io/api/v1/documents/upload-by-cid/`, // <-- this trailing slash is needed
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${btoa(token)}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        document_type: "cid",
        pinned: true,
        size_in_bytes: 0,
        parent: null,
        cid: cid,
        name: name,
      }),
    }
  ).then((r) => r.json());
  console.log(response);
  return NextResponse.json(response);
}