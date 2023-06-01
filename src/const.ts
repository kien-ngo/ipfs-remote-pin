export const PINNING_SERVICES = [
  {
    name: "filebase",
    website: "https://filebase.com",
    docsUrl:
      "https://docs.filebase.com/api-documentation/ipfs-pinning-service-api",
    note: "Pinning APIs are available to paid customers",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/filebase",
  },
  {
    name: "nft.storage",
    website: "https://nft.storage",
    docsUrl: "https://nft.storage/docs/how-to/pinning-service",
    note: "",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/nft-storage",
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
  },
  {
    name: "estuary",
    website: "https://estuary.tech",
    docsUrl: "https://docs.estuary.tech/api/add-and-pin-object",
    pinningEndpoint: "https://api.estuary.tech",
    note: "",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/estuary",
  },
  {
    name: "web3.storage",
    website: "https://web3.storage",
    docsUrl: "https://web3.storage/docs/how-tos/pinning-services-api/",
    pinningEndpoint: "https://api.web3.storage/pins",
    note: "",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/web3-storage",
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
  },
] as const;