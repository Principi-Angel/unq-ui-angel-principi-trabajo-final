import { Link } from "react-router-dom";

const Home = () => (
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

export default Home;
