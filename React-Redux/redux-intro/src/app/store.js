import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter/counter";

export const store = configureStore({
  reducer: {
    counter,
  },
});
