import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/lib/HomePage";
import ExternalNewsPage from "./lib/ExternalNewsPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/external-news" element={<ExternalNewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
