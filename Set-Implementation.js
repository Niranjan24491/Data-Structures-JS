// Set implemenation function. Sets are similar to array but they cant have repeated values.ß
function SetImplementation() {
  let setArray = [];

  // Implementaion to check if elements have duplicates
  this.has = (element) => {
    return (setArray.indexOf(element) !== -1);
  };

  // Implementation of returning values of a set
  this.values = () => {
    return setArray;
  };

  // Implementation of length of the set
  this.length = () => {
    return setArray.length;
  }

  // Implementation of adding an element into the array after checking if it has no duplicates
  this.add = (element) => {
    if (!this.has(element)) {
      setArray.push(element);
      return 'added successfully';
    } else {
      return 'element already exists';
    }
  };

  // Implementation of removing elements from set
  this.delete = (element) => {
    if (this.has(element)) {
      const index = collection.infexOf(element);
      setArray.splice(index, 1);
      return 'deleted successfully';
    } else {
      return 'element not present';
    }
  }

  // Implementation of union of two sets
  this.union = (otherSet) => {
    let unionSet = new Set();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    firstSet.forEach(element => {
      unionSet.add(element);
    });

    secondSet.forEach(element => {
      unionSet.add(element);
    });

    return unionSet;
  }

  // Implementation of intersection of two sets
  this.intersection = (otherSet) => {
    let intersectionSet = new Set();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    firstSet.forEach(element => {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });

    return intersectionSet;
  }

  // Implementation of difference of two sets
  this.difference = (otherSet) => {
    let differenceSet = new Set();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    firstSet.forEach(element => {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });

    return differenceSet;
  }

  // Implementation of subSet
  this.subset = (otherSet) => {
    const firstSet = this.values();

    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  }
}

let setA = new SetImplementation();
let setB = new SetImplementation();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');

console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());