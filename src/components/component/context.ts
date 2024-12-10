import { createContext, useContext } from "react";
import {
  ComponentActions,
  ComponentState,
  DEFAULT_STATE,
  InitialState,
} from "./state";
import { createStore, useStore } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const createComponentStore = (initProps?: InitialState) => {
  return createStore<ComponentState & ComponentActions>()(
    subscribeWithSelector((set, get) => ({
      ...DEFAULT_STATE,
      ...initProps,
      set: (key, value) => {
        if (typeof value === "function") {
          set({ [key]: value(get()[key]) });
        } else {
          set({ [key]: value });
        }
      },
    }))
  );
};

export type ComponentStore = ReturnType<typeof createComponentStore>;

export const ComponentContext = createContext<ComponentStore | null>(null);

export const useComponentContext = <T>(
  selector: (state: ComponentState & ComponentActions) => T
): T => {
  const store = useContext(ComponentContext);

  if (!store) throw new Error("Missing ComponentContext");

  return useStore(store, selector);
};
