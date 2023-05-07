"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.String = void 0;
class String {
    constructor(data) {
        this.data = data;
    }
    compare(index1, index2) {
        return this.data[index1].toLowerCase() > this.data[index2].toLowerCase();
    }
    swap(index1, index2) {
        let tempArr = this.data.split("");
        [tempArr[index1], tempArr[index2]] = [tempArr[index2], tempArr[index1]];
        this.data = tempArr.join("");
    }
    get length() {
        return this.data.length;
    }
}
exports.String = String;
