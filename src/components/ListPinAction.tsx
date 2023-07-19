import { Dispatch, SetStateAction } from "react";

type TProps = {
  apiEndpoint: string;
  accessToken: string;
  setApiResponse: Dispatch<SetStateAction<string>>;
};

export default function ListPinAction({
  apiEndpoint,
  accessToken,
  setApiResponse,
}: TProps) {
  const listPin = async () => {
    setApiResponse(`{ "message": "Making request..." }`);
    const response = await fetch(`${apiEndpoint}/pins`, {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then((r) => r.json());
    console.log(response);
    setApiResponse(response);
  };
  return (
    <>
      <button
        onClick={listPin}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        List all pin objects
      </button>
    </>
  );
}
