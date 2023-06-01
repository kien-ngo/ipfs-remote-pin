"use client";

import Pin from "@/components/nft-storage/Pin";
import { createContext, useContext, useEffect, useState } from "react";
const API_ENDPOINT = "https://api.nft.storage/pins";

type TNftStorageContext = {
  accessToken: string;
  apiEndpoint: string;
};

const NftStorageContext = createContext<TNftStorageContext>({
  accessToken: "",
  apiEndpoint: "",
});

const actions = [{ name: "Pin an object", component: <Pin /> }];

export default function Page() {
  const [accessToken, setAccessToken] = useState<string>("");
  const keyName = "nftStorageAccessToken";

  useEffect(() => {
    const _accessToken = window.localStorage.getItem(keyName);
    if (_accessToken) setAccessToken(_accessToken);
  }, []);

  const saveAccessTokenToLocalStorage = () => {
    window.localStorage.setItem(keyName, accessToken);
    alert("API key saved to localStorage");
  };

  return (
    <div className="flex flex-col mx-auto mt-20 max-w-[1200px] p-4 w-full">
      <label htmlFor="">NFT.storage API key</label>
      <div className="flex flex-row flex-wrap gap-3">
        <input
          type="text"
          placeholder="NFT.storage api key"
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
      <NftStorageContext.Provider
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
      </NftStorageContext.Provider>
    </div>
  );
}

export const useNftStorage = () => {
  const context = useContext(NftStorageContext);
  if (context === undefined) {
    throw new Error("useNftStorage must be used inside NftStorageProvider");
  }
  return context;
};
