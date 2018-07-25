/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  console.log('');
  let head = null;
  console.log('head', head);
  let tail = null;
  console.log('tail', tail);
  
  function getHead() {
    return head;
  }
  
  function getTail() {
    return tail;
  }
  
  // newNode within the add method NOT global
  
  function add(value) {
    
    let newNode = {
      value: value,
      next: null
    }
    console.log('');    
    console.log('add let newNode = ', newNode);

    if (!head) {
      console.log('');
      head = newNode;
      console.log('add if!head head = newNode', head);
      tail = newNode;
      console.log('add if!head tail = newNode', tail);
    }
    else {
      console.log('');
      tail.next = newNode;
      console.log('add else tail.next = newNode', tail.next);
      tail = tail.next;
      console.log('add else tail = tail.next', tail);
    }
    console.log('add return tail', tail);
    return tail;
  }

  function get(number) {
    console.log('');
    console.log('get number', number);
 
    if (number < 0 || !head) {
      console.log('get if !head || number<0', number, 'is false');
      return false;
    }
    else if (number === 0) {
      console.log('get head if number === 0', head);
      return head;
    }
    else {
      console.log('');
      let targetNode = head;
      console.log('get else targetNode = head', targetNode);
      console.log('get else targetNode.next', targetNode.next);
      console.log('get else targetNode.next.next', targetNode.next.next);
      // console.log('get else targetNode.next.next.next', targetNode.next.next.next);
      // console.log('get else targetNode.next.next.next.next', targetNode.next.next.next.next);
      console.log('');
      
      for (let i = 0; i < number; i++) {
        console.log('get else for index i =', i);
        console.log('get else for number =', number);
        if (targetNode.next === null) {
          console.log('get else for if (targetNode.next === null)', targetNode.next, ' =  false');
          return false;
        }
        targetNode = targetNode.next;
        console.log('get else for targetNode = targetNode.next', targetNode);
      }
      console.log('get else return targetNode', targetNode);
      return targetNode;
    }
  }
  
  function remove(number) {
    let previousNode = get(number - 1);
    let targetNode = get(number);
    let nextNode = get(number + 1);
    console.log('');
    console.log('remove number', number);
    console.log('remove previousNode', previousNode);
    console.log('remove targetNode', targetNode);
    console.log('remove nextNode', nextNode);

    if (number < 0 || targetNode === false) {
      console.log('remove if (number<0 || targetNode === false)', number, 'is false');
      return false;
    }
    else if (number === 0) {
      console.log('');
      console.log('remove else if (number === 0) head to be removed =', head);
      console.log('remove else if (number === 0) nextNode to replace head =', nextNode);
      head = nextNode;
      console.log('remove else if (num=0) (head = nextNode) new head =', head);
    }
    else {
      if (targetNode.next === null) {
        console.log('');
        console.log('remove elses if (targetNode.next === null) targetNode.next was', targetNode.next);
        console.log('');
        tail = previousNode;
        console.log('remove elses if (make tail = previousNode) tail =', tail);
        tail.next = null;
        console.log('remove elses if (make tail.next = null) tail.next =', tail.next);
      }
      else {
        console.log('');
        previousNode.next = nextNode;
        console.log('remove elses else (previousNode.next = nextNode) previousNode.next =', previousNode.next);
      }
    }
  }

  function insert(value, number) {
    
  }

  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  }

}