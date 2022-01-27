import { createContext,useContext } from "react";
import { RootStore } from "./rootStore";


export const StoreContext = createContext(new RootStore());
export const StoreProvider = StoreContext.Provider;

export const useStore = ()=> useContext(StoreContext);
