import { useState } from "react";

import menu from "./data";

import "./App.css";
import { getAllCategories, getMainCategories } from "./utils/utlis";

function App() {
  const [menus, setMenus] = useState(menu);
  console.log(menus);
  

  return <div></div>;
}

export default App;
