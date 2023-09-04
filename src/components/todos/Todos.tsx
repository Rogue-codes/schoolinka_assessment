/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsCheckLg } from "react-icons/bs";
import Pagination from "../../widgets/paginate";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoOptions } from "../../types";
import { formatDate, formatDateWithRelativeLabel, formatTime } from "../../utils/date";
import { notask } from "../../assets";
import { toggleTodo } from "../../store/reducers/TaskSlice";

interface TodosProps {
  setTodoObj: React.Dispatch<React.SetStateAction<TodoOptions | null>>;
  setShowviewTodoModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowviewTodoModalMobile: React.Dispatch<React.SetStateAction<boolean>>
  selectedDay: Date | null
}
export default function Todos({
  setTodoObj,
  setShowviewTodoModal,
  selectedDay,
  setShowviewTodoModalMobile
}: TodosProps) {
  const itemsPerPage = 5;
  const [itemOffset, setItemOffset] = useState(0);


  const todosList = useSelector((state: any) => state.todo.todos);

  const filteredTodoList = todosList.filter((todo:TodoOptions)=>todo.date === formatDate(selectedDay))

  console.log(filteredTodoList)


  const endOffset = itemOffset + itemsPerPage;

  const data = filteredTodoList;

  const currentItems = data.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  // viewTodo
  const handleViewTodo = (todo: TodoOptions) => {
    setShowviewTodoModal(true);
    setTodoObj(todo);
    setShowviewTodoModalMobile(true)
  };

  const dispatch = useDispatch()
  // toggle Todo status
  const handleToggle = (id:string) => {
    dispatch(toggleTodo(id))
  }

  return (
    <div>
      <p className="mt-8 mb-4 text-[#101828] font-semibold">My Task</p>
      {!currentItems.length ? (
        <div className="w-full py-16 flex flex-col justify-center items-center">
          <img src={notask} alt="" />
          <h2 className="text-sm lg:text-xl font-bold text-[#3F5BF6]">No Todos</h2>
          <p className="text-xs lg:text-md">click on the create button to add a new todo.</p>
        </div>
      ) : (
        currentItems.map((todo: TodoOptions) => (
          <div
            key={todo.id}
            className="w-full border-b border-[#F9FAFB] flex justify-between items-center bg-[#F9FAFB] py-4 mb-4 px-6 cursor-pointer"
            onClick={() => handleViewTodo(todo)}
          >
            <div className="flex justify-start gap-4 items-center">
              <div
                className={`${
                  todo.isCompleted
                    ? "border border-[#3F5BF6] text-[#3F5BF6]"
                    : "border border-[#D0D5DD]"
                } w-5 h-5 rounded-md`}
                onClick={()=>handleToggle(todo.id)}
              >
                {todo.isCompleted && <BsCheckLg />}
              </div>
              <div className={``}>
                <p className="text-sm leading-5 text-[#101828] font-medium">
                  {todo.tittle}
                </p>
                <p className="text-[#475467] text-sm">
                  {formatTime(todo.startTime)} - {formatTime(todo.endTime)}
                </p>
              </div>
            </div>
            <div className="text-[#475467] text-sm leading-5">
              {formatDateWithRelativeLabel(todo.date)}
            </div>
          </div>
        ))
      )}

      {pageCount > 1 && <Pagination onChange={handlePageClick} numOfPages={pageCount} />}
    </div>
  );
}
