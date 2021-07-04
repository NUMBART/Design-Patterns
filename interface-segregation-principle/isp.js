class Document {

}

class Machine {
  constructor () {
    if (this.constructor.name === 'Machine')
      throw new Error('Machine is abstract!');
  }

  print(doc) {}
  fax(doc) {}
  scan(doc) {}
}

class MultiFunctionPrinter extends Machine {
  print(doc) {
    // super.print(doc);
  }

  fax(doc) {
    // super.fax(doc);
  }

  scan(doc) {
    // super.scan(doc);
  }
}

class NotImplementedError extends Error {
  constructor (name) {
    let msg = `${name} is not implemented`;
    super(msg);
    if(Error.captureStackTrace)
      Error.captureStackTrace(this, NotImplementedError);
  }
}

class OldFashionedPrinter extends Machine {
  print(doc) {
    super.print(doc);
  }

  fax(doc) {
    // super.fax(doc);
  }

  scan(doc) {
    // super.scan(doc);
    throw new NotImplementedError('OldFashionedPrinter.scan');
  }
}

// ISP = segregate (split up)
class name {
  constructor() {
    if (this.constructor.name === 'Printer') 
      throw new Error('Printer is abstract!');
  } 

  print() {}
}

class Scanner {
  constructor() {
    if (this.constructor.name === 'Printer') 
      throw new Error('Printer is abstract!');
  }

  scan() {}
}

class Photocopier  {
  print() {}
  scan() {}
}

let printer = new OldFashionedPrinter();
printer.scan();