// -----------------------------------------------------------------
// Lesson 3 --------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-*-* Type Annotation *-*-*-*-*-*--*-*-*-*-*-*
// -----------------------------------------------------------------

// let age: number = 30
// let fullName: string = "John Doe"
// let messageStatus: boolean = false

// age = 31
// age = 45
// age = "thirty five" // Type Error

// console.log(age);

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 4 --------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-*-* Type Inference *-*-*-*-*-*--*-*-*-*-*-*-
// -----------------------------------------------------------------

// let age = 30
// let fullName = "Jane Doe"

// age = "thirty"

/* BAD - DON'T DO IT (unles you have no other choice)
let score;
score = 101
score = "fifty"
*/

// let score: number;

// score = 101
// score = "fifty"

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 5 --------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-*-* Compiling TS into JS *-*-*-*-*-*--*-*-*-
// -----------------------------------------------------------------

// let score = 15
// score = "fifteen"
// console.log(score);

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 6 --------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-*-* Null VS. Undefined *-*-*-*-*-*--*-*-*-*-
// -----------------------------------------------------------------

// let something1: null = null
// let something2: null = 1

// let something3: undefined = "hi"
// let something4: undefined = undefined

// let something5: null = undefined
// let something6: undefined = null

// let something7 = null
// let something8 = undefined

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 7 --------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-*-* The Any Type *-*-*-*-*-*--*-*-*-*-*-*-*-
// -----------------------------------------------------------------

// let grade: any = 15;
// grade = "hi";
// grade = true;

// let something7 = null;
// let something8 = undefined;

// BAD
// let mathScore;

// RECOMMENDED
// let mathScore: number;
// mathScore = 95;
// mathScore = "ninty five"

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 8 --------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-*-* Creating a Basic Function *-*-*-*-*-*-*-
// -----------------------------------------------------------------

// function employeeName(id: number, name: string, dept: string) {
//   return name;
// }

// let employee_1 = employeeName(101, "John Doe", "HR");
// let employee_2 = employeeName(102, "Jane Doe", "Development");
// let employee_3 = employeeName(35);

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 9 --------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-*-* Default Values *-*-*-*-*-*-*--*-*-*-*-*-
// -----------------------------------------------------------------

// function employeeName(id: number, name: string, dept: string = "Dev") {
//   return dept;
// }

// let employee_1 = employeeName(101, "Jane");
// let employee_2 = employeeName(102, "John", "HR");

// console.log("emp-1", employee_1);
// console.log("emp-2", employee_2);

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 10 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*- Function Return Types *-*-*-*-*-*-*--*-*-*-
// -----------------------------------------------------------------

// function employeeName(id: number, name: string, dept = "Dev") {
//   return id;
// }

// function employeeName(id: number, name: string, dept = "Dev"): string {
//   return dept;
// }

// function employeeName(id: number, name: string, dept = "Dev"): number {
//   return id;
// }

// let employee_1 = employeeName(101, "Jane");
// let employee_2 = employeeName(102, "John", "HR");
// let employee_3 = employeeName(103, "Jack", 400) // TE

// console.log("Emp 1:", employee_1);
// console.log("Emp 2:", employee_2);

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 11 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-*-* The void Type *-*-*-*-*-*-*--*-*-*-*-*-*
// -----------------------------------------------------------------

// function employeeName(id: number, name: string, dept = "Dev"): void {
//   console.log(id, name, dept);
// }

// employeeName(101, "Jane");

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 12 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*- Getting Started with Objects *-*-*-*-*-*-*-
// -----------------------------------------------------------------

// Method 1
// let course = {
//   name: "TS for Beginners",
//   price: 10,
// };

// course.discount // TE

// Method 2
// let course: {
//     name: string,
//     price: number,
//     discount?: number
// } = {
//   name: "TS for Beginners",
//   price: 10,
// };

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 13 --------------------------------------------------------
// *-*-*-*-*-*--*-*-The type Keyword AKA Type Alias *-*-*-*-*-*--*-*-
// -----------------------------------------------------------------

// Example 1
// PascalCase
// type NameOfType = string;

// let myName: NameOfType = "Muslim Helalee";
// let myName: NameOfType = 10 // TE

// Example 2
// type Prices = number[];

// let coursePrices: Prices = [10, 11, 12, 13, 14, 15];

// Example 3
// type Product = {
//   name: string;
//   price: number;
//   discount?: number;
//   features: {
//     level: string;
//     readonly duration: number;
//   };
// };

// let course1: Product = {
//   name: "TS for Beginners",
//   price: 10,
//   features: {
//     level: "All levels",
//     duration: 10,
//   },
// };

// let course2: Product = {
//   name: "JS for Beginners",
//   price: 99,
//   discount: 0.75,
//   features: {
//     level: "All levels",
//     duration: 10,
//   },
// };

// course2.features.duration = 11; // Error

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 14 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-*-* Intersection Types *-*-*-*-*-*--*-*-*-*-
// -----------------------------------------------------------------

// type Product = {
//   name: string;
// };

// type Course = {
//   price: number;
// };

// type FinishedProduct = Product & Course

// let course: FinishedProduct = {
//   name: "TS",
//   price: 10,
// };

// let course2: FinishedProduct = {
//     name: "JS",
//     price: 15
// }

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 15 -------------------------------------------------------
// *-*-*-*-*-*--*-*-* Getting Started with Arrays  *-*-*-*-*-*-*--*-
// -----------------------------------------------------------------

// let grades: number[] = [98, 99, 100, 85];
// let names: string[] = ["John", "Jane"];
// let serverStatus: boolean[] = [true, false];

// // grades.
// let subjects: string[][] = [
//   ["Math", "Chemistry"],
//   ["Arts", "Science"],
// ];

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 16 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-*-*- Union Types *-*-*-*-*-*-*--*-*-*-*-*-*-
// -----------------------------------------------------------------

// let appStatus: number | boolean = true;
// appStatus = 500;
// appStatus = "Success" // TE

// let appRes1: (string | number)[] = ["Failed", 400]

// A string or an array of numbers
// let appRes2: string | number[] = "failed"
// let appRes2: string | number[] = [400]

// A number or an array of string
// let appRes3: number |  string[] = 400
// let appRes3: number |  string[] = ["failed"]

// An array of strings or an array of numbers
// let appRes4: string[] | number[] = [1, 2, 3];
// let appRes4: string[] | number[] = ["1", "2", "3"];

// type Product = {
//   name: string;
//   price: string | number;
// };

// let course1: Product = {
//   name: "TS",
//   price: "Free",
// };

// let course2: Product = {
//   name: "JS",
//   price: 10,
// };

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 17 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-*-*- Type Narrowing *-*-*-*-*-*-*--*-*-*-*-*
// -----------------------------------------------------------------

// type Product = {
//   name: string;
//   price: string | number;
// };

// let course1: Product = {
//   name: "TS",
//   price: "20",
// };

// let course2: Product = {
//   name: "JS",
//   price: 10,
// };

// function courseDiscount(course: Product): number {
//   if (typeof course.price === "string") {
//     return parseInt(course.price) * 0.25;
//   }

//   return course.price * 0.25;
// }

// console.log("TS", courseDiscount(course1));
// console.log("JS", courseDiscount(course2));

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 18 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-*-*- Literal Types  *-*-*-*-*-*-*--*-*-*-*-*
// -----------------------------------------------------------------

// let num: 15 = 15;

// type ServerStatus = "Success" | "Failure" | "Processing";

// let res1: ServerStatus = "Success"
// let res2: ServerStatus = "Failure"
// let res3: ServerStatus = "Processing"

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 19 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-*-*- The tuple Type *-*-*-*-*-*-*--*-*-*-*-*
// -----------------------------------------------------------------

// let enrolledCourse: [number, string] = [101, "John Doe"];
// enrolledCourse[0] = 102;
// enrolledCourse[1] = "Jane Doe";

// // enrolledCourse[1] = 203 // TE

// console.log(enrolledCourse);

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 20 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-*-*- The enum Type  *-*-*-*-*-*-*--*-*-*-*-*
// -----------------------------------------------------------------

// enum ServerResponse {
//   SUCCESS,
//   FAILED,
//   PENDING,
// }

// enum ServerResponse {
//   SUCCESS = 12,
//   FAILED,
//   PENDING,
// }

// console.log(ServerResponse);

// enum Coordinates {
//   North = "N",
//   South = "S",
//   East = "E",
//   West = "W",
// }

// console.log(Coordinates.North);
// console.log(Coordinates.West);

// const enum Coordinates {
//   North = "N",
//   South = "S",
//   East = "E",
//   West = "W",
// }

// console.log(Coordinates.North);
// console.log(Coordinates.West);

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 21 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-* The interface Type  *-*-*-*-*-*-*--*-*-*-*
// -----------------------------------------------------------------

// interface Course {
//   name: string;
//   price: number;
//   discount?: boolean;
//   features: {
//     level: string;
//     duration: number;
//   };
// }

// let course1: Course = {
//   name: "Python for everybody",
//   price: 10,
//   features: {
//     level: "all level",
//     duration: 10,
//   },
// };

// console.log(course1.features);

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 22 -------------------------------------------------------
// *-*-*-*-*-*--*-*- Adding Methods to Interfaces  *-*-*-*-*-*-*--*-
// -----------------------------------------------------------------

// interface Course {
//   name: string;
//   price: number;
//   discount?: boolean;
//   features: {
//     level: string;
//     duration: number;
//   };

//   // //   Method 1
//   //   runPromotions(): boolean;

//   // Method 2
//   runPromotions: (name: string) => boolean;
// }

// let course1: Course = {
//   name: "Python for everybody",
//   price: 10,
//   features: {
//     level: "all level",
//     duration: 10,
//   },
//   runPromotions: (courseName) => {
//     return true;
//   },
// };

// console.log(course1.runPromotions("Python"));

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 23 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*- Combining Interfaces *-*-*-*-*-*-*--*-*-*-*
// ----------------------------------------------------------------

// type Product = {
//   name: string
// }

// type Product = {
//   price: number
// }

// interface Product {
//   name: string;
// }

// interface Product {
//   price: number;
// }

// let course: Product = {
//   name: "TS",
//   price: 10,
// };

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 24 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*- Interface Inheritance *-*-*-*-*-*-*--*-*-*-
// -----------------------------------------------------------------

// interface Product {
//   name: string;
// }

// interface Product {
//   price: number;
// }

// let course: Product = {
//   name: "TS",
//   price: 10,
// };

// interface PhysicalProduct extends Product {
//   stock: number;
//   shippingStatus(): string;
// }

// let myBook: PhysicalProduct = {
//   name: "JS Handbook",
//   price: 15,
//   stock: 10,
//   shippingStatus() {
//     return "Shipped";
//   },
// };

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 25 -------------------------------------------------------
// *-*-*-*-*-- Getting Started with Typescript Classes  *-*-*-*-*-*-
// -----------------------------------------------------------------

// class Product {
//   name: string;
//   price: number;

//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }

//   runPromotions() {
//     if (this.name === "Typescript") console.log("Grab the Discount");
//   }
// }

// let product_1 = new Product("Typescript", 10);
// let product_2 = new Product("JavaScript", 20);

// product_1.runPromotions();
// product_2.runPromotions();

// console.log(product_1);
// console.log(product_2);

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 26 -------------------------------------------------------
// *-*-*-*-*-*--*-*- Read-only and Optional Properties  *-*-*-*-*-*-
// -----------------------------------------------------------------

// class Product {
//   readonly id: number;
//   name: string;
//   price: number;
//   language?: string;

//   constructor(id: number, name: string, price: number) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }

//   runPromotions() {
//     if (this.name === "Typescript") console.log("Grab the Discount");
//   }
// }

// let product_1 = new Product(101, "Typescript", 10);
// let product_2 = new Product(201, "JavaScript", 20);

// product_1.runPromotions();
// product_2.runPromotions();

// console.log(product_1);
// console.log(product_2);

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 27 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*  Private Access Modifier *-*-*-*-*-*-*--*-*-*-
// -----------------------------------------------------------------

// class Product {
//   readonly id: number;
//   name: string;
//   private price: number;
//   language?: string;

//   constructor(id: number, name: string, price: number) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }

//   runPromotions() {
//     if (this.name === "Typescript") console.log("Grab the Discount");
//   }

//   getPrice() {
//     return this.price;
//   }
// }

// let product_1 = new Product(101, "Typescript", 10);
// let product_2 = new Product(201, "JavaScript", 20);

// console.log(product_1);
// console.log(product_2);

// // product_1.price = 100;

// console.log(product_1.getPrice());

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 28 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-  Parameter Properties *-*-*-*-*-*-*--*-*-*-
// -----------------------------------------------------------------

// class Product {
//   language?: string;

//   constructor(
//     public readonly id: number,
//     public name: string,
//     private price: number
//   ) {}

//   runPromotions() {
//     if (this.name === "Typescript") console.log("Grab the Discount");
//   }

//   getPrice() {
//     return this.price;
//   }
// }

// let product_1 = new Product(101, "Typescript", 10);
// let product_2 = new Product(201, "JavaScript", 20);

// console.log(product_1);
// console.log(product_2);

// console.log(product_1.getPrice());

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 29 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*- Getter and Setter Methods  *-*-*-*-*-*-*--*-*
// -----------------------------------------------------------------

// class Product {
//   language?: string;

//   constructor(
//     public readonly id: number,
//     public name: string,
//     private _price: number
//   ) {}

//   runPromotions() {
//     if (this.name === "Typescript") console.log("Grab the Discount");
//   }

//   // getPrice() {
//   //   return this.price;
//   // }

//   get price() {
//     return this._price;
//   }

//   set price(price: number) {
//     this._price = price;
//   }
// }

// let product_1 = new Product(101, "Typescript", 10);
// let product_2 = new Product(201, "JavaScript", 20);

// console.log(product_1);
// console.log(product_2);

// // console.log(product_1.getPrice());

// product_1.price = 11;
// console.log(product_1.price);

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 30 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-*- Class Inheritance *-*-*-*-*-*-*--*-*-*-*-
// -----------------------------------------------------------------

// class Product {
//   language?: string;

//   constructor(
//     public readonly id: number,
//     public name: string,
//     private _price: number
//   ) {}

//   runPromotions() {
//     if (this.name === "Typescript") console.log("Grab the Discount");
//   }

//   // getPrice() {
//   //   return this.price;
//   // }

//   get price() {
//     return this._price;
//   }

//   set price(price: number) {
//     this._price = price;
//   }
// }

// let product_1 = new Product(101, "Typescript", 10);
// let product_2 = new Product(201, "JavaScript", 20);

// console.log(product_1);
// console.log(product_2);

// // console.log(product_1.getPrice());

// product_1.price = 11;
// console.log(product_1.price);

// class Book extends Product {
//   constructor(
//     public shipmentID: number,
//     id: number,
//     name: string,
//     _price: number
//   ) {
//     super(id, name, _price);
//   }

//   shipmentStatus() {
//     console.log(`Item with the Shipment ID ${this.shipmentID} has been`);
//   }
// }

// let book_1 = new Book(102030, 111, "The Kite Runner", 35);
// console.log(book_1);

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 31 -------------------------------------------------------
// *-*-*-*-*-*--*-* Getting Started with Generics *-*-*-*-*-*-*--*-*
// -----------------------------------------------------------------

// function gameLoop(param: number): number {
//   return param
// }

// function gameLoop(param: any): any {
//   return param
// }

// function gameLoop<Type>(param: Type): Type {
//   return param;
// }

// let result_1 = gameLoop<number>(100);
// console.log(result_1);

// let result_2 = gameLoop<string>("100");
// console.log(result_2);

// let result_3 = gameLoop(true);
// console.log(result_3);

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 32 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*-*-* Generic Arrays *-*-*-*-*-*-*--*-*-*-*-*-
// -----------------------------------------------------------------

// let nums: Array<number> = [1, 2, 3];
// let nums2: number[] = nums;

// let names: Array<string> = ["Jane", "John"];

// let stuff: Array<number | string> = [2, "Jane"];

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 33 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-*- Generic Type Aliases *-*-*-*-*-*-*--*-*-*-*
// -----------------------------------------------------------------

// type Product<T> = {
//   name: T;
//   level: T;

// };

// let course: Product<string> = {
//   name: "TS",
//   level: "all levels",
// };

// type Product<T, U> = {
//   name: T;
//   level: T;
//   price: U;
// };

// let course: Product<string, number> = {
//   name: "TS",
//   level: "All levels",
//   price: 10,
// };

/* 
- - - - -  -       -  -  -
-          --      -  -    -
- - -      -  -    -  -     -
- - -      -    -  -  -     -
-          -      --  -    -
- - - - -  -       -  -  -
*/

// -----------------------------------------------------------------
// Lesson 34 -------------------------------------------------------
// *-*-*-*-*-*--*-*-*-* Type Narrowing Revisited *-*-*-*-*-*--*-*-*-
// -----------------------------------------------------------------

/*
 **** @number -> number/2
 **** @string -> string
 */

//  Typeof type gaurd
function doSomething(param: number | string) {
  if (typeof param === "number") return param / 2;
  return param;
}

let result_1 = doSomething(15);
console.log(result_1);

let result_2 = doSomething("Hi");
console.log(result_2);

// isArray() type guard
function movieOrFilms(param: string | string[]) {
  if (Array.isArray(param)) {
    return `${param.length} films have been selected`;
  }

  return param;
}

let movie = movieOrFilms("Interview with the Vampire");
console.log(movie);

let films = movieOrFilms(["Moneyball", "Inglorious Bastards", "Se7en"]);
console.log(films);

// instanceof type guard
let newArr = new Array(1, 2, 3);

if (newArr instanceof Array) {
  console.log("Yeah, it is an array");
} else {
  console.log("Nope, not an array");
}

// Property presence type guard
if (20 in newArr) {
  console.log("Success");
} else {
  console.log("Failure");
}
