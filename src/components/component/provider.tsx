import { PropsWithChildren, useEffect, useRef } from "react";
import {
  ComponentContext,
  ComponentStore,
  createComponentStore,
} from "./context";
import { ProviderState } from "./state";

export const ComponentProvider = ({
  children,
  defaultValue,
  onChange,
  value,
}: PropsWithChildren<ProviderState>) => {
  const storeRef = useRef<ComponentStore>();

  if (!storeRef.current) {
    storeRef.current = createComponentStore(defaultValue);
  }

  useEffect(() => {
    storeRef.current?.setState({
      ...value,
    });
  }, [value]);

  useEffect(() => {
    if (onChange) {
      storeRef.current?.subscribe((state) => state, onChange);
    }
  }, [onChange]);

  return (
    <ComponentContext.Provider value={storeRef.current}>
      {children}
    </ComponentContext.Provider>
  );
};
