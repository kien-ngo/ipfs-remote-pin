import { PINNING_SERVICES } from "@/const";
import { useState } from "react";
import { ACTIONS, TAction } from "./actions";
import dynamic from "next/dynamic";
const ActionContainer = dynamic(() => import("./ActionContainer"), {
  ssr: false,
});
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function ServiceProvider() {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const selectedService = PINNING_SERVICES[selectedIndex];
  const supportedActions: TAction[] = !selectedService
    ? []
    : ACTIONS.filter((item) =>
        selectedService.supportedActions.includes(item.id)
      );
  return (
    <>
      <div className="mx-auto px-1 text-3xl mt-6 text-center lg:min-w-[700px] md:w-[700px] text-white">
        One single interface for pinning CIDs to remote pinning services
      </div>
      <div className="mx-auto flex flex-row justify-center gap-4 mt-4">
        <a href="https://github.com/kien-ngo/ipfs-remote-pin" target="_blank">
          <FaGithub size={50} />
        </a>
        <a href="https://twitter.com/kienngo_" target="_blank">
          <FaTwitter size={50} />
        </a>
      </div>
      <div className="mx-auto my-4 p-4 bg-white rounded shadow lg:min-w-[700px] md:w-[700px]">
        <label htmlFor="pinningService" className="block font-semibold mb-1">
          Select Pinning Service
        </label>
        <select
          id="pinningService"
          className="w-full border border-gray-300 rounded px-3 py-2"
          onChange={(e) => {
            const val = Number(e.target.value);
            if (isNaN(val) || val < 0) return;
            setSelectedIndex(val);
          }}
        >
          <option value="">Select a service</option>
          {PINNING_SERVICES.map((item, index) => (
            <option
              key={item.name}
              value={index}
              style={{ display: item.ready ? "" : "none" }}
            >
              {item.name}
            </option>
          ))}
        </select>
        {selectedService && (
          <>
            <hr className="border-t border-t-gray-300 mt-4" />
            <div className="mb-4 mt-2">
              <h2 className="text-xl font-semibold mb-2 ">
                {selectedService.name}
              </h2>
              {/* <p className="mb-4">
                {selectedService.name} is a decentralized file storage service
                powered by IPFS. Use the form below to remotely pin CIDs to{" "}
                {selectedService.name}.
              </p> */}
              <p>
                Website:{" "}
                <a
                  href={selectedService.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  {selectedService.website.replace(/^https?:\/\//, "")}
                </a>
              </p>
              <p className="mb-4">
                Docs:{" "}
                <a
                  href={selectedService.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  {selectedService.docsUrl.replace(/^https?:\/\//, "")}
                </a>
              </p>
              {selectedService.discontinued && (
                <div className="text-center text-red-500">
                  **This service has been discontinued**
                </div>
              )}
            </div>
            <ActionContainer
              service={selectedService}
              supportedActions={supportedActions}
            ></ActionContainer>
          </>
        )}
      </div>
    </>
  );
}
