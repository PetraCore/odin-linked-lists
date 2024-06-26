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

  // Deliberately changed the parameters order to make it more intuitive
  insertAt(index, value) {
    if (index < 1) return this.prepend(value);
    if (index >= this.size) return this.append(value);
    this.size++;

    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.nextNode;
    }

    const node = new Node(value);
    const next = prev.nextNode;
    prev.nextNode = node;
    node.nextNode = next;

    return node;
  }

  removeAt(index) {
    if (index >= this.size) return this.pop();

    let prev = this.head;
    if (prev === null) return null;
    this.size--;

    if (this.size === 0) {
      this.tail = null;
      this.head = null;
      return prev;
    }

    if (index <= 0) {
      this.head = prev.nextNode;
      return prev;
    }

    for (let i = 0; i < index - 1; i++) {
      prev = prev.nextNode;
    }

    const deleted = prev.nextNode;
    prev.nextNode = deleted.nextNode;

    return deleted;
  }
}
