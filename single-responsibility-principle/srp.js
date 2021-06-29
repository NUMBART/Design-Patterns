const fs = require('fs');

class Journal {
  count = 0;
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    const idx = this.count++;
    this.entries[idx] = `${idx}: ${text}`;
    return idx;
  }

  removeEntry(idx) {
    delete this.entries[idx];
  }

  toString(text) {
    return Object.values(this.entries).join('\n');
  }

  save(filename) {
    fs.writeFileSync(filename, this.entries);
  }
}

class PersistenceManager {
  save(filename, object) {
    fs.writeFileSync(filename, object.toString());
  }
}


const j = new Journal();
j.addEntry('I cried today.');
j.addEntry('I ate a bug.');
console.log(j.toString());

let p =new PersistenceManager();
let filename = '/Users/subhrangshu/Documents/Design Patterns/single-responsibility-principle/journal.txt';
p.save(filename, j);