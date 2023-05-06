interface Sortable {
  length: number;
  compare(index1: number, index2: number): boolean;
  swap(index1: number, index2: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    for (let i = this.collection.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
