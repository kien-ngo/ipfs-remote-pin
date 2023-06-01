import { useFilebase } from "./Filebase";

// List pinnings on Filebase
export default function List() {
  const { pinningEndpoint, accessToken, setApiResponse } = useFilebase();

  const list = async () => {
    const response = await fetch(`${pinningEndpoint}/pins`, {
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
