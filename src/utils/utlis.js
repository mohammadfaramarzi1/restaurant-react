const getAllCategories = (array) => {
  return array.map((item) => item.category);
};

const getMainCategories = (array) => {
  const mainCategories = new Set(getAllCategories(array));
  return mainCategories;
};

const filterProducts = (products, category) => {
  if (category === "all") return products;
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
};

export { getMainCategories, filterProducts };
