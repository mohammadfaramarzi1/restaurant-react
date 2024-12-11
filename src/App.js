import { useEffect, useState } from "react";

import menu from "./data";

import "./App.css";
import { getMainCategories } from "./utils/utlis";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";

function App() {
  const [menus, setMenus] = useState(menu);
  // console.log(menus);
  const [categories, setCategories] = useState([
    "all",
    ...getMainCategories(menus),
  ]);

  console.log(categories);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} />
        <Menu menus={menus} />
      </section>
    </main>
  );
}

export default App;
