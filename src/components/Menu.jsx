import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import "../styles/components/Menu.css";

const Menu = () => {
  const navigate = useNavigate();
return (
  <div className="menu">
    <Logo/>
    <h1 className="section-title">Bienvenido al juego</h1>
    <div className="buttons-box"> 
      <button className="primary-button" onClick={() => navigate("/game")}>JUGAR</button>
      <button className="primary-button" onClick={() => navigate("/scores")}>RÉCORDS</button>
    </div>
  </div>
); 
};

export default Menu;
