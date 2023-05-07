import { Sorter } from "./Sorter";

export class Array extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  compare(index1: number, index2: number): boolean {
    return this.data[index1] > this.data[index2];
  }

  swap(index1: number, index2: number): void {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  get length(): number {
    return this.data.length;
  }
}
