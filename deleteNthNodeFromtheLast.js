/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
   
    let len = 0; 
    let tempPtr = head;

    while(tempPtr) {
        len++;
        tempPtr = tempPtr.next;
    }

    if(n > len) return head;
    else if(n === len) return head.next;
    else {
    let k = 1;
    tempPtr = head;
    while(k < len - n) {
        tempPtr = tempPtr.next;
        k++;
    }
        tempPtr.next = tempPtr.next.next;
    return head;
    }
};
