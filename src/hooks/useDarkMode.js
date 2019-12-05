import { useLocalStorage} from "./useLocalStorage"
import React, { useEffect } from "react";

 export function useDarkMode(switchMode) {
    
const [darkMode, setDarkMode] = useLocalStorage("darkMode", switchMode)
const appBody = document.querySelector("body")
 console.log(darkMode);
 useEffect(() => {
    if (darkMode === true) { 
     return   appBody.classList.add("dark-mode")
    }
    return appBody.classList.remove("dark-mode")
  },[darkMode])

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

 return [darkMode, toggleMode]
 };