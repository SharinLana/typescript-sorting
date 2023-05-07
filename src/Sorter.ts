interface Sortable {
  length: number;
  compare(index1: number, index2: number): boolean;
  swap(index1: number, index2: number): void;
}

export abstract class Sorter {
  abstract compare(index1: number, index2: number): boolean;
  abstract swap(index1: number, index2: number): void;
  abstract length: number;

  sort(): void {
    for (let i = this.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
