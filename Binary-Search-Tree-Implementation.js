/*  Binary Search Tree */

class Node {
  constructor (data, left = null, right = null) {
    this.data = data // parent
    this.left = left // left child
    this.right = right // right child
  }
}

/* Binary Search Tree implementation */

class BST {
  constructor () {
    this.root = null
  }

  // add parents and children to tree. Implements recursive function
  add (data) {
    const node = this.root
    if (node === null) {
      this.root = new Node(data)
    } else {
      const searchTree = node => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data)
          } else if (node.left !== null) {
            return searchTree(node.left)
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data)
          } else if (node.right !== null) {
            return searchTree(node.right)
          }
        } else {
          return null
        }
      }
      return searchTree(node)
    }
  }

  // find min data of the tree
  findMin () {
    let current = this.root
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }

  // find max data of the tree
  findMax () {
    let current = this.root
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }

  // find a given element in the tree
  find() {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  //remove elements from tree
  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      }
      if (data = node.data) {
        // node has no children
        if (node.left === null && node.right === null) {
          return null;
        }
        // node has no left child
        if (node.left === null) {
          return node.right;
        }
        // node has no right child
        if (node.right === null) {
          return node.left;
        }
        // node has 2 children
        let tempNode = node .right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
}

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(1);
bst.add(6);
bst.add(5);
bst.add(3);
bst.add(7);
bst.add(8);
bst.remove(8);
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.isPresent(4));
