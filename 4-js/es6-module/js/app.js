// ES6 Module

import "./first.js";
import "./second.js";
import "./third.js";

import * as aa from "./first.js";
console.log(aa);
console.log(aa.x);

import {y} from "./second.js";
console.log(y);

import z from "./third.js";
console.log(z());

console.log(aa.x+y);
console.log(aa.x + y + z());