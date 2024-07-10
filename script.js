function linkedList () {
    return {
        headNode: null,
        tailNode: null,
        length: 0,



        append: function (value) {
            const newNode = node(value);
            if (this.length === 0) {
                this.headNode = newNode;
                this.tailNode = newNode;
            } else {
                this.tailNode.link = newNode;
                this.tailNode = newNode;
            }
            this.length++;
        },
        prepend: function (value) {
            const newNode = node(value);
            if (this.length === 0) {
                this.headNode = newNode;
                this.tailNode = newNode;
            } else {
                newNode.link = this.headNode;
                this.headNode = newNode;
            }
            this.length++;
        },
        size: function () {
            return this.length;
        },
        head: function () {
            return this.headNode;
        },
        tail: function () {
            return this.tailNode;
        },
        at: function (index) {
            if (index < 0 || index >= this.length) {
                return null;
            }
            let currentIndex = 0;
            let currentNode = this.headNode;

            while (currentIndex < index) {
                currentNode = currentNode.link;
                currentIndex++;
            }
            return currentNode.value;
        },
        pop: function () {

            if (this.length === 0) {
                return null;
            } else if (this.length === 1) {
                // If there's only one node, remove it and reset the list
                this.headNode = null;
                this.tailNode = null;
                this.length = 0;
            } else {
                // Traverse to the second last node
                let currentNode = this.headNode;
                while (currentNode.link !== this.tailNode) {
                    currentNode = currentNode.link;
                }
                // Remove the last node
                currentNode.link = null;
                this.tailNode = currentNode;
                this.length--;
            }
        },
        contains: function(value) {
            let currentNode = this.headNode;
        
            while (currentNode !== null) {
                if (currentNode.value === value) {
                    return true; // Found the value in the list
                }
                currentNode = currentNode.link;
            }
            return false; // Value not found in the list
        },
        find: function(value) {
            let currentNode = this.headNode;
            let currentIndex = 0
            while (currentNode !== null) {
                if (currentNode.value === value) {
                    return currentIndex;
                }
                currentNode = currentNode.link;
                currentIndex++;
            }
            return null;
        },
        toString: function () {
            let currentNode = this.headNode
            let result = ''
            while (currentNode !== null) {
                result += `(${currentNode.value}) -> `;
                currentNode = currentNode.link;
            }
            result += 'null';
            return result;
        },
        removeAt: function (index) {
            if (index < 0 || index >= this.length) {
                return null; // Return null if index is out of bounds
            }
        
            let removedNode;
        
            if (index === 0) {
                // Remove the head node
                removedNode = this.headNode;
                this.headNode = this.headNode.link;
        
                if (this.length === 1) {
                    // If the list had only one node, update the tail node
                    this.tailNode = null;
                }
            } else {
                let previousNode = this.at(index - 1);
        
                removedNode = previousNode.link;
                previousNode.link = removedNode.link;
        
                if (index === this.length - 1) {
                    // If the removed node is the tail node, update the tail node
                    this.tailNode = previousNode;
                }
            }
        
            this.length--;
        }

        }
}


function node (value = null, link = null) {
    return {
        value: value,
        link: link
    }
}

// Example usage and console logs
const list = linkedList();

list.append(10);
list.append(20);
list.append(30);

console.log("Linked List:");
console.log(list.toString()); // Output: (10) -> (20) -> (30) -> null

console.log("Size of the list:", list.size()); // Output: 3

console.log("Head of the list:", list.head()); // Output: { value: 10, link: { value: 20, link: { value: 30, link: null } } }

console.log("Tail of the list:", list.tail()); // Output: { value: 30, link: null }

console.log("Value at index 1:", list.at(1)); // Output: 20

console.log("Index of value 20:", list.find(20)); // Output: 1

console.log("Does the list contain value 40?", list.contains(40)); // Output: false

list.pop();
console.log("Linked List after pop:");
console.log(list.toString()); // Output: (10) -> (20) -> null
