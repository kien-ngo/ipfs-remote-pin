import { ACTIONS } from "./components/actions";

type TPinningService = {
  name: string;
  website: string;
  docsUrl: string;
  note: string;
  discontinued: boolean; // Whether the service is still running or not

  /**
   *  Whether the service is supported by this app or not
   * If set to `true`, the service will show up in the dropdown list
   * @default false
   */
  ready: boolean;
  apiEndpoint: string;
  keyName: string; // key as in "key-value" for localStorage

  /**
   * Whether the service's APIs are fully compliant with the IPFS PSA requirements
   * The app's interface will follow the PSA format
   * If a service's pinning APIs aren't PSA compliant, we will create a custom API route
   * for that service. An example would be: Infura and Spheron
   */
  psaCompliant: boolean;
  inputLabel: string;
  inputPlaceholder?: string;
  supportedActions: (typeof ACTIONS)[number]["id"][]; // Additional actions supported by the APIs - should not include "pin"
};

export const PINNING_SERVICES: TPinningService[] = [
  {
    name: "Gateway3",
    website: "https://gw3.io",
    docsUrl: "https://doc.gw3.io/api/gateway/pinning.html",
    note: "As of June 5th 2023, the pin api only accept cid and not its associate name/label",
    discontinued: false,
    ready: true,
    apiEndpoint: "/api/gw3",
    keyName: "gw3AccessToken",
    psaCompliant: false,
    inputLabel: "Gateway3 Access & Secret key",
    inputPlaceholder: "<ACCESS_KEY>:<SECRET_KEY>",
    supportedActions: ["unpin"],
  },
  {
    name: "Filebase.com",
    website: "https://filebase.com",
    docsUrl:
      "https://docs.filebase.com/api-documentation/ipfs-pinning-service-api",
    note: "Pinning APIs are available to paid customers",
    discontinued: false,
    ready: true,
    apiEndpoint: "https://api.filebase.io/v1/ipfs",
    keyName: "filebaseAccessToken",
    psaCompliant: true,
    inputLabel: "Filebase Access Token",
    supportedActions: ["list", "get_pin"],
  },
  {
    name: "NFT.Storage",
    website: "https://nft.storage",
    docsUrl: "https://nft.storage/docs/how-to/pinning-service",
    note: "",
    discontinued: false,
    ready: true,
    apiEndpoint: "https://api.nft.storage",
    keyName: "nftStorageAccessToken",
    psaCompliant: true,
    inputLabel: "NFT.Storage API Key",
    inputPlaceholder: "eyJhbGciOi...",
    supportedActions: ["list", "get_pin"],
  },
  {
    name: "4everland.org",
    website: "https://4everland.org",
    docsUrl:
      "https://docs.4everland.org/storage/4ever-pin/pinning-services-api",
    note: "",
    discontinued: false,
    ready: true,
    apiEndpoint: "https://api.4everland.dev",
    keyName: "4verlandAccessToken",
    psaCompliant: true,
    inputLabel: "4everland's Access Token",
    supportedActions: ["list", "get_pin"],
  },
  {
    name: "Estuary.tech",
    website: "https://estuary.tech",
    docsUrl: "https://docs.estuary.tech/api/add-and-pin-object",
    note: "",
    discontinued: false,
    ready: true,
    apiEndpoint: "https://api.estuary.tech/pinning",
    keyName: "estuaryAccessToken",
    psaCompliant: true,
    inputLabel: "Estuary's API Key",
    supportedActions: ["list", "get_pin"],
  },
  {
    name: "Web3.storage",
    website: "https://web3.storage",
    docsUrl: "https://web3.storage/docs/how-tos/pinning-services-api/",
    note: "web3.storage's Pinning Service API is not to be used for ongoing production traffic, but rather for one-time migrations",
    discontinued: false,
    ready: true,
    apiEndpoint: "https://api.web3.storage",
    keyName: "web3StorageAccessToken",
    psaCompliant: true,
    inputLabel: "Web3.Storage API Token",
    inputPlaceholder: "eyJhbGciOi...",
    supportedActions: ["list", "get_pin"],
  },
  {
    name: "Infura.io",
    website: "https://infura.io",
    docsUrl: "https://docs.infura.io/infura/networks/ipfs/http-api-methods",
    note: "As of June 5th 2023, the pin api only accept cid and not its associate name/label",
    discontinued: false,
    ready: true,
    apiEndpoint: "/api/infura",
    keyName: "infuraAccessToken",
    psaCompliant: false,
    inputLabel: "Infura project ID & secret",
    inputPlaceholder: "<PROJECT_ID>:<PROJECT_SECRET>",
    supportedActions: [],
  },
  {
    name: "Dolpin.io",
    website: "https://dolpin.io",
    docsUrl: "https://docs.dolpin.io/pinning-api",
    note: "",
    discontinued: false,
    ready: true,
    apiEndpoint: "/api/dolpin",
    keyName: "dolpinAccessToken",
    psaCompliant: false,
    inputLabel: "Dolpin Access Token",
    inputPlaceholder: "eyJhbGciOi...",
    supportedActions: [],
  },
  {
    name: "Chainsafe.io Storage",
    website: "https://storage.chainsafe.io",
    docsUrl: "https://docs.storage.chainsafe.io",
    note: "",
    discontinued: false,
    ready: false,
    apiEndpoint: "https://api.chainsafe.io/api/v1",
    keyName: "chainsafeApiKey",
    psaCompliant: true,
    inputLabel: "Chainsafe API Key",
    supportedActions: ["list", "get_pin"],
  },
  {
    name: "Pinata.cloud",
    website: "https://pinata.cloud",
    docsUrl: "https://docs.pinata.cloud/pinata-api/pinning/pin-by-cid",
    note: "",
    discontinued: false,
    ready: true,
    apiEndpoint: "https://api.pinata.cloud/psa",
    keyName: "pinataAccessToken",
    psaCompliant: true,
    inputLabel: "Pinata JWT",
    inputPlaceholder: "eyJhbGciOi...",
    supportedActions: ["list", "get_pin"],
  },
  {
    name: "Crust.network",
    website: "https://crust.network",
    docsUrl: "https://wiki.crust.network/docs/en/buildFileStoringWithGWDemo",
    note: "",
    discontinued: false,
    ready: true,
    apiEndpoint: "https://pin.crustcode.com/psa",
    keyName: "crustAccessToken",
    psaCompliant: true,
    inputLabel: "Crust Access Token",
    supportedActions: ["list", "get_pin"],
  },
  {
    name: "Eternum.io",
    website: "https://eternum.io",
    docsUrl: "https://www.eternum.io/help/api",
    note: "",
    discontinued: true,
    ready: true,
    apiEndpoint: "/api/eternum",
    keyName: "eternumAccessToken",
    psaCompliant: false,
    inputLabel: "Eternum Access Token",
    supportedActions: [],
  },
  {
    name: "Blockfrost.io",
    website: "https://blockfrost.io",
    docsUrl: "https://blockfrost.dev/docs/start-building/ipfs/",
    note: "",
    discontinued: false,
    ready: true,
    apiEndpoint: "/api/blockfrost",
    keyName: "blockforstProjectId",
    psaCompliant: false,
    inputLabel: "Blockfrost Project ID",
    inputPlaceholder: "ipfs...",
    supportedActions: [],
  },
  {
    name: "Spheron.network",
    website: "https://spheron.network",
    docsUrl: "https://docs.spheron.network/sdk/storage",
    note: "",
    discontinued: false,
    ready: true,
    apiEndpoint: "/api/spheron",
    keyName: "spheronAccessToken",
    psaCompliant: false,
    inputLabel: "Spheron Access Token",
    inputPlaceholder: "eyJhbGciOi...",
    supportedActions: [],
  },
  {
    name: "Scaleway.com",
    website: "https://sacleway.com",
    docsUrl: "https://scaleway.com/en/docs/labs/ipfs/api-cli/ipfs-operations",
    note: "",
    discontinued: false,
    ready: true,
    apiEndpoint: "/api/scaleway",
    keyName: "scalewayAuthToken",
    psaCompliant: false,
    inputLabel: "Scaleway Auth Token",
    inputPlaceholder: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    supportedActions: [],
  },
];
