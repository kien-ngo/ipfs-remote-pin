import { ReactNode, useEffect, useState } from "react";
const Pin = dynamic(() => import("./Pin"), { ssr: false });
import { PINNING_SERVICES } from "@/const";
import { ApiReponseProvider } from "./ApiResponseProvider";
import dynamic from "next/dynamic";

export default function RemovePinProvider({
  service,
  children,
}: {
  service: (typeof PINNING_SERVICES)[number];
  children: ReactNode;
}) {
  const [accessToken, setAccessToken] = useState<string>("");

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
    <div className="flex flex-col mx-auto mt-20 max-w-[1200px] p-4 w-full">
      <div className="text-center">{service.inputLabel}</div>
      <div className="flex flex-row flex-wrap gap-3 justify-center mx-auto">
        <input
          type="text"
          placeholder={
            service.inputPlaceholder
              ? service.inputPlaceholder
              : `${service.name} API Key (Access Token)`
          }
          className="px-4 py-2 lg:min-w-[650px]"
          value={accessToken ?? ""}
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

      <ApiReponseProvider>
        <details className="mt-4">
          <summary className="cursor-pointer">Pin an object</summary>
          <div className="flex flex-col ml-5 mt-2 border border-gray-400">
            <Pin apiEndpoint={service.apiEndpoint} accessToken={accessToken} />
          </div>
        </details>
        {children}
      </ApiReponseProvider>
    </div>
  );
}
