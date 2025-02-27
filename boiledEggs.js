function cookingTime(eggs) {
  if (eggs <= 0) return 0; 
  const pots = Math.ceil(eggs / 8);
  return pots * 5;
}