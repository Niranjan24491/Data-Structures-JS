/** Queue */

function Queue () {
  let collection = []

  // print all elements of the queue
  this.print = () => {
    console.log(collection)
  }

  // push to queue
  this.enqueue = element => {
    collection.push(element)
  }

  // remove from queue and return the removed element
  this.dequeue = () => {
    return collection.shift()
  }

  // get the first element of the queue
  this.front = () => {
    return collection[0]
  }

  // get complete size of the queue
  this.size = () => {
    return collection.length
  }

  // check if queue is empty
  this.isEmpty = () => {
    return collection.length === 0
  }
}

let q = new Queue()
q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.print()
q.dequeue()
q.front()

/** Priority queue */

function PriorityQueue () {
  let collection = []

  // get all elements of collection
  this.printCollection = () => {
    console.log(collection)
  }

  // push elements into queue
  this.enqueue = element => {
    if (this.isEmpty()) {
      collection.push(element)
    } else {
      let elementAdded = false
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element)
          elementAdded = true
          break
        }
      }
      if (!elementAdded) {
        collection.push(element)
      }
    }
  }

  // remove from queue and return the removed element
  this.dequeue = () => {
    return collection.shift()[0]
  }

  // get the first element of the queue
  this.front = () => {
    return collection[0]
  }

  // get complete size of the queue
  this.size = () => {
    return collection.length
  }

  // check if queue is empty
  this.isEmpty = () => {
    return collection.length === 0
  }
}
