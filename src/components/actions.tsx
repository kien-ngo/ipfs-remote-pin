export type TAction = {
  label: string;
  id: string;
};

export const ACTIONS: TAction[] = [
  {
    label: "Pin",
    id: "pin",
  },
  {
    label: "List",
    id: "list",
  },
  {
    label: "Unpin",
    id: "unpin",
  },
];
