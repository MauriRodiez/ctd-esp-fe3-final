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
    <nav className={state.theme === themes.light ? 'light' : 'dark'}>
      <p className={navbarStyles.logo}>
        <span>D</span>H Odonto
      </p>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <ul className={navbarStyles.menu}>
        <Link to={routes.home}>
          <li>Home</li>
        </Link>
        <Link to={routes.contact}>
          <li>Contacto</li>
        </Link>
        <Link to={routes.favourite}>
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
