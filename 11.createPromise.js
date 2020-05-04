/*
The Promise constructor method takes a function parameter called the
executor function which runs automatically when the constructor is called.
The executor function generally starts an asynchronous operation and
dictates how the promise should be settled.

The executor function has two function parameters, usually referred to as
the resolve() and reject() functions.
*/

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};

const orderSunglasses = () => {
  return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();
console.log(orderPromise);
