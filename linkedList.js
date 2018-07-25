/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  let head = null;
  let tail = null;
  let value;
  let newNode = {
    value: value,
    next: null
  }
  function getHead() {
    return head;
  }
  function getTail() {
    return tail;
  }
  function add(value) {
    let newNode = {
      value: value,
      next: null
    }
    if (!head) {
      head = newNode;
      tail = newNode;
    }
    else {
      tail.next = newNode;
      tail = tail.next;
    }
    return tail;
  }
  function get(number) {
    if (number === 0) {
      return head;
    }
    else {
      let targetNode = head;
      for (let i=0; i<number; i++) {
        if (targetNode.next === null) {
          return false;
        }
        else {
          targetNode = targetNode.next;
        }
      }
      return targetNode;
    }
  }
  function remove(number) {
    let previousNode = get(number-1);
    let targetNode = get(number);
    let nextNode = get(number+1);
    if (number<0 || targetNode===false) {
      return false;
    }
    else if (number===0) {
      head = nextNode;
    }
    else {
      if (targetNode.next===null) {
        tail = previousNode;
        tail.next = null;
      }
      else {
        previousNode.next = nextNode;
      }
    }
  }
  function insert(value, number) {
    let newNode = {
      value: value,
      next: null
    }
    let previousNode = get(number-1);
    let targetNode = get(number);
    let nextNode = get(number+1);
    if (number<0 || targetNode===false) {
      return false;
    }
    else if (number===0) {
      head = newNode;
      head.next = targetNode;
    }
    else {
      previousNode.next = newNode;
      newNode.next = targetNode;  
    }
  }
  
  return {
    newNode,
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  }
}