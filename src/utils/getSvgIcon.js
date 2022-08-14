export const getSvgIcon = async (name) =>
  `<template>${
    (await import(`../assets/icons/${name}.svg?raw`)).default
  }</template>`;
