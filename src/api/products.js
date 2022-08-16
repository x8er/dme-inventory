export const addProductToCategory = async (product) => {
  try {
    const result = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    const test = await result.json();
    return test;
  } catch (err) {
    console.log(`Something went wrong in ${addProductToCategory.name}\n${err}`);
    return false;
  }
};
