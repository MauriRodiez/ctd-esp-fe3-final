import { Link } from "react-router-dom";
import { routes } from "../Utils/routes";
import navbarStyles from "../Styles/Navbar.module.css";
import { useGeneralStates } from "../Contexts/Context";
import { themes } from "../Utils/themes";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useGeneralStates();

  const handleChangeTheme = () => {
    dispatch({ type: "CHANGE_THEME" })
  };

  return (
    <nav className="bg-lime-200 py-4"> {/*state.theme === themes.light ? 'light' : 'dark'*/}
      <p className="text-gray-800 uppercase text-2xl font-bold py-3 tracking-wide"> {/*navbarStyles.logo*/}
        <span className=" text-red-600">D</span>H Odonto
      </p>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <ul className={navbarStyles.menu}>
        <Link to={routes.home} className="rounded-md px-3 py-2 text-sm md:text-base uppercase font-bold tracking-wide text-green-900 hover:underline underline-offset-8 decoration-green-700 hover:text-green-700">
          <li>Home</li>
        </Link>
        <Link to={routes.contact} className="rounded-md px-3 py-2 text-sm md:text-base uppercase font-bold tracking-wide text-green-900 hover:underline underline-offset-8 decoration-green-700 hover:text-green-700">
          <li>Contacto</li>
        </Link>
        <Link to={routes.favourite} className="rounded-md px-3 py-2 text-sm md:text-base uppercase font-bold tracking-wide text-green-900 hover:underline underline-offset-8 decoration-green-700 hover:text-green-700">
          <li>Favoritos</li>
        </Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button
          onClick={handleChangeTheme}
          className={navbarStyles.btnChange}
        >
          🌒
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
