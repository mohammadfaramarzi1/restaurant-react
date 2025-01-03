import { useEffect, useState } from "react";

import menu from "./data";

import "./App.css";
import { filterProducts, getMainCategories } from "./utils/utlis";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";

function App() {
  const [menus, setMenus] = useState(menu);
  // console.log(menus);
  const [categories, setCategories] = useState([
    "all",
    ...getMainCategories(menus),
  ]);
  const [mainCategory, setMainCategory] = useState("all");

  useEffect(() => {
    const filteredProducts = filterProducts(menu, mainCategory);
    setMenus(filteredProducts);
    console.log(filteredProducts);
  }, [mainCategory]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          mainCategory={mainCategory}
          setMainCategory={setMainCategory}
        />
        <Menu menus={menus} />
      </section>
    </main>
  );
}

export default App;
