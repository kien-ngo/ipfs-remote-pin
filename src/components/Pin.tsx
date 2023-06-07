import { useRef } from "react";
import { openModal } from "@/utils/modal";
import { useApiResponse } from "./ApiResponseProvider";

export default function Pin({
  apiEndpoint,
  accessToken,
}: {
  apiEndpoint: string;
  accessToken: string;
}) {
  const cidRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLInputElement>(null);
  const { setApiResponse } = useApiResponse();

  const pin = async () => {
    if (!cidRef.current) return;
    const cid = cidRef.current.value;
    if (!labelRef.current) return;
    const name = labelRef.current.value ?? "";
    const response = await fetch(`${apiEndpoint}/pins`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ cid, name }),
    }).then((r) => r.json());
    setApiResponse(response);
    openModal("apiResponseModal");
  };

  return (
    <>
      <div className="mx-auto flex flex-col w-full mt-4 pl-3">
        <label htmlFor="">CID (Hash)*</label>
        <input type="text" placeholder="Qm.../bafy..." ref={cidRef} />
      </div>
      <div className="mx-auto flex flex-col w-full mt-4 pl-3">
        <label htmlFor="">Name/label (optional)</label>
        <input type="text" placeholder="Label for the CID" ref={labelRef} />
      </div>
      <button className="btn mx-auto my-4" onClick={pin}>
        Pin
      </button>
    </>
  );
}
