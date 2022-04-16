// to add task list
export const taskListAddHandler = (
  taskList,
  setTaskList,
  value,
  setTaskName,
  cb
) => {
  const copy = [...taskList];
  copy.push({
    id: +copy?.length + 1,
    labelName: value,
    list: [],
    newCardInput: "",
    renameListName: false,
  });

  setTaskList(copy);
  setTaskName("");

  cb && cb();
};

// task rename
export const listDataHandler = (
  taskList,
  setTaskList,
  name,
  value,
  index
) => {
  const copy = [...taskList];
  copy[index][name] = value;
  setTaskList(copy);
};

// task list remover
export const taskListRemoveHandler = (
  taskList,
  setTaskList,
  index,
  nestedIndex
) => {
  let copy = [...taskList];
  if (nestedIndex !== null) {
    copy[index].list = copy[index].list?.filter(
      (_, i) => i !== +nestedIndex
    );
  } else {
    copy = copy?.filter((_, i) => i !== +index);
  }
  setTaskList(copy);
};