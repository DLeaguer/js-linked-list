/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  const getHead = () => {
    return head;
  }

  const getTail = () => {
    return tail;
  };

  const add = (element) => {
    console.log('element', element);
    let node = {
      value: element,
      next: null
    };
    if (!head) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = tail.next;
    }
    return tail;
  };

  const remove = (index) => {
    console.log('index', index);
    let indexToRemove = get(index);
    console.log('indexToRemove', indexToRemove);
    let indexPrevious = get(index - 1);
    console.log('previous', indexPrevious);
    let indexNext = get(index + 1);
    console.log('next', indexNext);

    if (index < 0 || indexToRemove === false) {
      return false;
    }
    else if (index === 0) {
      head = indexNext;
    }
    else {
      if (indexToRemove.next === null) {
        tail = indexPrevious;
        tail.next = null;
      }
      else {
        indexPrevious.next = indexNext;
      }
    }
  }

  const get = (index) => {
    if (index < 0 || !head) {
      return false;
    }
    else if (index === 0) {
      return head;
    }
    else {
      let targetNode = head;
      for (let i = 0; i < index; i++) {
        if (targetNode.next === null) {
          return false;
        }
        targetNode = targetNode.next;
      }
      return targetNode;
    }
  };

  const insert = () => { };

  return {
    getHead,
    getTail,
    add,
    remove,
    get,
    insert
  };
}
