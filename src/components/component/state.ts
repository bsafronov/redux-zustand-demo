export type InitialState = Partial<ComponentState>;
export type ProviderState = {
  value?: InitialState;
  defaultValue?: InitialState;
  onChange?: (state: ComponentState) => void;
};

export type ComponentState = {
  numeric: number;
  text: string;
  boolean: boolean;
  array: string[];
  user: {
    name: string;
    age: number;
  } | null;
};

export type ComponentActions = {
  set: <T extends keyof ComponentState>(
    key: T,
    value: ComponentState[T] | ((prev: ComponentState[T]) => ComponentState[T])
  ) => void;
};

export const DEFAULT_STATE: ComponentState = {
  numeric: 0,
  text: "",
  array: [],
  boolean: false,
  user: null,
};
