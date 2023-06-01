import { PINNING_SERVICES } from "@/const";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import Pin from "./Pin";
import List from "./List";

type TFilebaseContext = {
  accessToken: string;
  setApiResponse: Function;
  pinningEndpoint: string;
};

const FilebaseContext = createContext<TFilebaseContext>({
  accessToken: "",
  setApiResponse: () => {},
  pinningEndpoint: "",
});

const actions = [
  { name: "Pin an object", component: <Pin /> },
  { name: "Get list of pins", component: <List /> },
];

export default function FilebaseComponent({
  serviceId,
}: {
  serviceId: (typeof PINNING_SERVICES)[number]["name"];
}) {
  const service = PINNING_SERVICES.find((item) => item.name === serviceId)!;
  const [accessToken, setAccessToken] = useState<string>("");
  const [apiResponse, setApiResponse] = useState<any>({});
  const keyName = "filebaseAccessToken";

  useEffect(() => {
    const _accessToken = window.localStorage.getItem(keyName);
    if (_accessToken) setAccessToken(_accessToken);
  }, []);

  const saveAccessTokenToLocalStorage = () => {
    window.localStorage.setItem(keyName, accessToken);
    alert("Access token saved to localStorage");
  };

  return (
    <div className="flex flex-col mx-auto mt-20 max-w-[1200px] border p-4 w-full">
      <label htmlFor="">Filebase access token</label>
      <div className="flex flex-row flex-wrap gap-3">
        <input
          type="text"
          placeholder="Filebase access token"
          className="px-4 py-2 lg:min-w-[650px]"
          defaultValue={accessToken}
          onChange={(e) => setAccessToken(e.target.value)}
        />
        <button
          className="border px-3 hover:bg-white hover:text-black duration-100"
          onClick={saveAccessTokenToLocalStorage}
        >
          Save
        </button>
      </div>
      <div className="mt-10">
        <span>API Response</span>
        <span
          className="text-red-500 underline cursor-pointer ml-4"
          onClick={() => setApiResponse({})}
        >
          Clear
        </span>
      </div>
      <pre className="bg-gray-600 overflow-auto max-h-[500px]">
        {JSON.stringify(apiResponse, null, 2)}
      </pre>

      <h1 className="text-3xl font-bold mt-10">Actions</h1>
      <FilebaseContext.Provider
        value={{
          accessToken,
          setApiResponse,
          pinningEndpoint: service.pinningEndpoint,
        }}
      >
        {actions.map((action) => (
          <details key={action.name} className="mt-4">
            <summary className="cursor-pointer">{action.name}</summary>
            <div className="flex flex-col ml-5 mt-2 border border-gray-400">
              {action.component}
            </div>
          </details>
        ))}
      </FilebaseContext.Provider>
    </div>
  );
}

export const useFilebase = () => {
  const context = useContext(FilebaseContext);
  if (context === undefined) {
    throw new Error("useFilebase must be used inside FilebaseProvider");
  }
  return context;
};
