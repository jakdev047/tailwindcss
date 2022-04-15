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
