"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Array = void 0;
class Array {
    constructor(data) {
        this.data = data;
    }
    ;
    compare(index1, index2) {
        return this.data[index1] > this.data[index2];
    }
    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }
    get length() {
        return this.data.length;
    }
}
exports.Array = Array;
