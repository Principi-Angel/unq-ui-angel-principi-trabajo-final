import { Link } from "react-router-dom";
import CustomButton from "./CustomButton.jsx";
import "../styles/Menu.css";

const Menu = () => {
  
return (
  <div className="menu">
    <h1>Palabras Encadenadas</h1>
    <p>Bienvenido al juego</p>
    <div className="menu-buttons"> 
      <CustomButton label="JUGAR" route="/game" />
      <CustomButton label="RÉCORDS" route="/scores" />
    </div>
  </div>
); 
};

export default Menu;
