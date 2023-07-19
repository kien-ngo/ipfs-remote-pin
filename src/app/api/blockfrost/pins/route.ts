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
  console.log({cid, token, name})
  const response = await fetch(
    `https://ipfs.blockfrost.io/api/v0/ipfs/pin/add/${cid}`,
    {
      method: "POST",
      headers: {
        project_id: token,
      },
    }
  ).then((r) => r.json());
  return NextResponse.json(response);
}
