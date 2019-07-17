// stack implementation function
const Stack = function() {
  this.count = 0;
  this.storage = {};

  // Implementation of push onto stack
  this.push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  };

  // Implementation of pop from stack and return the popped value
  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  // Implemenation of peep from stack and return the peeped value
  this.peep = () => {
    return this.storage[this.count - 1];
  };
  
  // Implementation of length of stack and return the size of the stack
  this.length = () => {
    return this.count;
  };
}

// Palindrome implementation with above stack implemenation

let array = new Stack();
const palindrome = 'racecar';
let reversedPalindrom = '';

for (let i=0; i < palindrome.length; i++) {
  array.push(palindrome[i]);
}

for (let i=0; i < palindrome.length; i++) {
  reversedPalindrom += array.pop();
}

reversedPalindrom === palindrome ? console.log(`${palindrome} is a palindrome`) : console.log(`${palindrome} is not a palindrome`);
