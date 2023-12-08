import { create } from "zustand";
// import { immer } from "zustand/middleware/immer";
import { log } from "../../app/zustandLog";

export const useCakeStore = create(
  log((set, get) => ({
    cakes: 10,
    boughtCakes: 0,
    buyCake: () =>
      set((state) => {
        state.cakes--;
        state.boughtCakes++;
      }),
    getState: () => {
      const cakes = get().cakes;
      const boughtCakes = get().boughtCakes;
      return { cakes, boughtCakes };
    },
    restockCakes: ({ cakes }) =>
      set((state) => {
        state.cakes += Number(cakes);
      }),
  }))
);
