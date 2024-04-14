// You are given the pointer to the head node of a sorted linked list, where the data in the nodes is in ascending order.
// Delete nodes and return a sorted list with each distinct value in the original list. The given head pointer may be null indicating that the list is empty.


function removeDuplicates(llist) {
    if (!llist || !llist.next) {
        return llist;
    }

    let current = llist;

    while (current.next) {
        if (current.data === current.next.data) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return llist;
}
