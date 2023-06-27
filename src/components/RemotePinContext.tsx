import { useEffect, useRef, useState } from "react";
import { PINNING_SERVICES } from "@/const";

export default function RemovePinProvider({
  service,
}: {
  service: (typeof PINNING_SERVICES)[number];
}) {
  const [accessToken, setAccessToken] = useState<string>("");
  const [apiResponse, setApiResponse] = useState<any>({});

  const cidRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const keys = window.localStorage.getItem("ipfsRemotePinKeys");
    if (!keys) return;
    const _accessToken = JSON.parse(keys)[service.keyName];
    setAccessToken(_accessToken ?? "");
  }, [service]);

  const saveAccessTokenToLocalStorage = () => {
    const keys = window.localStorage.getItem("ipfsRemotePinKeys");
    const data = keys ? JSON.parse(keys) : {};
    data[service.keyName] = accessToken;
    window.localStorage.setItem("ipfsRemotePinKeys", JSON.stringify(data));
    alert(`${service.name} key(s) saved to localStorage`);
  };

  const pin = async () => {
    if (!cidRef.current) return;
    const cid = cidRef.current.value;
    if (!labelRef.current) return;
    const name = labelRef.current.value ?? "";
    setApiResponse({message: 'Making request...'})
    const response = await fetch(`${service.apiEndpoint}/pins`, {
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
        <label
          htmlFor="apiKey"
          className="block text-gray-700 font-semibold mb-1"
        >
          API Key
        </label>
        <div className="flex flex-row gap-2">
          <input
            type="text"
            id="apiKey"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
            placeholder={
              service.inputPlaceholder
                ? service.inputPlaceholder
                : `${service.name} API Key (Access Token)`
            }
            value={accessToken ?? ""}
            onChange={(e) => setAccessToken(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded"
            onClick={saveAccessTokenToLocalStorage}
          >
            Save
          </button>
        </div>
        <span className="text-sm sm:text-xs">
          This app does not collect your keys. View{" "}
          <a
            className="underline"
            target="_blank"
            href="https://github.com/kienngo98/ipfs-remote-pin"
          >
            source code
          </a>
        </span>
      </div>
      <hr />
      <br />
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
      <details className="mt-4" open>
        <summary className="font-semibold flex flex-row justify-between">
          <span>API Response</span>{" "}
          <span className="flex flex-row gap-3">
            <button
              onClick={async () => {
                await window.navigator.clipboard.writeText(
                  JSON.stringify(apiResponse)
                );
                alert("Copied!");
              }}
            >
              Copy
            </button>
            <button className="text-red-500" onClick={() => setApiResponse({})}>
              Clear
            </button>
          </span>
        </summary>
        <pre className="bg-gray-100 p-4 overflow-auto">
          {JSON.stringify(apiResponse, null, 2)}
        </pre>
      </details>
    </>
  );
}
