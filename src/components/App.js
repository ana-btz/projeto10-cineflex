import ExplorePage from "../pages/ExplorePage";
import SeatsPage from "../pages/SeatsPage";
import SessionPage from "../pages/SessionPage";
import SuccessPage from "../pages/SuccessPage";
import Titlebar from "./Titlebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Titlebar />
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/sessions/:movieId" element={<SessionPage />} />
        <Route path="/seats/:sessionId" element={<SeatsPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
