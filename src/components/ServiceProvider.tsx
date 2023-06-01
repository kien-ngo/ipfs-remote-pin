import { PINNING_SERVICES } from "@/const";
import { usePathname, useRouter } from "next/navigation";

export default function ServiceProvider() {
  const router = useRouter();
  const pathname = usePathname();
  const selectedService = PINNING_SERVICES.find(
    (item) => item.pathname === pathname
  );
  console.log({ pathname });
  return (
    <>
      <div className="text-center mt-10">Select a service</div>
      <select
        defaultValue={pathname}
        className="w-fit px-5 mt-4 py-3 mx-auto"
        onChange={(e) => {
          const pathname = e.target.value;
          if (pathname) router.push(pathname);
        }}
      >
        <option value="">Select a service</option>
        {PINNING_SERVICES.map((item) =>
          item.ready ? (
            <option key={item.name} value={item.pathname}>
              {item.name}
            </option>
          ) : (
            <></>
          )
        )}
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
        </>
      )}
    </>
  );
}
