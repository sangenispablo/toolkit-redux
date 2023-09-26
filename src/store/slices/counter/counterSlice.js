import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementar: (state) => {
      state.value += 1;
    },
    decrementar: (state) => {
      state.value -= 1;
    },
    incrementarPorValor: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementar, decrementar, incrementarPorValor } =
  counterSlice.actions;