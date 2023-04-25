export const diceRoll = (sides: number) => {
  const roll = Math.floor(Math.random() * sides) + 1;

  return roll;
};
