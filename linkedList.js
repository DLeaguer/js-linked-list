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
          // console.log('add element', element);
    let node = {
      value: element,
      next: null
    }
          // console.log('bef')
    console.log('add node', node);
          // console.log('aft');
    if (!head) {
      head = node;
            // console.log('add head = node', head);
      tail = node;
            // console.log('add tail = node', tail);
    } else {
      tail.next = node;
            // console.log('add tail.next = node', tail.next);
      tail = tail.next;
            // console.log('add tail = tail.next', tail);
    }
    return tail;
  };

  const get = (index) => {
          console.log('');
          console.log('gs');
          console.log('get index', index);
          // console.log('g');
    if (index < 0 || !head) {
            console.log('get index<0 || !head', index);
      return false;
    }
    else if (index === 0) {
            console.log('get return head', head);
      return head;
    }
    else {
      let targetNode = head;
            console.log('get targetNode = head', targetNode);
      for (let i = 0; i < index; i++) {
        if (targetNode.next === null) {
                console.log('get targetNode.next === null', targetNode.next);
          return false;
        }
        targetNode = targetNode.next;
              console.log('get targetNode = targetNode.next', targetNode);
      }
            console.log('get return targetNode', targetNode);
            console.log('ge');
      return targetNode;
    }
  };

  const remove = (index) => {
          console.log('');
          console.log('rs');
          console.log('remove index', index);
    let indexToRemove = get(index);
          console.log('remove indexToRemove = get(index)', indexToRemove);
    let indexPrevious = get(index - 1);
          console.log('remove indexPrevious = get(index - 1)', indexPrevious);
    let indexNext = get(index + 1);
          console.log('remove indexNext = get(index + 1)', indexNext);

    if (index < 0 || indexToRemove === false) {
            console.log('remove index<0 || indexToRemove === false', index);
      return false;
    }
    else if (index === 0) {
      head = indexNext;
            console.log('remove head = indexNext', head);
    }
    else {
      if (indexToRemove.next === null) {
        tail = indexPrevious;
              console.log('remove tail = indexPrevious', tail);
        tail.next = null;
              console.log('remove tail.next = null', tail.next);
      }
      else {
        indexPrevious.next = indexNext;
              console.log('remove indexPrevious.next = indexNext', indexPrevious.next);
      }
    }
    console.log('re');
  }


  const insert = (value, index) => {
          console.log('');
          console.log('is');
          console.log('(insert value, index) -', 'value:'+ value, ', index:'+ index);
    let newNode = {
      value: value,
      next: null
    }
          console.log('insert newNode', newNode);
    let indexPrevious = get(index - 1);
          console.log('insert indexPrevious', indexPrevious);
    let indexTarget = get(index);
          console.log('insert indexTarget', indexTarget);
    let indexNext = get(index + 1);
          console.log('insert indexNext', indexNext);
          console.log('');
    
    if (index < 0 || indexTarget === false) {
            console.log('insert index<0 || indexTarget === false', index);
      return false;
    }
    else if (index === 0) {
      head = newNode;
            console.log('insert head = newNode', head);
      head.next = indexTarget;
            console.log('insert head.next = indexTarget', head.next);
    }
    else {
      if (indexTarget.next === null) {
        indexPrevious.next = newNode;
              console.log('insert indexPrevious.next = newNode', indexPrevious.next);
        newNode.next = indexTarget;
              console.log('insert newNode.next = indexTarget', newNode.next);
        tail = indexTarget;
              console.log('insert tail = indexTarget', indexTarget);
      }
      else {
        indexPrevious.next = newNode;
              console.log('insert indexPrevious.next = newNode', indexPrevious.next);
        newNode.next = indexTarget;
              console.log('insert newNode.next = indexTarget', newNode.next);
      }
    }
    console.log('ie');
   };

  return {
    getHead,
    getTail,
    add,
    remove,
    get,
    insert
  };
}
