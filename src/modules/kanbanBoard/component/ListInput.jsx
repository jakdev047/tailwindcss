import {
  AddOutlined,
  AssignmentOutlined,
  AddCircleOutlineOutlined,
  CancelOutlined,
} from "@mui/icons-material";
import { spaceValidation, stringValidation } from "../../../utility/validation";
import { taskListAddHandler } from "../helper";

export default function ListInput({
  isTaskInput,
  setIsTaskInput,
  taskName,
  setTaskName,
  taskList,
  setTaskList,
}) {
  return (
    <div className="px-2 w-[300px] overflow-y-auto">
      {isTaskInput ? (
        <>
          <div className="table-card-body m-0 p-0">
            <div className="add-task-card">
              <AssignmentOutlined
                sx={{ marginRight: "10px", fontSize: "16px" }}
              />

              <input
                type="text"
                name="taskName"
                value={taskName}
                onChange={(e) => {
                  e.stopPropagation();
                  setTaskName(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (stringValidation(e)) {
                    taskListAddHandler(
                      taskList,
                      setTaskList,
                      e.target.value,
                      setTaskName,
                      () => {
                        setIsTaskInput(false);
                      }
                    );
                  }
                }}
                placeholder="Add new list"
              />

              <AddCircleOutlineOutlined
                sx={{ marginRight: "10px", fontSize: "16px" }}
                onClick={() => {
                  if (spaceValidation(taskName)) {
                    taskListAddHandler(
                      taskList,
                      setTaskList,
                      taskName,
                      setTaskName,
                      () => {
                        setIsTaskInput(false);
                      }
                    );
                  }
                }}
              />

              <CancelOutlined
                sx={{ fontSize: "16px" }}
                onClick={() => {
                  setIsTaskInput(false);
                  setTaskName("");
                }}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="table-card-body m-0 p-0">
            <div
              className="add-task-card"
              onClick={() => {
                setIsTaskInput(true);
              }}
            >
              <AddOutlined sx={{ marginRight: "10px", fontSize: "16px" }} />
              Add another list
            </div>
          </div>
        </>
      )}
    </div>
  );
}
