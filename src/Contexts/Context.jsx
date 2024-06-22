import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { endpoint } from "../Utils/endpoint";

const GeneralStates = createContext();

const reducerState = (state, action) => {
  switch (action.type) {
    case "GET_DENTIST":
      return { ...state, dentists: action.payload };
    case "CHANGE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", newTheme);
      return { ...state, theme: newTheme };
    case "TOGGLE_FAV":
      const isFav = state.favs.some((fav) => fav.id === action.payload.id);
      const updatedFavs = isFav
        ? state.favs.filter((fav) => fav.id !== action.payload.id)
        : [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      return { ...state, favs: updatedFavs };
    default:
      return state;
  }
};

const initialTheme = localStorage.getItem("theme") || "light";
const initialState = {
  dentists: [],
  theme: initialTheme,
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducerState, initialState);

  useEffect(() => {
    axios(endpoint.users)
      .then((response) =>
        dispatch({ type: "GET_DENTIST", payload: response.data })
      )
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.theme]);

  useEffect(() => {
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <GeneralStates.Provider value={{ state, dispatch }}>
      {children}
    </GeneralStates.Provider>
  );
};

export default Context;

export const useGeneralStates = () => useContext(GeneralStates);
