const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damage = (minDamage, maxDamage) => Math.round(Math.random() * (maxDamage - minDamage) + minDamage);

const dragonDamage = () => {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  const dmg = damage(minDamage, maxDamage);
  return dmg;
}

const warriorDamage = () => {
  const minDamage = warrior.strength;
  const maxDamage = warrior.strength * warrior.weaponDmg;
  const dmg = damage(minDamage, maxDamage);
  return dmg;
}

const mageDamage = () => {
  const minDamage = mage.intelligence;
  const maxDamage = mage.intelligence * 2;
  const dmg = damage(minDamage, maxDamage);
  const lowMana = { damage: 'Não possui mana suficiente', spentMana: 0}
  if (mage.mana > 15) {
  const resumeMage = { damage: dmg, spentMana: 15};
  return resumeMage;
  }
  return lowMana;
}

// Parte 2 do exercicio

const gameActions = {
  warriorTurn: () => {
    warrior.damage = warriorDamage();
    dragon.healthPoints -= warriorDamage();
  },
  mageTurn: () => {
    mage.damage = mageDamage().damage;
    mage.mana -= mageDamage().spentMana;
    dragon.healthPoints -= mageDamage().damage;
  },
  dragonTurn: () => {
    dragon.damage = dragonDamage();
    warrior.healthPoints -= dragonDamage();
    mage.healthPoints -= dragonDamage();
  },
  resumeBattle: () => {
    console.log(battleMembers);
  }
};

gameActions.warriorTurn();
gameActions.mageTurn();
gameActions.dragonTurn();
gameActions.resumeBattle();
