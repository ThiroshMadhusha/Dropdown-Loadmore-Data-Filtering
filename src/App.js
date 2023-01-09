import React from "react";
import items from "./allData";
import { useState } from "react";
import Menu from "./components/Menu";
import Button from "./components/Button";
import "./styles/App.css";

// add "new Set()"" to remove repeating data button names
const allCategories = ["All", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons] = useState(allCategories);
//   const [buttons, setButtons] = useState(allCategories);

  // Create filter part
  const filter = (category_button) => {
    // display all category items
    if (category_button === "All") {
      setMenuItem(items);
      return;
    }
    // filter other buttons
    const filterData = items.filter(
      (item) => item.category === category_button
    );
    setMenuItem(filterData);
  };

  return (
    <>
      <div className="App">
        <div className="title">
          <h1>
            React 
            <span>Filter</span>
          </h1>
        </div>
        <Button category_button={buttons} filter={filter} />
        <Menu menuItem={menuItem} />
      </div>
    </>
  );
}

export default App;
