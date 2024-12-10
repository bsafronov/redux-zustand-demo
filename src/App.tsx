import { useState } from "react";
import { Component } from "./components/component/ui";
import { useAppDispatch } from "./store";
import { componentSlice } from "./store/slice";

function App() {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);

  return (
    <>
      <Component
        value={{
          numeric: count,
        }}
        defaultValue={{
          boolean: true,
        }}
        onChange={(state) => {
          setCount(state.numeric);
          dispatch(
            componentSlice.actions.setComponent({
              id: "component-1",
              data: state,
            })
          );
        }}
      />
    </>
  );
}

export default App;
