import { Link } from "react-router-dom";
import { useGeneralStates } from "../Contexts/Context";

const Card = ({ user }) => {

  const { name, username, id } = user;
  const { dispatch } = useGeneralStates();

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: "ADD_FAV", payload: user.id})
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="./images/doctor.jpg" alt="Doctor" />
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={"/dentista/" + id}>
        <p>{name}</p>
        </Link>
        <p>{username}</p>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
