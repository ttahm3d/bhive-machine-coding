import { useContext } from "react";
import { BhiveSpacesContext } from "@/context/BhiveSpaces";

export const useBhiveSpaces = () => useContext(BhiveSpacesContext);
