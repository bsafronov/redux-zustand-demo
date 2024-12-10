import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComponentState } from "../components/component/state";

const initialState: Record<string, ComponentState> = {};

export const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    setComponent: (
      state,
      action: PayloadAction<{
        id: string;
        data: ComponentState;
      }>
    ) => {
      state[action.payload.id] = action.payload.data;
    },
  },
});
