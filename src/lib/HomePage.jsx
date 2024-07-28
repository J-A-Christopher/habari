import { useState } from "react";
import React from "react";
import CardComponent from "./CardComponent";
import SideCardComponent from "./SideCardComponent";
import FurthestDownComp from "./FurthestDownComp";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function HomePage() {
  const [catData, setCatData] = useState("");
  const [inputValue, setInputValue] = useState("");

  const performSearch = () => {
    if (inputValue.trim()) {
      setCatData(inputValue.trim());
      setInputValue("");
    }
  };

  const categoryDataHandler = () => {
    performSearch();
  };
  const catDataHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex justify-center items-center p-4 sticky top-0 bg-gray-100 z-10">
        <div className="flex space-x-2 p-4 bg-white rounded-lg shadow-md">
          <Input
            className="w-64"
            onChange={catDataHandler}
            onBlur={performSearch}
            value={inputValue}
            placeholder="Enter a news category to search"
          />
          <Button onClick={categoryDataHandler}>Search</Button>
        </div>
      </div>

      <div className="flex-grow flex flex-col md:flex-row gap-8 w-full max-w-[1440px] mx-auto p-4 md:p-8 relative">
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:pr-[336px]">
          <CardComponent catData={catData} />
        </main>
        <aside className="w-full md:w-80 space-y-6 flex-shrink-0 md:fixed md:right-8 md:top-24 md:bottom-8 md:overflow-auto">
          <SideCardComponent />
          <FurthestDownComp />
        </aside>
      </div>
    </div>
  );
}
