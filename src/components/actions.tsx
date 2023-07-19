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
    label: "Unpin",
    id: "unpin",
  },
];
