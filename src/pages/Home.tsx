import { useState } from "react";
import AddTodo from "../components/addTodo/AddTodo";
import CalendarComponent from "../components/calendar/Calendar";
import Days from "../components/days/Days";
import Todos from "../components/todos/Todos";
import { monthArr } from "../utils";
import { TodoOptions } from "../types";
import ViewTodo from "../components/viewTodo";
import { BsFillMicFill } from "react-icons/bs";
import AddTodoMobile from "../components/mobile/AddTodoMobile";
import ViewTodoModalMobile from "../components/mobile/ViewTodoModalMobile";
import { AiOutlinePlus } from "react-icons/ai";

export default function Home() {
  const now = new Date();

  const [showAddTodoModal, setShowAddTodoModal] = useState<boolean>(false);
  const [showviewTodoModal, setShowviewTodoModal] = useState<boolean>(false);
  const [showaddTodoModalMobile, setShowaddTodoModalMobile] =
    useState<boolean>(false);
    const [showviewTodoModalMobile, setShowviewTodoModalMobile] = useState<boolean>(false);

  //   todo to be viewed
  const [todoObj, setTodoObj] = useState<TodoOptions | null>(null);

  // handle state for add or edit todo
  const [type, setType] = useState<string>("add");

  // for filtering; toreturn todos for a particular day
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);


  return (
    <div className="lg:px-6">
      <div className="w-full flex justify-between items-center py-4 mb-8">
        <div>
          <h2 className="text-xl lg:text-3xl font-semibold">Good morning!</h2>
          <p className="text-[#475467]">You got some task to do. </p>
        </div>

        <button
          className="lg:flex hidden justify-start items-center gap-2 bg-primary rounded-lg text-white p-2 hover:scale-110 transition-all"
          onClick={() => setShowAddTodoModal(true)}
        >
          <AiOutlinePlus size={20}/>
          <p>Create New Task</p>
        </button>
      </div>

      <div className="flex justify-between items-start w-full">
        <div className="lg:w-[68%] w-full lg:border-r border-[#EAECF0] lg:pr-5">
          <h2 className="font-semibold mb-4">
            {`${monthArr[now.getMonth()]} `}
            {now.getFullYear()}
          </h2>
          <div className="w-full bg-[#F9FAFB] p-3  lg:bg-transparent lg:p-0 overflow-scroll lg:overflow-hidden">
            <Days selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
          </div>
          <Todos
            setTodoObj={setTodoObj}
            setShowviewTodoModal={setShowviewTodoModal}
            selectedDay={selectedDay}
            setShowviewTodoModalMobile={setShowviewTodoModalMobile}
          />
        </div>
        <div
          className="w-[90%] lg:hidden !mx-auto rounded-lg py-2 px-3 bg-[#F9FAFB] border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] fixed left-[5%] bottom-4 flex justify-between items-center z-20"
          onClick={() => setShowaddTodoModalMobile(true)}
        >
          <p className="text-[#475467] leading-6">Input task</p>
          <BsFillMicFill className="text-[#3F5BF6]" size={25} />
        </div>
        <div className="w-[30%] hidden lg:flex justify-end flex-col items-end">
          {showAddTodoModal ? (
            <AddTodo
              setShowAddTodoModal={setShowAddTodoModal}
              type={type}
              setType={setType}
              todoObj={todoObj}
              setTodoObj={setTodoObj}
            />
          ) : showviewTodoModal ? (
            <ViewTodo
              setShowviewTodoModal={setShowviewTodoModal}
              setShowAddTodoModal={setShowAddTodoModal}
              todoObj={todoObj}
              setTodoObj={setTodoObj}
              setType={setType}
            />
          ) : (
            <CalendarComponent setSelectedDay={setSelectedDay} />
          )}
        </div>

        {showaddTodoModalMobile ? (
          <div className="fixed w-full h-screen bg-[#00000075] left-0 bottom-0 z-30 lg:hidden">
            <AddTodoMobile
              setShowAddTodoModal={setShowaddTodoModalMobile}
              type={type}
              setType={setType}
              todoObj={todoObj}
              setTodoObj={setTodoObj}

            />
          </div>
        ) : showviewTodoModalMobile ? (
          <div className="fixed w-full h-screen bg-[#00000075] left-0 bottom-0 z-30 lg:hidden">
          <ViewTodoModalMobile
              setShowviewTodoModal={setShowviewTodoModalMobile}
              setShowAddTodoModal={setShowaddTodoModalMobile}
              todoObj={todoObj}
              setTodoObj={setTodoObj}
              setType={setType}
          />
        </div>
        ):null}
      </div>
    </div>
  );
}
