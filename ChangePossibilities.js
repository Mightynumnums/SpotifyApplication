// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function changePossibilities(amount, denominations) {
  //values stored in the array will be the total count of combinations for the different amounts
  //each indx in the array will correlate to the amount of money

  let combinations = []
  for (let i = 0; i <= amount; i++) {
    combinations[i] = 0;
  }
  combinations[0] = 1;

  for (let j = 0; j < denominations.length; j++) {
    let coin = denominations[j];

    for (let coinVal = coin; coinVal <= amount; coinVal++) {
      let remainderCoinVal = coinVal - coin;
      combinations[coinVal] += combinations[remainderCoinVal];
    }
  }
  return combinations[amount];
}

//Test cases:
//changePossibilities(4,[1,2,3]) //4
//changePossibilities(25, [25, 10, 5,1]) //13