export const getAllSubcategories = async () => {
  try {
    const result = await fetch(`${import.meta.env.VITE_API_URL}/categories`);
    return await result.json();
  } catch (err) {
    console.log(`Something went wrong in ${getAllSubcategories.name}\n${err}`);
  }
};

export const createNewSubcategory = async (subcategory) => {
  try {
    const result = await fetch(`${import.meta.env.VITE_API_URL}/categories/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subcategory),
    });
    return await result.json();
    // return result;
  } catch (err) {
    console.log(`Something went wrong in ${createNewSubcategory.name}\n${err}`);
  }
};
