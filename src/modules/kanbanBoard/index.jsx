import { useState } from "react";
import ListInput from "./component/ListInput";
import TaskTitle from "./component/TaskTitle";

export default function KanbanBoard() {
  const [isTaskInput, setIsTaskInput] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);

  console.log("taskList", taskList);

  return (
    <>
      <div className="table-card">
        <div className="table-card-heading">
          <h2 className="title">Kanban Board</h2>
        </div>
        <div className="table-card-body transparent">
          <div className="kanban-board-wrapper">
            <div className="z-20 flex flex-row">

              {/* task list card */}
              {taskList.length > 0 &&
                taskList?.map((item, index) => (
                  <div
                    key={index}
                    className="px-2 w-[300px] overflow-y-auto z-10"
                  >
                    {/* task list title */}
                    <TaskTitle
                      taskList={taskList}
                      setTaskList={setTaskList}
                      item={item}
                      index={index} 
                    />
                  </div>
                ))}

              {/* list new input  */}
              <ListInput
                isTaskInput={isTaskInput}
                setIsTaskInput={setIsTaskInput}
                taskName={taskName}
                setTaskName={setTaskName}
                taskList={taskList}
                setTaskList={setTaskList}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
