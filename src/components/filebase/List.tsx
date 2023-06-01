import { useFilebase } from "@/app/filebase/page";
import { useApiResponse } from "../ApiResponseProvider";

// List pinnings on Filebase
export default function List() {
  const { apiEndpoint, accessToken } = useFilebase();
  const { setApiResponse } = useApiResponse();
  const list = async () => {
    const response = await fetch(`${apiEndpoint}/pins`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((r) => r.json());
    setApiResponse(response);
  };
  return (
    <button className="btn" onClick={list}>
      Get list of pins
    </button>
  );
}
