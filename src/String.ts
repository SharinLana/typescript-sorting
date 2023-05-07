import { Sorter } from "./Sorter";

export class String extends Sorter {
  constructor(public data: string) {
    super()
  }

  compare(index1: number, index2: number): boolean {
    return this.data[index1].toLowerCase() > this.data[index2].toLowerCase();
  }

  swap(index1: number, index2: number): void {
    let tempArr = this.data.split("");
    [tempArr[index1], tempArr[index2]] = [tempArr[index2], tempArr[index1]];
    this.data = tempArr.join("");
  }

  get length(): number {
    return this.data.length;
  }
}
