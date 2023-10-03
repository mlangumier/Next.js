export const diceRoll = (sides: number) => {
  const roll = Math.ceil(Math.random() * sides);

  return roll;
};
