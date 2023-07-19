import { Dispatch, SetStateAction, useRef } from "react";

type TProps = {
  apiEndpoint: string;
  accessToken: string;
  setApiResponse: Dispatch<SetStateAction<string>>;
};

export default function DeletePinAction({
  apiEndpoint,
  accessToken,
  setApiResponse,
}: TProps) {
  const requestIdRef = useRef<HTMLInputElement>(null);
  const deletePinObject = async () => {
    if (!requestIdRef.current) return;
    const requestId = requestIdRef.current.value;
    setApiResponse(`{ "message": "Making request..." }`);
    const response = await fetch(`${apiEndpoint}/pins/${requestId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then((r) => r.text());
    setApiResponse(response);
  };
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">
          Request ID <span className="text-red-500 font-bold">*</span>
        </label>
        <input
          type="text"
          ref={requestIdRef}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Enter the requestId"
          required
        />
      </div>

      <button
        onClick={deletePinObject}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Delete pin object
      </button>
    </>
  );
}
