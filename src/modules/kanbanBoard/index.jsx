import { useState } from "react";
import { stringValidation } from "../../utility/validation";
import ChildTaskInput from "./component/ChildTaskInput";
import ListInput from "./component/ListInput";
import SingleTaskCard from "./component/SingleTaskCard";
import TaskTitle from "./component/TaskTitle";
import { listAndCardDrop, listDragEnd, listDragLeave, listDragOver, listDragStart } from "./dragDropController";

export default function KanbanBoard() {
  const [isTaskInput, setIsTaskInput] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);

  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedList, setSelectedList] = useState(null);

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
                    data-index={index}
                    data-item={item}
                    draggable={item?.draggable}
                    onDragStart={(e) => {
                      e.stopPropagation();
                      listDragStart(e, item, index, setSelectedList);
                    }}
                    onDragEnd={(e) => {
                      e.stopPropagation();
                      listDragEnd(e, item);
                    }}
                    onDrop={(e) =>
                      listAndCardDrop(
                        e,
                        selectedList,
                        selectedCard,
                        taskList,
                        setTaskList,
                        setSelectedList,
                        setSelectedCard
                      )
                    }
                    onDragOver={(e) => listDragOver(e, selectedCard)}
                    onDragLeave={(e) => {
                      listDragLeave(e, item);
                    }}
                    className="px-2 w-[300px] z-10"
                  >
                    {/* task list title */}
                    <TaskTitle
                      taskList={taskList}
                      setTaskList={setTaskList}
                      item={item}
                      index={index}
                    />

                    {/* All task card list */}
                    {item?.list?.length > 0 ? (
                      <SingleTaskCard
                        item={item}
                        index={index}
                        taskList={taskList}
                        setTaskList={setTaskList}
                        selectedCard={selectedCard}
                        setSelectedCard={setSelectedCard}
                      />
                    ) : null}

                    {/* task card new input */}
                    <ChildTaskInput
                      index={index}
                      item={item}
                      stringValidation={stringValidation}
                      taskList={taskList}
                      setTaskList={setTaskList}
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
