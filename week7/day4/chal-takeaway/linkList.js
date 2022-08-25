// singly linked lists
// ListNode class: we'll be using this

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToFront(value) {
         //lets write some code friends
         let new_node = new ListNode(value)
         if(this.head === null) {
            this.head = new_node;
            this.tail = new_node;
         } else {
            new_node.next = this.head;
            this.head = new_node;
         }
         return `added node ${JSON.stringify(new_node)}`;
    }

    addToBack(value) {
    //     //lets write some code friends
    let new_node = new ListNode(value)
    if(this.tail === null) {
        this.head = new_node;
        this.tail = new_node;
    } else {
        this.tail.next = new_node;
        this.tail = new_node;
        
    }
     }

     size() {
    //     //lets write some code friends
    let count = 0;
    let runner = this.runner;
    while (runner) {
        count++;
        runner = runner.next;
    }
     }

    // removeFront() {
    //     //lets write some code friends
    // }

     removeBack() {
    //     //lets write some code friends
    if (this.head === null) {
        return('There is nothing to remove')
    }else {
        
    }
     }
}

function generateNewList(length, min_value, max_value) {
    let new_sll = new SinglyLinkedList();
    for (let i = 0; i < length; i++) {
        new_sll.addToFront(Math.floor(Math.random() * max_value) + min_value)
    }
    return new_sll
}

let node1 = new ListNode(4)
let node2 = new ListNode(3)
node2.next = node1

// console.log(node1);
// console.log(node2);
let ssl = new SinglyLinkedList


console.log(ssl.addToFront(1))
console.log(ssl.addToBack(2))
console.log(ssl)