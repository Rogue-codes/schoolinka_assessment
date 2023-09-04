import { BsCalendar4Event } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { formatDateToLongFormat, formatTime } from "../../utils/date";
import { AiOutlineClockCircle } from "react-icons/ai";
import { deleteTodo } from "../../store/reducers/TaskSlice";
import { useDispatch } from "react-redux";
import { TodoOptions } from "../../types";

interface ViewTodoProps {
  setShowviewTodoModal: React.Dispatch<React.SetStateAction<boolean>>;
  todoObj: TodoOptions | null;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setShowAddTodoModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTodoObj: React.Dispatch<React.SetStateAction<TodoOptions | null>>;
}

export default function ViewTodoModalMobile({
  setShowviewTodoModal,
  todoObj,
  setType,
  setShowAddTodoModal,
  setTodoObj,
}: ViewTodoProps) {
  // this function will mount the edit todo modal
  const handleEdit = () => {
    setType("edit");
    setShowAddTodoModal(true);
  };

  const dispatch = useDispatch();

  // delete todo
  const handleDelete = (id: string | undefined) => {
    dispatch(deleteTodo(id));
    setShowviewTodoModal(false);
    setTodoObj(null);
  };
  return (
    <div className="bg-white absolute bottom-0 w-full p-6 h-[90%] rounded-tr-2xl rounded-tl-2xl">
      <div className="w-full flex justify-end">
        <LiaTimesSolid
          size={20}
          cursor="pointer"
          className="hover:scale-110 transition-all"
          onClick={() =>{
            setShowviewTodoModal(false)
            setType("add")
        }}
        />
      </div>

      <p className="text-lg font-bold text-[#272727]">{todoObj?.tittle}</p>

<div className="mt-8 flex justify-start items-center gap-3 w-full ">
  <BsCalendar4Event size={20} className="text-[#3F5BF6]" />
  <p className="text-[#272727] font-medium">
    {formatDateToLongFormat(todoObj?.date)}
  </p>
</div>

<div className="mt-8 flex justify-start items-center gap-3 w-full ">
  <AiOutlineClockCircle size={20} className="text-[#3F5BF6]" />
  <p className="text-[#272727] font-medium">
    {todoObj && formatTime(todoObj?.startTime)} -{" "}
    {todoObj && formatTime(todoObj?.endTime)}
  </p>
</div>

<div className="w-full mt-9 flex justify-between items-center">
  <button
    className="w-[48%] text-[#344054] font-semibold border hover:scale-105 transition-all p-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
    onClick={() => handleDelete(todoObj?.id)}
  >
    Delete
  </button>
  <button
    className="w-[48%] border bg-[#3F5BF6] font-semibold hover:scale-105 transition-all text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] p-2 rounded-lg"
    onClick={handleEdit}
  >
    Edit
  </button>
</div>

    </div>
  );
}
