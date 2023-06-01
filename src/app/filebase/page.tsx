"use client";

import List from "@/components/filebase/List";
import Pin from "@/components/filebase/Pin";

import { createContext, useContext, useEffect, useState } from "react";
const API_ENDPOINT = "https://api.filebase.io/v1/ipfs";
type TFilebaseContext = {
  accessToken: string;
  apiEndpoint: string;
};

const FilebaseContext = createContext<TFilebaseContext>({
  accessToken: "",
  apiEndpoint: "",
});

const actions = [
  { name: "Pin an object", component: <Pin /> },
  { name: "Get list of pins", component: <List /> },
];
export default function Page() {
  const [accessToken, setAccessToken] = useState<string>("");
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
    <div className="flex flex-col mx-auto mt-20 max-w-[1200px] p-4 w-full">
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

      <h1 className="text-3xl font-bold mt-10">Actions</h1>
      <FilebaseContext.Provider
        value={{
          accessToken,
          apiEndpoint: API_ENDPOINT,
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
