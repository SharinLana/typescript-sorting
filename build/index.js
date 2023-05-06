"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Array_1 = require("./Array");
const Sorter_1 = require("./Sorter");
const array = new Array_1.Array([9, 18, -5, 0, 300]);
const sorter = new Sorter_1.Sorter(array);
sorter.sort();
console.log(array.data);
