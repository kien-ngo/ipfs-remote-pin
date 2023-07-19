import { Dispatch, SetStateAction, useRef } from "react";

type TProps = {
  apiEndpoint: string;
  accessToken: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  setApiResponse: Dispatch<SetStateAction<string>>;
};

export default async function UnPinAction({
  apiEndpoint,
  accessToken,
  inputLabel,
  inputPlaceholder,
  setApiResponse,
}: TProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const unpin = async () => {
    if (!inputRef.current) return;
    const value = inputRef.current.value;
  };
  return (
    <>
      <div className="mb-4">
        <label htmlFor="cid" className="block text-gray-700 font-semibold mb-1">
          CID <span className="text-red-500 font-bold">*</span>
        </label>
        <input
          type="text"
          ref={inputRef}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder={inputPlaceholder}
          required
        />
        {/* <span className="text-sm sm:text-xs">
          For example:{" "}
          <a
            className="underline"
            target="_blank"
            href="https://ipfs.io/ipfs/QmUy4jh5mGNZvLkjies1RWM4YuvJh5o2FYopNPVYwrRVGV"
          >
            QmUy4jh5mGNZvLkjies1RWM4YuvJh5o2FYopNPVYwrRVGV
          </a>
        </span> */}
      </div>

      <button
        onClick={unpin}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Remove pin
      </button>
    </>
  );
}
