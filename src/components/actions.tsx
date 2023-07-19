export type TAction = {
  label: string;
  id: string;
  tooltip: string;
};

export const ACTIONS: TAction[] = [
  {
    label: "Pin",
    id: "pin",
    tooltip: "Pin an object",
  },
  {
    label: "List",
    id: "list",
    tooltip: "List all pin objects",
  },
  {
    label: "Get pin",
    id: "get_pin",
    tooltip: "Get a pin object",
  },
  {
    label: "Remove pin",
    id: "remove_pin",
    tooltip: "Remove a pin object",
  },
];
