import { createContext, useContext } from "react";

const ProductContext = createContext();
const VisibleContext = createContext();

export { ProductContext, VisibleContext, useContext };
