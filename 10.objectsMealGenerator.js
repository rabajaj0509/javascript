/*
1) The object that a method belongs to is called the calling object.
2) The this keyword refers the calling object and can be used to access
properties of the calling object.
3) Methods do not automatically have access to other internal properties
of the calling object.
4) The value of this depends on where the this is being accessed from.
5) We cannot use arrow functions as methods if we want to access other
internal properties.
6) JavaScript objects do not have built-in privacy, rather there are
conventions to follow to notify other developers about the intent of the code.
7) The usage of an underscore before a property name means that the original
developer did not intend for that property to be directly changed.
8) Setters and getter methods allow for more detailed ways of accessing
and assigning properties.
9) Factory functions allow us to create object instances quickly and repeatedly.
10) There are different ways to use object destructuring: one way is the
property value shorthand and another is destructured assignment.
11) As with any concept, it is a good skill to learn how to use the
documentation with objects!
*/

/*
Example:

Randomly create a three-course meal based on what is available on a menu.
We’ll keep running it until we’re satisfied with the generated meal!
*/

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizer) {
    this._courses.appetizers = appetizer;
  },
  get mains() {
    return this._courses.appetizers;
  },
  set mains(main) {
    this._courses.appetizers = appetizer;
  },
  get desserts() {
    return this._courses.appetizers;
  },
  set desserts(dessert) {
    this._courses.appetizers = appetizer;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };

    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");

    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice}.`;
  }
};

menu.addDishToCourse("appetizers", "Caesar Salad", 4.0);
menu.addDishToCourse("appetizers", "Veggie Salad", 3.25);
menu.addDishToCourse("appetizers", "Chiken Salad", 6.5);
menu.addDishToCourse("mains", "Rice Bowl", 6.25);
menu.addDishToCourse("mains", "Spinach Rice", 7.0);
menu.addDishToCourse("mains", "Pasta", 8.55);
menu.addDishToCourse("desserts", "ChocoLava Cake", 9.0);
menu.addDishToCourse("desserts", "Fruit Punch", 12.25);
menu.addDishToCourse("desserts", "Choco Double Trouble", 9.75);

let meal = menu.generateRandomMeal();
console.log(meal);
