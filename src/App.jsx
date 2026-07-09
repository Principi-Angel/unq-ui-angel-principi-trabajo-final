import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GameBoard from "./components/GameBoard";
import LeaderBoard from "./components/LeaderBoard";
import Menu from "./components/Menu";
import NotFound from "./helpers/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/game" element={<GameBoard />} />
        <Route path="/scores" element={<LeaderBoard />} />
        <Route path="/" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;