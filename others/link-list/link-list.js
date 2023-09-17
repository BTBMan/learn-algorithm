class LinkNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(val) {
    const node = new LinkNode(val);
    let prev = this.head;

    if (this.head) {
      while (prev.next) {
        prev = prev.next;
      }

      prev.next = node;
    } else {
      this.head = node;
    }

    this.length++;
  }

  toString() {
    let prev = this.head;

    if (this.head) {
      let ret = prev.val;

      do {
        prev = prev.next;
        ret += '-->' + prev.val;
      } while (prev.next);

      console.log(ret);
    } else {
      console.log('Empty');
    }
  }
}

const linkList = new LinkNodeList();

linkList.append(1);
linkList.append(2);
linkList.append(3);
linkList.append(4);

console.log(linkList.length);

linkList.toString();
