const getAllCategories = (array) => {
  return array.map((item) => item.category);
};

const getMainCategories = (array) => {
  const mainCategories = new Set(getAllCategories(array));
  return mainCategories;
};

export { getMainCategories };
