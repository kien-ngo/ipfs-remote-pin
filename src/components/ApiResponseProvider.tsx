import { openModal } from "@/utils/modal";
import { ReactNode, createContext, useContext, useState } from "react";

type TApiResponseContext = {
  apiResponse: any;
  setApiResponse: Function;
};

const ApiResponseContext = createContext<TApiResponseContext>({
  apiResponse: {},
  setApiResponse: () => {},
});

export const ApiReponseProvider = ({ children }: { children: ReactNode }) => {
  const [apiResponse, setApiResponse] = useState<any>({});

  return (
    <ApiResponseContext.Provider value={{ apiResponse, setApiResponse }}>
      <button
        className="btn btn-primary"
        onClick={() => openModal("apiResponseModal")}
      >
        View API Response
      </button>
      <dialog id="apiResponseModal" className="modal">
        <form
          method="dialog"
          className="modal-box max-w-[90vw] max-h-[90vh] w-[900px] min-h-[500px]"
        >
          <button
            // @ts-ignore
            htmlFor="apiResponseModal"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">API Response</h3>
          <div className="w-full h-full border border-gray-500 p-3">
            <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {children}
    </ApiResponseContext.Provider>
  );
};

export const useApiResponse = () => {
  const context = useContext(ApiResponseContext);
  if (context === undefined) {
    throw new Error("useApiResponse must be used inside ApiResponseProvider");
  }
  return context;
};
