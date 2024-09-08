// //Object Oriented Programming
// // Encapsulatiom

// class Animal {
//   static instances = [];
//   constructor(name, type, color) {
//     this.name = name;
//     this.type = type;
//     this.color = color;
//     Animal.instances.push(this);
//   }

//   static getALLInstances() {
//     return Animal.instances;
//   }
// }

// const woodyCat = new Animal("sparrow", "cat", "ginger");
// const emmanuelsDog = new Animal("brighton", "dog", "garlic");
// console.log(Animal.getALLInstances());

// class Car {
//   constructor(carName, brand, year, color) {
//     this.carName = carName;
//     this.brand = brand;
//     this.year = year;
//     this.color = color;
//   }
//   getCarDescription() {
//     console.log(`this is a ${this.year}${this.brand}`);
//   }
// }

// const mercedesCar = new Car("Benz", "mercedes", 2024, "black");
// mercedesCar.getCarDescription();

// //Inheritance

// class Dog extends Animal {
//   constructor(breed, name, color, type) {
//     super(name, type, color);
//     this.breed = breed;
//   }
// }
// const dog1 = new Dog("german-shepherd", "riley", "black", "dog");
// console.log(dog1);

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate the total price for this item
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = []; // Array to store ShoppingCartItem instances
  }

  // Method to get the total number of items in the cart
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Method to add an item to the cart
  addItem(product, quantity = 1) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity; // If the product already exists, increase the quantity
    } else {
      const newItem = new ShoppingCartItem(product, quantity);
      this.items.push(newItem); // Add the new item to the cart
    }
  }

  // Method to remove an item from the cart
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  // Method to calculate the total price of all items in the cart
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  // Method to display the cart items
  displayCart() {
    this.items.forEach((item) => {
      console.log(
        `${item.product.name} (x${item.quantity}): $${item
          .getTotalPrice()
          .toFixed(2)}`
      );
    });
    console.log(`Total Price: $${this.getTotalPrice().toFixed(2)}`);
  }
}

// Create some products
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Phone", 500);
const product3 = new Product(3, "Headphones", 100);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2); // Removes the item with id 2 (Phone)

// Display the cart again
cart.displayCart();
