// console.log("We are learning about nodejs modules!");
// const { sum, sub, mul, div } = require("./utils");
import { sum, sub, mul, div } from "./utils.js";
const firstname = "John";
console.log("Adding 2 and 3: ", sum(2, 3));
console.log("Subtracting 5 from 10: ", sub(10, 5));
console.log("Multiplying 4 and 5: ", mul(4, 5));
console.log("Dividing 20 by 4: ", div(20, 4));
console.log(firstname);
