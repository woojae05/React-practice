import { createContext,useContext } from "react";
import { RooteStore } from "./rootStore";

export const StoreContext = createContext(new RooteStore());
export const StoreProvider = StoreContext.Provider;  

export const useStore = () => useContext(StoreContext)