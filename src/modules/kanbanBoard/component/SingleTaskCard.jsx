import {
  LockOpenOutlined,
  LockOutlined,
  AssignmentOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import { spaceValidation, stringValidation } from "../../../utility/validation";
import { singleCardDragEnd, singleCardDragLeave, singleCardDragOver, singleCardDragStart, singleCardDrop } from "../dragDropController";
import { cardDataHandler, taskListRemoveHandler } from "../helper";

export default function SingleTaskCard({
  item,
  index,
  taskList,
  setTaskList,
  selectedCard,
  setSelectedCard,
}) {
  return (
    <>
      <div className="mt-4 bg-gray-100 rounded-lg py-1 px-3 z-30">
        {item.list?.map((nestedItem, nestedIndex) => (
          <div
            key={nestedIndex}
            className="grid my-2 grid-cols-12 shadow bg-white items-center rounded p-2"
          >
            {/* card lock icon */}
            <div className="col-span-1">
              {nestedItem?.isEditable ? (
                <>
                  <span className="col-span-1 cursor-pointer">
                    <AssignmentOutlined
                      sx={{ marginRight: "10px", fontSize: "16px" }}
                      onClick={() => {
                        if (spaceValidation(nestedItem?.name)) {
                          cardDataHandler(
                            taskList,
                            setTaskList,
                            "isEditable",
                            false,
                            index,
                            nestedIndex
                          );
                        }
                      }}
                    />
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      cardDataHandler(
                        taskList,
                        setTaskList,
                        "draggable",
                        !nestedItem?.draggable,
                        index,
                        nestedIndex
                      );
                    }}
                  >
                    {nestedItem.draggable ? (
                      <LockOpenOutlined
                        sx={{ marginRight: "10px", fontSize: "16px" }}
                      />
                    ) : (
                      <LockOutlined
                        sx={{ marginRight: "10px", fontSize: "16px" }}
                      />
                    )}
                  </span>
                </>
              )}
            </div>

            {/* card title */}
            {nestedItem?.isEditable ? (
              <>
                {/* When card title is editable */}
                <span className="break-all col-span-10 flex justify-between text-sm rounded cursor-pointer">
                  <input
                    type="text"
                    name="newCardInput"
                    value={nestedItem?.name}
                    onChange={(e) => {
                      e.stopPropagation();
                      cardDataHandler(
                        taskList,
                        setTaskList,
                        "name",
                        e.target.value,
                        index,
                        nestedIndex
                      );
                    }}
                    onKeyPress={(e) => {
                      if (stringValidation(e)) {
                        cardDataHandler(
                          taskList,
                          setTaskList,
                          "isEditable",
                          false,
                          index,
                          nestedIndex
                        );
                      }
                    }}
                    placeholder="Rename card"
                  />
                </span>
              </>
            ) : (
              <>
                {/* When card Title is not editable */}
                <span
                  className="break-all col-span-10 flex justify-between text-sm rounded cursor-pointer"
                  onClick={() => {
                    if (nestedItem?.draggable) {
                      cardDataHandler(
                        taskList,
                        setTaskList,
                        "isEditable",
                        true,
                        index,
                        nestedIndex
                      );
                    } else {
                      alert("Please unlocked the card first 🔓🔓");
                    }
                  }}
                  // data attribute
                  data-index={index}
                  data-nestedindex={nestedIndex}
                  draggable={nestedItem?.draggable}
                  onDragStart={(e) => {
                    e.stopPropagation();
                    singleCardDragStart(e, taskList, setSelectedCard)
                  }}
                  onDragEnd={singleCardDragEnd}
                  onDrop={(e) =>
                    singleCardDrop(
                      e,
                      setSelectedCard,
                      taskList,
                      setSelectedCard,
                      selectedCard
                    )
                  }
                  onDragOver={(e) => singleCardDragOver(e, selectedCard)}
                  onDragLeave={singleCardDragLeave}
                >
                  {nestedItem?.name}
                </span>
              </>
            )}

            {/* card delete  */}
            {nestedItem?.draggable && !nestedItem?.isEditable ? (
              <div className="col-span-1">
                <DeleteOutlined
                  sx={{ fontSize: "16px", cursor: "pointer" }}
                  onClick={() => {
                    // for child
                    taskListRemoveHandler(
                      taskList,
                      setTaskList,
                      index,
                      nestedIndex
                    );
                  }}
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}
