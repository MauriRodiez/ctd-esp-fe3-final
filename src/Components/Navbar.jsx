import { Link } from "react-router-dom";
import { routes } from "../Utils/routes";
import { useGeneralStates } from "../Contexts/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useGeneralStates();

  const handleChangeTheme = () => {
    dispatch({ type: "CHANGE_THEME" })
  };

  return (
    <nav className="bg-teal-400 py-4 dark:bg-slate-800 dark:border-b dark:border-lime-200 flex items-center justify-around">
      <p className="text-gray-800 uppercase text-2xl font-bold py-3 tracking-widest dark:text-white"> 
        <span className=" text-white dark:text-lime-400">D</span>H Odonto
      </p>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <ul className="list-none flex gap-2">
        <Link to={routes.home} className="rounded-md px-3 py-2 text-sm md:text-base uppercase font-bold tracking-wide text-green-900 hover:underline underline-offset-8
          decoration-green-700 hover:text-green-700 dark:text-lime-400 dark:decoration-white dark:hover:text-lime-500">
          <li>Home</li>
        </Link>
        <Link to={routes.contact} className="rounded-md px-3 py-2 text-sm md:text-base uppercase font-bold tracking-wide text-green-900 hover:underline underline-offset-8
          decoration-green-700 hover:text-green-700  dark:text-lime-400 dark:decoration-white dark:hover:text-lime-500">
          <li>Contacto</li>
        </Link>
        <Link to={routes.favourite} className="rounded-md px-3 py-2 text-sm md:text-base uppercase font-bold tracking-wide text-green-900 hover:underline underline-offset-8
          decoration-green-700 hover:text-green-700  dark:text-lime-400 dark:decoration-white dark:hover:text-lime-500">
          <li>Favoritos</li>
        </Link>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" checked={state.theme === "dark"} onChange={handleChangeTheme}  className="sr-only peer" />
          <div className="relative w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:text-teal-700 dark:peer-focus:ring-lime-400 rounded-full peer
            dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
            after:start-[2px] after:bg-white after:border-teal-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-teal-600
            peer-checked:bg-teal-800"></div>
        </label>
      </ul>
    </nav>
  );
};

export default Navbar;
