import { useState } from "react";
import ListInput from "./component/ListInput";

export default function KanbanBoard() {

  const [isTaskInput,setIsTaskInput] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskList,setTaskList] = useState([]);

  console.log("taskList",taskList);

  return (
    <>
      <div className="table-card">
        <div className="table-card-heading">
          <h2 className="title">Kanban Board</h2>
        </div>
        <div className="table-card-body transparent">
          <div className="kanban-board-wrapper">
            <div className="z-20 flex flex-row">
              <div className="px-2 w-[300px] overflow-y-auto z-10"> Table</div>

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
