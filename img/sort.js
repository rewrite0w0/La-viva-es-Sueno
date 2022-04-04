const todos = [
  {
    date: '2021-01',
    todo: 'ok1',
    done: true,
  },
  {
    date: '2021-03',
    todo: 'ok3',
    done: true,
  },
  {
    date: '2021-09',
    todo: 'ok9',
    done: false,
  },
  {
    date: '2021-08',
    todo: 'ok8',
    done: true,
  },
  {
    date: '2021-12',
    todo: 'ok12',
    done: true,
  },
  {
    date: '2021-02',
    todo: 'ok2',
    done: false,
  },
];
console.log('original');
console.log(todos);
// const dateSort = item = {item.sort((x, y) => (x.date < y.date ? 1 : -1))};

const dateSort = (todolist) => {
  console.log(todolist.sort((x, y) => (x.date < y.date ? 1 : -1)));
};

const doneSort = (todolist) => {
  console.log(todolist.sort((x, y) => (x.done < y.done ? -1 : 1)));
};

const dateDoneSort = (todolist) => {
  let needDone = todolist
    .filter((z) => z.done === false)
    .sort((x, y) => (x.date < y.date ? 1 : -1));

  let alreadyDone = todolist
    .filter((z) => z.done === true)
    .sort((x, y) => (x.date < y.date ? 1 : -1));

  // todolist.sort((x,y)=>)
  // console.log(needDone);
  // console.log(alreadyDone);
  console.log(needDone.concat(alreadyDone));
};

const dateDoneSortOther = (todolist) => {
  let list = [
    todolist
      .filter((z) => z.done === false)
      .sort((x, y) => (x.date < y.date ? 1 : -1)),

    todolist
      .filter((z) => z.done === true)
      .sort((x, y) => (x.date < y.date ? 1 : -1)),
  ];

  console.log(list);
};

var mapped = todos.map((el, i) => {
  return { index: i, value: el };
});
// console.log('mapped');
// console.log(mapped);

mapped.sort(function (a, b) {
  // console.log('-------------');
  // console.log(a);
  // console.log('and');
  // console.log(b);
  // console.log('-------------');
  return +(a.value.done > b.value.done) || +(a.value.done === b.value.done) - 1;
});

var result = mapped.map(function (el) {
  return todos[el.index];
});
// console.log('mapped2');
// console.log(mapped);
// console.log('result');
// console.log(result);

// dateSort(todos);
// doneSort(todos);
// dateDoneSort(todos);
// dateDoneSortOther(todos);

const sort = (item) => {
  return item.sort((x, y) => (x.done < y.done && x.date > y.date ? -1 : 1));
};

console.log(sort(todos));
