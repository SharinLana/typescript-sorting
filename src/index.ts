import { Array } from "./Array";
import { String } from "./String";
import { LinkedList } from "./LinkedList";
import { Sorter } from "./Sorter";

const array = new Array([9, 18, -5, 0, 300]);
const sorter = new Sorter(array);
sorter.sort();
console.log(array.data); // [ -5, 0, 9, 18, 300 ]

const string = new String("asdNsdfO");
const sorter2 = new Sorter(string);
sorter2.sort();
console.log(string.data); // addfNOss

const linkedList = new LinkedList();
linkedList.add(9);
linkedList.add(18);
linkedList.add(-5);
linkedList.add(0);

const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print(); // -5 0 9 18 
