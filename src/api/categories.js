export const getAllSubcategories = async () => {
  try {
    const result = await fetch(`${import.meta.env.VITE_API_URL}/categories`);
    return await result.json();
  } catch (err) {
    console.log(`Something went wrong in ${getAllSubcategories.name}\n${err}`);
    return false;
  }
};

export const createNewSubcategory = async (subcategory) => {
  try {
    const result = await fetch(`${import.meta.env.VITE_API_URL}/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subcategory),
    });
    return await result.json();
  } catch (err) {
    console.log(`Something went wrong in ${createNewSubcategory.name}\n${err}`);
    return false;
  }
};

export const updateSubcategory = async (subcategory, id) => {
  try {
    const result = await fetch(
      `${import.meta.env.VITE_API_URL}/categories/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subcategory),
      }
    );
    return result.status;
  } catch (err) {
    console.log(`Something went wrong in ${updateSubcategory.name}\n${err}`);
    return false;
  }
};

export const getAllProductsOfCategory = async (categoryId) => {
  try {
    const result = await fetch(
      `${import.meta.env.VITE_API_URL}/categories/${categoryId}/products`
    );
    return await result.json();
  } catch (err) {
    console.log(
      `Something went wrong in ${getAllProductsOfCategory.name}\n${err}`
    );
    return false;
  }
};
