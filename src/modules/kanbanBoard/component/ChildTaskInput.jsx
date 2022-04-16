import { useState } from "react";
import {
  AddOutlined,
  NoteAddOutlined,
  AddCircleOutlineOutlined,
  CancelOutlined,
} from "@mui/icons-material";
import { cardListAddHandler, listDataHandler } from "../helper";
import { spaceValidation } from "../../../utility/validation";

export default function ChildTaskInput({
  index,
  item,
  stringValidation,
  taskList,
  setTaskList,
}) {
  const [isCardInput, setIsCardInput] = useState(false);
  return (
    <div className="px-2 w-[300px]" style={{ margin: "15px 0" }}>
      {isCardInput ? (
        <>
          <div className="table-card-body m-0 p-0">
            <div className="add-task-card">
              <NoteAddOutlined sx={{ marginRight: "10px", fontSize: "16px" }} />

              <input
                type="text"
                name="newCardInput"
                value={item?.newCardInput}
                onChange={(e) => {
                  e.stopPropagation();
                  listDataHandler(
                    taskList,
                    setTaskList,
                    "newCardInput",
                    e.target.value,
                    index
                  );
                }}
                onKeyPress={(e) => {
                  if (stringValidation(e)) {
                    cardListAddHandler(
                        taskList, 
                        setTaskList, 
                        index,
                        () => {
                            setIsCardInput(false);
                        }
                    );
                  }
                }}
                placeholder="Add new card"
              />

              <AddCircleOutlineOutlined
                sx={{ marginRight: "10px", fontSize: "16px" }}
                onClick={() => {
                  if (spaceValidation(item?.newCardInput)) {
                    cardListAddHandler(
                        taskList, 
                        setTaskList, 
                        index,
                        () => {
                            setIsCardInput(false);
                        }
                    );
                  }
                }}
              />

              <CancelOutlined
                sx={{ fontSize: "16px" }}
                onClick={() => {
                  setIsCardInput(false);
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
              onClick={(e) => {
                e.stopPropagation();
                setIsCardInput(true);
              }}
            >
              <AddOutlined sx={{ marginRight: "10px", fontSize: "16px" }} />
              Add a card
            </div>
          </div>
        </>
      )}
    </div>
  );
}
