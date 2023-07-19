import { Dispatch, SetStateAction, useRef } from "react";

type TProps = {
  apiEndpoint: string;
  accessToken: string;
  setApiResponse: Dispatch<SetStateAction<string>>;
};

export default function PinAction({
  apiEndpoint,
  accessToken,
  setApiResponse,
}: TProps) {
  const cidRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLInputElement>(null);
  const pin = async () => {
    if (!cidRef.current) return;
    const cid = cidRef.current.value;
    if (!labelRef.current) return;
    const name = labelRef.current.value ?? "";
    setApiResponse(`{ "message": "Making request..." }`);
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
  };
  return (
    <>
      <div className="mb-4">
        <label htmlFor="cid" className="block text-gray-700 font-semibold mb-1">
          CID <span className="text-red-500 font-bold">*</span>
        </label>
        <input
          type="text"
          ref={cidRef}
          id="cid"
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Enter the CID"
          required
        />
        <span className="text-sm sm:text-xs">
          For example:{" "}
          <a
            className="underline"
            target="_blank"
            href="https://ipfs.io/ipfs/QmUy4jh5mGNZvLkjies1RWM4YuvJh5o2FYopNPVYwrRVGV"
          >
            QmUy4jh5mGNZvLkjies1RWM4YuvJh5o2FYopNPVYwrRVGV
          </a>
        </span>
      </div>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 font-semibold mb-1"
        >
          Name (optional)
        </label>
        <input
          type="text"
          id="name"
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Label for the CID"
          ref={labelRef}
          required
        />
      </div>
      <button
        onClick={pin}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Pin CID
      </button>
    </>
  );
}
