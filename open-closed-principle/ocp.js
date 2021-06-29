const Color = Object.freeze({
  red: 'red',
  green: 'green',
  blue: 'blue',
});

const Size = Object.freeze({
  small: 'small',
  medium: 'medium',
  large: 'large',
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

class ProductFilter {
  filterBySize(size, items){
    return items.filter(item => item.size === size);
  }
  filterByColor(color, items){
    return items.filter(item => item.color === color);
  }

  //new additions cause space explosion
  filterBySizeAndColor(size, color, items){
    return items.filter(item => item.color === color && item.size === size);
  }
}

let apple = new Product('Apple', Color.green, Size.small);
let tree  = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let items = [apple, tree, house];

// Old Filter with state space explosion
    // let pf = new ProductFilter();
    // for(let item of pf.filterByColor(Color.green, items))
    //   console.log(`* ${item.name} is green`);

    // for(let item of pf.filterBySizeAndColor(Size.large, Color.green, items))
    //   console.log(`* ${item.name} is green and large`);

// New Filter with separate specifications for each filter
// No modifications in existing class

class ColorSpecification {
  constructor(color) {
    this.color = color;
  }
  isSatisfied(item) {
    return item.color === this.color;
  }
}

class SizeSpecification {
  constructor(size) {
    this.size = size;
  }
  isSatisfied(item) {
    return item.size === this.size;
  }
}

class AndSpecification {
  constructor(...specs){
    this.specs = specs;
  }
  isSatisfied(item){
    return this.specs.every(spec => spec.isSatisfied(item));
  }
}

class BetterFilter {
  filter(spec, items) {
    return items.filter(item => spec.isSatisfied(item));
  }
}

let bf = new BetterFilter();

// for(let item of bf.filter(new ColorSpecification(Color.green), items))
//   console.log(`* ${item.name} is green`);

let spec = new AndSpecification(
  new SizeSpecification(Size.large),
  new ColorSpecification(Color.green)
);

for(let item of bf.filter(spec, items))
  console.log(`* ${item.name} is green`);