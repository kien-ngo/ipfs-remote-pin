"use client";
export default function Home() {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-white rounded shadow">
      <div className="mb-4">
        <label
          htmlFor="pinningService"
          className="block text-gray-700 font-semibold mb-1"
        >
          Pinning Service
        </label>
        <select
          id="pinningService"
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="pinata">Pinata.cloud</option>
          <option value="filebase">Filebase.com</option>
          <option value="nftstorage">Nft.storage</option>
        </select>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Pinata.cloud</h2>
        <p className="text-gray-600 mb-4">
          Pinata.cloud is a decentralized file storage service powered by IPFS.
          Use the form below to remotely pin CIDs to Pinata.
        </p>
        <p className="text-gray-600 mb-4">
          For more information, please visit{" "}
          <a
            href="https://pinata.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            pinata.cloud
          </a>
          .
        </p>
      </div>
      <form>
        <div className="mb-4">
          <label
            htmlFor="apiKey"
            className="block text-gray-700 font-semibold mb-1"
          >
            API Key
          </label>
          <input
            type="text"
            id="apiKey"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your API key"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cid"
            className="block text-gray-700 font-semibold mb-1"
          >
            CID
          </label>
          <input
            type="text"
            id="cid"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter the CID"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter the name"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Pin CID
        </button>
      </form>
    </div>
  );
}
