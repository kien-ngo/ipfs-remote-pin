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
    label: "Unpin",
    id: "unpin",
    tooltip: "Remove a pin object",
  },
];
