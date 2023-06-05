type TPinningService = {
  name: string;
  website: string;
  docsUrl: string;
  note: string;
  discontinued: boolean; // Whether a business is still running or not
  supportsMultiplePins: boolean; // Some services can take in an array of CIDs
  pathname: string;
  ready: boolean; // Whether the service is supported by this app or not
  apiEndpoint: string;
  keyName: string; // key as in "key-value" for localStorage
  psaCompliant: boolean; // Wheher the service's APIs are fully compliant with the IPFS PSA requirements
  inputLabel: string;
  inputPlaceholder?: string;
};

type TCredential = {
  label: string;
  keyName: string;
};

export const PINNING_SERVICES: TPinningService[] = [
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
    psaCompliant: true,
    inputLabel: "Filebase Access Token",
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
    psaCompliant: true,
    inputLabel: "NFT.Storage API Key",
  },
  {
    name: "4everland",
    website: "https://4everland.org",
    docsUrl:
      "https://docs.4everland.org/storage/4ever-pin/pinning-services-api",
    note: "",
    discontinued: false,
    supportsMultiplePins: true,
    pathname: "/4everland",
    ready: true,
    apiEndpoint: "https://api.4everland.dev",
    keyName: "4verlandAccessToken",
    psaCompliant: true,
    inputLabel: "4everland's Access Token",
  },
  {
    name: "Estuary",
    website: "https://estuary.tech",
    docsUrl: "https://docs.estuary.tech/api/add-and-pin-object",
    note: "",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/estuary",
    ready: true,
    apiEndpoint: "https://api.estuary.tech/pinning",
    keyName: "estuaryAccessToken",
    psaCompliant: true,
    inputLabel: "Estuary's API Key",
  },
  {
    name: "web3.storage",
    website: "https://web3.storage",
    docsUrl: "https://web3.storage/docs/how-tos/pinning-services-api/",
    note: "web3.storage's Pinning Service API is not to be used for ongoing production traffic, but rather for one-time migrations",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/web3-storage",
    ready: true,
    apiEndpoint: "https://api.web3.storage",
    keyName: "web3StorageAccessToken",
    psaCompliant: true,
    inputLabel: "Web3.Storage API Token",
  },
  {
    name: "infura",
    website: "https://infura.io",
    docsUrl: "https://docs.infura.io/infura/networks/ipfs/http-api-methods",
    // pinningEndpoint: "https://ipfs.infura.io:5001/api/v0",
    note: "As of June 5th 2023, the pin api only accept cid and not its associate name/label",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/infura",
    ready: true,
    apiEndpoint: "/api/infura",
    keyName: "infuraAccessToken",
    psaCompliant: false,
    inputLabel: "Infura project ID & secret",
    inputPlaceholder: "<PROJECT_ID>:<PROJECT_SECRET>",
  },
  {
    name: "dolpin",
    website: "https://dolpin.io",
    docsUrl: "https://docs.dolpin.io/pinning-api",
    // pinningEndpoint: "https://gateway.dolpin.io/api/v1/documents",
    note: "",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/dolpin",
    ready: false,
    apiEndpoint: "",
    keyName: "dolpinAccessToken",
    psaCompliant: false,
    inputLabel: "Dolpin Acess Token",
  },
  {
    name: "chainsafe",
    website: "https://storage.chainsafe.io",
    docsUrl: "https://docs.storage.chainsafe.io",
    // pinningEndpoint: "",
    note: "",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/chainsafe",
    ready: false,
    apiEndpoint: "",
    keyName: "chainsafeAccessToken",
    psaCompliant: false,
    inputLabel: "Chainsafe Access Token",
  },
  {
    name: "pinata",
    website: "https://pinata.cloud",
    docsUrl: "https://docs.pinata.cloud/pinata-api/pinning/pin-by-cid",
    note: "",
    discontinued: false,
    supportsMultiplePins: false,
    pathname: "/pinata",
    ready: true,
    apiEndpoint: "https://api.pinata.cloud/psa",
    keyName: "pinataAccessToken",
    psaCompliant: true,
    inputLabel: "Pinata JWT",
  },
];
