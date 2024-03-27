// This is an to practice traversing a linked list.Given a pointer to the 
// head node of a linked list, print each node's  element, one per line.
// If the head pointer is null(indicating the list is empty),
// there is nothing to print.


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printLinkedList(head) {

    if (head == null) {
        console.log("lIst is empty");
    }
    else {
        console.log(head.data);
    }
    var current = head;

    while (current.next) {
        console.log(current.next.data);
        current = current.next;
    }

}

function main() {
    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
        const llistItem = parseInt(readLine(), 10);
        llist.insertNode(llistItem);
    }

    printLinkedList(llist.head);
}
