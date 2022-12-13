import ExplorePage from "./components/ExplorePage";
import SeatsPage from "./components/SeatsPage";
import SessionPage from "./components/SessionPage";
import SuccessPage from "./components/SuccessPage";
import Titlebar from "./components/Titlebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Titlebar />
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/sessoes/:idFilme" element={<SessionPage />} />
        <Route path="/assentos/:idSessao" element={<SeatsPage />} />
        <Route path="/sucesso" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
