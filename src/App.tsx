import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import TeamSection from "./pages/TeamSection";
import SearchResults from "./pages/SearchResults";
import DetailSection from "./pages/DetailSection";
import Minigame from "./pages/Minigame";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teamSection" element={<TeamSection />} />
        <Route path="/searchResults" element={<SearchResults />} />
        <Route path="/detailSection/:heroId" element={<DetailSection />} />
        <Route path="/minigame" element={<Minigame />} />
      </Routes>
    </Router>
  );
}

export default App;
