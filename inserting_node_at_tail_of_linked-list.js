// You are given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer.
// Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node.
// The given head pointer may be null, meaning that the initial list is empty.

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
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
    }

};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

function insertNodeAtTail(head, data) {
    const newNode = new SinglyLinkedListNode(data);
    
    if (!head) {
        head = newNode;
    } else {
        let current = head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    
    return head;
}

// Function to insert nodes into the linked list based on the input format
function insertNodesFromInput(n, values) {
    let head = null;
    for (let i = 0; i < n; i++) {
        head = insertNodeAtTail(head, values[i]);
    }
    return head;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
        const llistItem = parseInt(readLine(), 10);
    	const llist_head = insertNodeAtTail(llist.head, llistItem);
      	llist.head = llist_head;
    }

    printSinglyLinkedList(llist.head, '\n', ws);
    ws.write('\n');

    ws.end();
}
