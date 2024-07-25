import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import CardComponent from "./lib/CardComponent";
import SideCardComponent from "./lib/SideCardComponent";
import FurthestDownComp from "./lib/FurthestDownComp";

function App() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto p-4 md:p-8">
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </main>
        <aside className="w-full md:w-64 space-y-6">
          <SideCardComponent />
          <FurthestDownComp />
        </aside>
      </div>
    </Router>
  );
}

export default App;
