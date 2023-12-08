import { create } from "zustand";
import { log } from "../../app/zustandLog";

export const userStore = create(
  log((set) => ({
    loading: false,
    error: undefined,
    users: undefined,
    isError: false,
    fetch: async () => {
      try {
        set((state) => {
          state.loading = true;
          state.error = undefined;
          state.isError = false;
          state.users = undefined;
        });
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        set((state) => {
          state.loading = false;
          state.error = undefined;
          state.isError = false;
          state.users = users;
        });
      } catch (err) {
        set((state) => {
          state.loading = false;
          state.error = err.message;
          state.isError = true;
          state.users = undefined;
        });
      }
    },
  }))
);
