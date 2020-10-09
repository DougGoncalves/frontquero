export const orderASC = (value1, value2) => {
  // Caso o primeiro argumento for menor que o segundo
  if (value1.university.name < value2.university.name) {
    return -1;
  }
  // Se o primeiro argumento for maior
  if (value1.university.name > value2.university.name) {
    return 1;
  }
  return 0;
};

export const orderDESC = (value1, value2) => {
  // Caso o primeiro argumento for menor que o segundo
  if (value1.university.name < value2.university.name) {
    return 1;
  }
  // Se o primeiro argumento for maior
  if (value1.university.name > value2.university.name) {
    return -1;
  }
  return 0;
};
