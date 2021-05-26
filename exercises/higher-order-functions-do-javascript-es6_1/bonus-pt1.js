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

const dragonDamage = (dragon) => {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  const dmg = damage(minDamage, maxDamage);
  // if (dmg >= 45) {
  //   return `${dmg} Critical Hit!!!`;
  // }
  return dmg;
}

const warriorDamage = (warrior) => {
  const minDamage = warrior.strength;
  const maxDamage = warrior.strength * warrior.weaponDmg;
  const dmg = damage(minDamage, maxDamage);
  return dmg;
  // if (dmg >= 55) {
  //   return `${dmg} Critical Hit!!!`;
  // }
}

const mageDamage = (mage) => {
  const minDamage = mage.intelligence;
  const maxDamage = mage.intelligence * 2;
  const dmg = damage(minDamage, maxDamage);
  // if (dmg > 80) {
  //   return `${dmg} Critical Hit!!!`;
  // }
  return { damage: dmg, spentMana: 15};
}

console.log(dragonDamage(dragon), warriorDamage(warrior), mageDamage(mage));
