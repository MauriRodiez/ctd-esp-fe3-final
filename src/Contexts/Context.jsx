import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { endpoint } from "../Utils/endpoint";
import { themes } from "../Utils/themes";

const GeneralStates = createContext();

const reducerState = (state, action) => {
  switch (action.type) {
    case "GET_DENTIST":
      return { ...state, dentists: action.payload };
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === themes.light ? themes.dark : themes.light };
    case "TOGGLE_FAV":
        const isFav = state.favs.some(fav => fav.id === action.payload.id);
        const updatedFavs = isFav
          ? state.favs.filter(fav => fav.id !== action.payload.id)
          : [...state.favs, action.payload];
        localStorage.setItem("favs", JSON.stringify(updatedFavs));
        return { ...state, favs: updatedFavs };
    default:
      return state;
  }
};

const initialState = {
  dentists: [],
  theme: themes.light,
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

  return (
    <GeneralStates.Provider value={{ state, dispatch }}>
      {children}
    </GeneralStates.Provider>
  );
};

export default Context;

export const useGeneralStates = () => useContext(GeneralStates);
