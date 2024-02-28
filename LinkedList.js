/* eslint-disable no-plusplus */
/* eslint-disable max-classes-per-file */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let cur = this.head;
    while (cur) {
      count++;
      cur = cur.next;
    }
    return count;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let count = 0;
    let cur = this.head;
    while (cur) {
      if (count === index) {
        return cur;
      }
      count++;
      cur = cur.next;
    }
    return null;
  }

  pop() {
    let cur = this.head;
    let prev = null;
    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }
    prev.next = null;
    this.tail = prev;
  }

  contains(value) {
    let cur = this.head;
    while (cur) {
      if (cur.value === value) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let cur = this.head;
    while (cur) {
      if (cur.value === value) {
        return index;
      }
      index++;
      cur = cur.next;
    }
    return null;
  }

  toString() {
    let cur = this.head;
    let res = '';
    while (cur) {
      res += `( ${cur.value} ) -> `;
      cur = cur.next;
    }
    res += 'null';
    return res;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.append('e');
list.prepend('z');
console.log(list.size());
console.log(list.toString());
console.log(list.at(3));
console.log(list.contains('c'));
console.log(list.find('c'));
list.pop();
console.log(list.toString());
console.log(list.getTail());
console.log(list.getHead());
console.log(list.size());
console.log(list.toString());
