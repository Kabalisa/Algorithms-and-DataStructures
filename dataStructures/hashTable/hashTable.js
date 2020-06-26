class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [[key, value]];
    } else {
      this.keyMap[index].push([key, value]);
    }
  }

  get(key) {
    let index = this._hash(key);
    let location = this.keyMap[index];
    if (!location) {
      return undefined;
    }
    for (let element of location) {
      if (element[0] === key) return element[1];
      return undefined;
    }
  }

  key() {
    let keyArr = [];
    for (let location of this.keyMap) {
      if (location) {
        for (let element of location) {
          if (!keyArr.includes(element[0])) {
            keyArr.push(element[0]);
          }
        }
      }
    }
    return keyArr;
  }

  value() {
    let valueArr = [];
    for (let location of this.keyMap) {
      if (location) {
        for (let element of location) {
          if (!valueArr.includes(element[1])) {
            valueArr.push(element[1]);
          }
        }
      }
    }
    return valueArr;
  }
}

let hash = new HashTable(23);
hash.set("breezy", "indigo");
hash.set("joyner", "ADHD");
hash.set("bieber", "changes");
hash.set("chris&thugger", "slime&b");
hash.set("gomez", "rare");
hash.set("dualipa", "futurenostalgia");
console.log(hash.value());
