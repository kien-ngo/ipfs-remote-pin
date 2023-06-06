import { PINNING_SERVICES } from "@/const";
import RemovePinProvider from "./RemotePinContext";
import { useState } from "react";

export default function ServiceProvider() {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const selectedService = PINNING_SERVICES[selectedIndex];
  return (
    <>
      <div className="text-center mt-10">Select a service</div>
      <select
        className="w-fit px-5 mt-4 py-3 mx-auto"
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
      <br />
      {selectedService && (
        <>
          <div className="text-center">
            Website:{" "}
            <a href={selectedService.website} target="_blank">
              {selectedService.website}
            </a>
          </div>
          <div className="text-center">
            Documentation:{" "}
            <a href={selectedService.docsUrl} target="_blank">
              {selectedService.docsUrl}
            </a>
          </div>
          {selectedService.note && (
            <div className="text-center">*{selectedService.note}</div>
          )}
          {selectedService.discontinued && (
            <div className="text-center text-red-500">
              Warning: This service has been discontinued
            </div>
          )}
          <RemovePinProvider service={selectedService}>
            <></>
          </RemovePinProvider>
        </>
      )}
    </>
  );
}
