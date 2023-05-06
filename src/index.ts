import {Array} from './Array';
import {Sorter} from './Sorter';

const array = new Array([9, 18, -5 0, 300]);
const sorter = new Sorter(array);
sorter.sort();
console.log(array.data);