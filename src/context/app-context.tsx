import { createContext } from "react";

export const initialValues = {
  returnValue: true,
  theme: "dark",
};

export const AppContext = createContext(initialValues);
