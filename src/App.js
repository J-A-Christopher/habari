import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import CardComponent from "./lib/CardComponent";
import SideCardComponent from "./lib/SideCardComponent";
import FurthestDownComp from "./lib/FurthestDownComp";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

function App() {
  return (
    <Router>
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex justify-center items-center p-4 sticky top-0 bg-gray-100 z-10">
        <div className="flex space-x-2 p-4 bg-white rounded-lg shadow-md">
          <Input className="w-64" />
          <Button>Search</Button>
        </div>
      </div>
  
      <div className="flex-grow flex flex-col md:flex-row gap-8 w-full max-w-[1440px] mx-auto p-4 md:p-8 relative">
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:pr-[336px]">
          <CardComponent />
        </main>
        <aside className="w-full md:w-80 space-y-6 flex-shrink-0 md:fixed md:right-8 md:top-24 md:bottom-8 md:overflow-auto">
          <SideCardComponent />
          <FurthestDownComp />
        </aside>
      </div>
    </div>
  </Router>
  );
}

export default App;
