export const PINNING_SERVICES = [
  {
    name: "Filebase",
    website: "https://filebase.com",
    docsUrl:
      "https://docs.filebase.com/api-documentation/ipfs-pinning-service-api",
    note: "Pinning APIs are available to paid customers",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/filebase",
    ready: true,
    apiEndpoint: "https://api.filebase.io/v1/ipfs",
    keyName: "filebaseAccessToken",
  },
  {
    name: "NFT.Storage",
    website: "https://nft.storage",
    docsUrl: "https://nft.storage/docs/how-to/pinning-service",
    note: "",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/nft-storage",
    ready: true,
    apiEndpoint: "https://api.nft.storage",
    keyName: "nftStorageAccessToken",
  },
  {
    name: "4everland",
    website: "https://4everland.org",
    docsUrl:
      "https://docs.4everland.org/storage/4ever-pin/pinning-services-api",
    pinningEndpoint: "https://api.4everland.dev",
    note: "",
    discontinued: false,
    supportsMultiplePins: true,
    pathname: "/4everland",
    ready: true,
    apiEndpoint: "https://api.4everland.dev",
    keyName: "4verlandAccessToken",
  },
  {
    name: "Estuary",
    website: "https://estuary.tech",
    docsUrl: "https://docs.estuary.tech/api/add-and-pin-object",
    pinningEndpoint: "https://api.estuary.tech",
    note: "",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/estuary",
    ready: true,
    apiEndpoint: "https://api.estuary.tech/pinning",
    keyName: "estuaryAccessToken",
  },
  {
    name: "web3.storage",
    website: "https://web3.storage",
    docsUrl: "https://web3.storage/docs/how-tos/pinning-services-api/",
    pinningEndpoint: "https://api.web3.storage",
    note: "",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/web3-storage",
    ready: false,
    apiEndpoint: "",
    keyName: "web3StorageAccessToken",
  },
  {
    name: "infura",
    website: "https://infura.io",
    docsUrl: "https://docs.infura.io/infura/networks/ipfs/http-api-methods",
    pinningEndpoint: "https://ipfs.infura.io:5001/api/v0",
    note: "",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/infura",
    ready: false,
    apiEndpoint: "",
    keyName: "infuraAccessToken",
  },
  {
    name: "dolpin",
    website: "https://dolpin.io",
    docsUrl: "https://docs.dolpin.io/pinning-api",
    pinningEndpoint: "https://gateway.dolpin.io/api/v1/documents",
    note: "",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/dolpin",
    ready: false,
    apiEndpoint: "",
    keyName: "dolpinAccessToken",
  },
  {
    name: "chainsafe",
    website: "https://storage.chainsafe.io",
    docsUrl: "https://docs.storage.chainsafe.io",
    pinningEndpoint: "",
    note: "",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/chainsafe",
    ready: false,
    apiEndpoint: "",
    keyName: "chainsafeAccessToken",
  },
  {
    name: "pinata",
    website: "https://pinata.cloud",
    docsUrl: "https://docs.pinata.cloud/pinata-api/pinning/pin-by-cid",
    pinningEndpoint: "https://api.pinata.cloud",
    note: "",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/pinata",
    ready: false,
    apiEndpoint: "",
    keyName: "pinataAccessToken",
  },
] as const;
