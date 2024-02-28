/* eslint-disable no-plusplus */
/* eslint-disable max-classes-per-file */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(key, value) {
    const newNode = new Node(key, value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(key, value) {
    const newNode = new Node(key, value);
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

  remove(index) {
    let cur = this.head;
    let prev = null;
    let count = 0;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    while (count < index) {
      prev = cur;
      cur = cur.next;
      count++;
    }
    prev.next = cur.next;
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
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashMap {
  constructor(size = 16) {
    this.size = size;
    this.length = 0;
    this.map = new Array(size).fill(null).map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.size;
  }

  set(key, value) {
    const hash = this.hash(key);
    const index = hash % this.size;
    for (let i = 0; i < this.map[index].size(); i++) {
      const node = this.map[index].at(i);
      if (node.key === key) {
        node.value = value;
        return;
      }
    }
    this.map[index].append(key, value);
    this.length++;
  }

  get(key) {
    const hash = this.hash(key);
    const index = hash % this.size;

    for (let i = 0; i < this.map[index].size(); i++) {
      const node = this.map[index].at(i);
      if (node.key === key) {
        return node.value;
      }
    }
    return null;
  }

  has(key) {
    const hash = this.hash(key);
    const index = hash % this.size;
    return this.map[index].contains(key);
  }

  remove(key) {
    const hash = this.hash(key);
    const index = hash % this.size;
    for (let i = 0; i < this.map[index].size(); i++) {
      const node = this.map[index].at(i);
      if (node.key === key) {
        this.map[index].remove(i);
        this.length--;
        return true;
      }
    }
    return false;
  }

  getLength() {
    return this.length;
  }

  clear() {
    this.map = new Array(this.size).fill(null).map(() => new LinkedList());
    this.length = 0;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.size; i++) {
      let cur = this.map[i].head;
      while (cur) {
        keys.push(cur.key);
        cur = cur.next;
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.size; i++) {
      let cur = this.map[i].head;
      while (cur) {
        values.push(cur.value);
        cur = cur.next;
      }
    }
    return values;
  }

  entries() {
    const entries = [];
    for (let i = 0; i < this.size; i++) {
      let cur = this.map[i].head;
      while (cur) {
        entries.push([cur.key, cur.value]);
        cur = cur.next;
      }
    }
    return entries;
  }
}

// const test = new HashMap();
// test.set('name', 'John');
// test.set('age', 30);
// test.set('city', 'New York');
// console.log(test.get('name'));
// console.log(test.get('age'));
// console.log(test.get('city'));
// console.log(test.keys());
// console.log(test.values());
// console.log(test.entries());
// test.remove('age');
// console.log(test.keys());
// console.log(test.values());
// console.log(test.entries());
// test.clear();
// console.log(test.keys());
// console.log(test.values());
// console.log(test.entries());
