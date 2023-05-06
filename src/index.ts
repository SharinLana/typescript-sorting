class Sorter {
  constructor(public collection: number[]) {};

  sort():  void {

  }
}

const sorter = new Sorter([17, 5, -10, -2, 8, 4]);
sorter.sort();
console.log(sorter.collection);