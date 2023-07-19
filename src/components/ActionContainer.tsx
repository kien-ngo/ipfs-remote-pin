import { ReactNode, useEffect, useState } from "react";
import { PINNING_SERVICES } from "@/const";
import { ACTIONS, TAction } from "./actions";
import PinAction from "./PinAction";
import UnPinAction from "./UnPinAction";
import ListPinAction from "./ListPinAction";

export default function ActionContainer({
  service,
  supportedActions,
}: {
  service: (typeof PINNING_SERVICES)[number];
  supportedActions: TAction[];
}) {
  const actions: TAction[] = [ACTIONS[0], ...supportedActions];
  const [accessToken, setAccessToken] = useState<string>("");
  const [apiResponse, setApiResponse] = useState<string>("{}");
  const [selectedActionIndex, setSelectedActionIndex] = useState<number>(0); // default to Pin
  const selectedAction = ACTIONS[selectedActionIndex];

  const actionMap: Record<(typeof ACTIONS)[number]["id"], ReactNode> = {
    pin: (
      <PinAction
        apiEndpoint={service.apiEndpoint}
        accessToken={accessToken}
        setApiResponse={setApiResponse}
      />
    ),
    unpin: service.supportedActions.includes("unpin") ? (
      <UnPinAction
        apiEndpoint={service.apiEndpoint}
        accessToken={accessToken}
        setApiResponse={setApiResponse}
      />
    ) : (
      <></>
    ),
    list: service.supportedActions.includes("list") ? (
      <ListPinAction
        apiEndpoint={service.apiEndpoint}
        accessToken={accessToken}
        setApiResponse={setApiResponse}
      />
    ) : (
      <></>
    ),
  };

  const Action = () => actionMap[selectedAction.id];

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
      {accessToken && (
        <>
          <hr />
          <br />
          <div className="flex flex-row gap-2 flex-wrap mb-4">
            {actions.map((item, index) => (
              <button
                onClick={() => setSelectedActionIndex(index)}
                className={`${
                  selectedActionIndex === index
                    ? "bg-blue-500 border-2 border-gray-600"
                    : "bg-gray-400 text-white hover:border-2 hover:border-gray-600"
                } rounded-lg px-3`}
                key={item.id}
              >
                {item.label}
              </button>
            ))}
          </div>
          <Action />
          <details className="mt-4" open>
            <summary className="font-semibold flex flex-row justify-between">
              <span>API Response</span>{" "}
              <span className="flex flex-row gap-3">
                <button
                  onClick={async () => {
                    await window.navigator.clipboard.writeText(apiResponse);
                    alert("Copied!");
                  }}
                >
                  Copy
                </button>
                <button
                  className="text-red-500"
                  onClick={() => setApiResponse("{}")}
                >
                  Clear
                </button>
              </span>
            </summary>
            <pre className="bg-gray-100 p-4 overflow-auto max-h-[800px]">
              {JSON.stringify(apiResponse, null, 2)}
            </pre>
          </details>
        </>
      )}
    </>
  );
}
