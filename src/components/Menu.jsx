import { Link } from "react-router-dom";

const Menu = () => (
  <div className="home">
    <h1>Palabras Encadenadas</h1>
    <p>Bienvenido al juego</p>
    <Link to="/game">
      <button>Jugar</button>
    </Link>
    <Link to="/scores">
      <button>Ver Puntajes</button>
    </Link>
  </div>
);

export default Menu;
