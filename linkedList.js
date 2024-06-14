import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);
    this.size++;

    if (this.tail === null) {
      this.head = node;
      this.tail = node;
      return node;
    }

    this.tail.nextNode = node;
    this.tail = node;
    return node;
  }

  prepend(value) {
    const node = new Node(value);
    this.size++;

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return node;
    }

    node.nextNode = this.head;
    this.head = node;
    return node;
  }

  at(index) {
    if (index + 1 > this.size || index < 0) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }

    return current;
  }

  // If JS had pointers, I wouldn't have to create such monstrosity...
  pop() {
    let prev = null;
    let current = this.head;

    if (current === null) return null;
    this.size--;

    while (current.nextNode !== null) {
      prev = current;
      current = current.nextNode;
    }

    if (this.size !== 0) {
      prev.nextNode = null;
    } else {
      this.head = null;
    }

    this.tail = prev;
    return current;
  }

  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let current = this.head;
    let string = "";

    while (current !== null) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    string += "null";
    return string;
  }
}
