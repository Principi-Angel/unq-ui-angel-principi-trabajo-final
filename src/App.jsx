import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GameBoard from "./components/GameBoard";
import LeaderBoard from "./components/LeaderBoard";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/game" element={<GameBoard />} />
        <Route path="/scores" element={<LeaderBoard />} />
        <Route path="/" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;