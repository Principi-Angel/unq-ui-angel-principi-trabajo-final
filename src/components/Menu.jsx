import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/components/Menu.css";

const Menu = () => {
  const navigate = useNavigate();
return (
  <div className="menu">
    <h1>Palabras Encadenadas</h1>
    <p>Bienvenido al juego</p>
    <div className="menu-buttons"> 
      <button onClick={() => navigate("/game")}>JUGAR</button>
      <button onClick={() => navigate("/scores")}>RÉCORDS</button>
    </div>
  </div>
); 
};

export default Menu;
