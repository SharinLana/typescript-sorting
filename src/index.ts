import { Array } from "./Array";
import { String } from "./String";
import { LinkedList } from "./LinkedList";

const array = new Array([9, 18, -5, 0, 300]);
array.sort();
console.log(array.data); // [ -5, 0, 9, 18, 300 ]

const string = new String("asdNsdfO");
string.sort();
console.log(string.data); // addfNOss

const linkedList = new LinkedList();
linkedList.add(9);
linkedList.add(18);
linkedList.add(-5);
linkedList.add(0);

linkedList.sort();
linkedList.print(); // -5 0 9 18 
