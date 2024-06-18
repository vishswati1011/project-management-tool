import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./userSlice";
import { authApi } from "./authSlice";
import { workspaceApi } from "./workspaceSlice";
import { boardApi } from "./boardSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [workspaceApi.reducerPath]: workspaceApi.reducer,
    [boardApi.reducerPath]: boardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      authApi.middleware,
      workspaceApi.middleware,
      boardApi.middleware
    ),
});

setupListeners(store.dispatch);
