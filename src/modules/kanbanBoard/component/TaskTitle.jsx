import {
  DeleteOutlined,
  CheckCircleOutlineOutlined,
} from "@mui/icons-material";
import { spaceValidation, stringValidation } from "../../../utility/validation";
import { listDataHandler, taskListRemoveHandler } from "../helper";

export default function TaskTitle({ taskList, setTaskList, item, index }) {
  return (
    <div className="table-card-body m-0 p-0">
      <div className="add-task-card">
        {item?.renameListName ? (
          <>
            {/* When title is editable */}
            <CheckCircleOutlineOutlined
              sx={{ marginRight: "10px", fontSize: "16px", cursor: "pointer" }}
              onClick={() => {
                if (spaceValidation(item?.labelName)) {
                  listDataHandler(
                    taskList,
                    setTaskList,
                    "renameListName",
                    false,
                    index
                  );
                }
              }}
            />

            <input
              type="text"
              name="newCardInput"
              value={item?.labelName}
              onChange={(e) => {
                e.stopPropagation();
                listDataHandler(
                  taskList,
                  setTaskList,
                  "labelName",
                  e.target.value,
                  index
                );
              }}
              onKeyPress={(e) => {
                if (stringValidation(e)) {
                  listDataHandler(
                    taskList,
                    setTaskList,
                    "renameListName",
                    false,
                    index
                  );
                }
              }}
              placeholder="Rename task"
            />
          </>
        ) : (
          <>
            {/* When Title is not editable */}
            <div className="font-bold grid grid-cols-12">
              <span
                className="break-all col-span-11 cursor-pointer"
                onClick={() => {
                  listDataHandler(
                    taskList,
                    setTaskList,
                    "renameListName",
                    true,
                    index
                  );
                }}
              >
                {item?.labelName}
              </span>
              <span className="col-span-1 flex justify-end">
                <DeleteOutlined
                  sx={{ fontSize: "16px", cursor: "pointer" }}
                  onClick={() => {
                    // for parent
                    taskListRemoveHandler(taskList, setTaskList, index, null);
                  }}
                />
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
