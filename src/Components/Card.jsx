import { Link } from "react-router-dom";
import { useGeneralStates } from "../Contexts/Context";
import { icons } from "../Utils/icons.jsx";

const Card = ({ user }) => {

  const { name, username, id } = user;
  const { state, dispatch } = useGeneralStates();

  const isFav = state.favs.some(fav => fav.id === id);

  const toggleFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
      dispatch({ type: "TOGGLE_FAV", payload: user })    
  };

  return (
    <div className="group relative px-2 py-2 rounded-md border border-blue-200 bg-teal-50 flex flex-col items-center dark:border-lime-200 dark:bg-slate-200">
        {/* En cada card deberan mostrar en name - username y el id */}
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img className="h-full w-full object-cover object-center lg:h-full lg:w-full" src="./images/doctor.jpg" alt="Doctor" />
        </div>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={"/dentista/" + id} className="mt-2 py-2 text-sm md:text-lg font-semibold hover:text-teal-700">
        <p>{name}</p>
        </Link>
        <p className="mb-2 py-2 font-extralight text-sm md:text-base tracking-wider">{username}</p>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={toggleFav} className="my-2 bg-transparent w-52 hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border
         border-teal-500 hover:border-transparent rounded-md flex justify-center">
          {isFav ? icons.removeFav : icons.addFav }
        </button>
    </div>
  );
};

export default Card;
