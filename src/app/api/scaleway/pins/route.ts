import { NextRequest, NextResponse } from "next/server";

/**
 *
 * This API is not tested because Scaleway askes me to enter my credit card info
 * but i really didn't want to
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
    `https://api.scaleway.com/ipfs/v1alpha1/regions/fr-par/pins/create-by-cid`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
      body: JSON.stringify({ cid, name }),
    }
  ).then((r) => r.json());
  return NextResponse.json(response);
}
