// Реализуйте и экспортируйте функцию has, которая проверяет, является ли переданное значение элементом списка.

// const numbers = l(3, 4, 5, 8);
// has(numbers, 8); // true
// has(numbers, 0); // false
// Реализуйте и экспортируйте функцию reverse, которая переворачивает список, используя итеративный процесс.

// const numbers = l(3, 4, 5);
// reverse(numbers); // (5, 4, 3)
// Реализуйте и экспортируйте функцию concat, которая соединяет два списка, используя рекурсивный процесс (попробуйте сначала представить, как работала бы функция copy, которая принимает на вход список и возвращает его копию).

// const numbers = l(3, 4, 5, 8);
// const numbers2 = l(3, 2, 9);
// concat(numbers, numbers2); // (3, 4, 5, 8, 3, 2, 9)

import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
const has = (list, num) => {

  for (let a = list; head(a) !== num; a = tail(a)) {
    {
      if (tail(a) === null)
        return false
    }
  }
  return true
}

// export const has = (list, element) => {
//   if (isEmpty(list)) {
//     return false;
//   }
//   if (head(list) === element) {
//     return true;
//   }

//   return has(tail(list), element);
// };

const reverse = (list) => {
  let newlist = l();
  for (let a = list; a !== null; a = tail(a)) {
    newlist = cons((head(a)), newlist);
  }
  return newlist;
}

// export const reverse = (list) => {
//   const iter = (items, acc) =>
//     (isEmpty(items) ? acc : iter(tail(items), cons(head(items), acc)));

//   return iter(list, l());
// };

const concat = (list1, list2) => {
  let newlist = l();
  for (let a = list1; a !== null; a = tail(a)) {
    newlist = cons(head(a), newlist);
  }
  let result = list2;
  for (let a = newlist; a !== null; a = tail(a)) {
    result = cons(head(a), result);
  }
  return result;
}

// export const concat = (list1, list2) => {
//   if (isEmpty(list1)) {
//     return list2;
//   }

//   return cons(head(list1), concat(tail(list1), list2));
// };

export { has, reverse, concat }
// END
