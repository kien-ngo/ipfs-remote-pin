"use client";
import { PINNING_SERVICES } from "@/const";
import { useState } from "react";

export default function Home() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number>(0);
  const selectedService = PINNING_SERVICES[selectedServiceIndex];
  return (
    <>
      <div className="text-center mt-10">Select a service</div>
      <select name="" id="" className="w-fit px-5 mt-4 py-3 mx-auto">
        {PINNING_SERVICES.map((item) => (
          <option key={item.name}>{item.name}</option>
        ))}
      </select>
      <br />
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
      {selectedService.component}
    </>
  );
}
