import { useState } from "react";

import menu from "./data";

import "./App.css";
import { getAllCategories, getMainCategories } from "./utils/utlis";

function App() {
  const [menus, setMenus] = useState(menu);
  console.log(menus);
  const [categories, setCategories] = useState(getMainCategories(menus));
  console.log(categories);

  return <div></div>;
}

export default App;
