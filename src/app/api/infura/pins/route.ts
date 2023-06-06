import { NextRequest, NextResponse } from "next/server";
/**
 * The owner of eternum.io has decided to no longer run the service. Please use other alternatives
 */
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
    `https://ipfs.infura.io:5001/api/v0/pin/add?arg=${cid}`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(token)}`,
      },
    }
  ).then((r) => r.json());
  console.log(response);
  return NextResponse.json(response);
}
