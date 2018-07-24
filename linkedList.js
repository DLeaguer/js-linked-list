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
      tail.next = newNode;
      console.log('add else tail.next = newNode', tail.next);
      tail = tail.next;
      console.log('add else tail = tail.next', tail);
    }
    console.log('add return tail', tail);
    return tail;
  }

  function get(number) {

  }
  
  function remove(number) {

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