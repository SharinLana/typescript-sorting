"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Array_1 = require("./Array");
const String_1 = require("./String");
const LinkedList_1 = require("./LinkedList");
const Sorter_1 = require("./Sorter");
const array = new Array_1.Array([9, 18, -5, 0, 300]);
const sorter = new Sorter_1.Sorter(array);
sorter.sort();
console.log(array.data); // [ -5, 0, 9, 18, 300 ]
const string = new String_1.String("asdNsdfO");
const sorter2 = new Sorter_1.Sorter(string);
sorter2.sort();
console.log(string.data); // addfNOss
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(9);
linkedList.add(18);
linkedList.add(-5);
linkedList.add(0);
const sorter3 = new Sorter_1.Sorter(linkedList);
sorter3.sort();
linkedList.print(); // -5 0 9 18 
