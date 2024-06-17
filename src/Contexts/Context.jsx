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
    case "ADD_FAVS":
      return{ ...state, favs: [...state.favs, action.payload]}
    default:
      return state;
  }
};

const initialState = {
  dentists: [],
  theme: themes.light,
  favs: []
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
