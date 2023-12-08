import { immer } from "zustand/middleware/immer";

export const log = (config) =>
  immer((set, get, api) =>
    config(
      (...args) => {
        set(...args);
        let state = get(),
          newObj = {};

        Object.keys(state).map((key) => {
          if (typeof state[key] !== "function") {
            newObj[key] = state[key];
          }
        });
        console.log(newObj);
      },
      get,
      api
    )
  );
