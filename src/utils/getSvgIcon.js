export const getSvgIcon = async (name) =>
  await import(`../assets/icons/${name}.svg`);
