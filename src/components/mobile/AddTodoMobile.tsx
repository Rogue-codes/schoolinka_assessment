import { LiaTimesSolid } from "react-icons/lia";
import DateSelect from "../../widgets/dateselect";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { formatDate } from "../../utils/date";
import { v4 as uuidv4 } from "uuid";
import { TodoOptions } from "../../types";
import { addTodo, updateTodo } from "../../store/reducers/TaskSlice";

interface AddtodoProps {
  setShowAddTodoModal: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
  todoObj: TodoOptions | null;
  setTodoObj: React.Dispatch<React.SetStateAction<TodoOptions | null>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

export default function AddTodoMobile({
  setShowAddTodoModal,
  type,
  setType,
  todoObj,
  setTodoObj,
}: AddtodoProps) {
  const todoDate : Date | null = new Date()

  const [todos, setTodos] = useState<TodoOptions>({
    id: uuidv4(),
    tittle: "",
    startTime: "",
    endTime: "",
    date: formatDate(todoDate),
    isCompleted: false,
  });

  console.log(todos, type);

  const dispatch = useDispatch();
  const handleTodoSubmit = () => {
    dispatch(type === "add" ? addTodo(todos) : updateTodo(todoObj));
    // Reset the entire todos object
    setTodos({
      id: uuidv4(),
      tittle: "",
      startTime: "",
      endTime: "",
      date: formatDate(todoDate),
      isCompleted: false,
    });

    // close modal after editing.
    if (type === "edit") {
      setShowAddTodoModal(false);
    }
  };

  return (
    <div className="bg-white absolute bottom-0 w-full p-6 rounded-tr-2xl rounded-tl-2xl">
      <div className="w-full flex justify-between items-center">
        <p className="text-[#101828] text-[18px] leading-7">Add Task</p>
        <LiaTimesSolid
          size={20}
          cursor="pointer"
          className="hover:scale-110 transition-all"
          onClick={() => {
            setShowAddTodoModal(false);
            setType("add");
            // setTodoObj(null)
          }}
        />
      </div>
      <textarea
        name=""
        id=""
        cols={30}
        rows={5}
        value={type === "add" ? todos.tittle : todoObj?.tittle}
        onChange={
          type === "add"
            ? (e) => setTodos({ ...todos, tittle: e.target.value })
            : (e) =>
                todoObj && setTodoObj({ ...todoObj, tittle: e.target.value })
        }
        className="bg-[#F9FAFB] w-full px-[14px] focus:outline-none border border-[#D0D5DD] py-3 rounded-lg mt-4 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
      ></textarea>

      <div className="w-full py-3 flex justify-between items-center">
        <div className="w-[35%]">
          <DateSelect
            selected={!todoObj ? todoDate : new Date(todoObj.date)}
            onChange={
              type === "add"
                ? (date) => {
                    setTodos({ ...todos, date: formatDate(date) });
                  }
                : (date) => {
                    todoObj &&
                      setTodoObj({ ...todoObj, date: formatDate(date) });
                  }
            }
            className="items-center !text-xs border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] rounded-lg  p-3"
          />
        </div>

        <input
          type="time"
          name=""
          value={type === "add" ? todos.startTime : todoObj?.startTime}
          onChange={
            type === "add"
              ? (e) => setTodos({ ...todos, startTime: e.target.value })
              : (e) =>
                  todoObj &&
                  setTodoObj({ ...todoObj, startTime: e.target.value })
          }
          className="border text-xs p-3 w-[30%] border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] rounded-lg"
          id=""
        />
        <input
          type="time"
          name=""
          value={type === "add" ? todos.endTime : todoObj?.endTime}
          onChange={
            type === "add"
              ? (e) => setTodos({ ...todos, endTime: e.target.value })
              : (e) =>
                  todoObj && setTodoObj({ ...todoObj, endTime: e.target.value })
          }
          className="border text-xs p-3 w-[30%] border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] rounded-lg"
          id=""
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="flex text-[#667085] justify-start items-center gap-2">
          {" "}
          <IoNotificationsOutline size={20} />
          10 Minute before
        </p>
        <LiaTimesSolid
          size={20}
          cursor="pointer"
          className="hover:scale-110 transition-all"
          // onClick={() => setShowAddTodoModal(false)}
        />
      </div>
      <div className="flex justify-between mt-8">
        <button
          className="border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-[#344054] p-2 rounded-lg w-[45%]"
          onClick={() => setShowAddTodoModal(false)}
        >
          Cancel
        </button>
        <button
          disabled={
            (!todos.tittle && !todoObj?.tittle) ||
            (!todos.startTime && !todoObj?.startTime) ||
            (!todos.endTime && !todoObj?.endTime) ||
            (!todos.date && !todoObj?.date)
          }
          className="border bg-[#3F5BF6] text-white p-2 rounded-lg w-[45%] disabled:cursor-not-allowed disabled:opacity-50"
          onClick={handleTodoSubmit}
        >
          {type === "add" ? "Add" : "Save"}
        </button>
      </div>
    </div>
  );
}
