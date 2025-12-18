function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker, defender;

  if (fighter1.name === firstAttacker) {
    attacker = fighter1;
    defender = fighter2;
  } else {
    attacker = fighter2;
    defender = fighter1;
  }

  while (attacker.health > 0 && defender.health > 0) {
    defender.health -= attacker.damagePerAttack;

    if (defender.health <= 0) {
      return attacker.name;
    }
    
    let temp = attacker;
    attacker = defender;
    defender = temp; 
  }
}