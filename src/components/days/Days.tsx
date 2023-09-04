/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { TodoOptions } from "../../types";

interface DaysProps{
  selectedDay: Date | null
  setSelectedDay:React.Dispatch<React.SetStateAction<Date | null>>
}
export default function Days({selectedDay,setSelectedDay}:DaysProps) {
  const currentDate = new Date();
  const numberOfDays = 11;
  // Calculate the dates for the next 11 days
  const dates = Array.from({ length: numberOfDays }, (_, index) => {
    const date = new Date();
    date.setDate(currentDate.getDate() + index);
    return date;
  });

  // Define an array of day names
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // const [selectedDay, setSelectedDay] = useState<Date | null>(null);

  // Function to handle day selection
  const handleDayClick = (date: Date) => {
    setSelectedDay(date);
  };

  // Set the selected day to the current date upon initialization
  useEffect(() => {
    setSelectedDay(currentDate);
  }, []);

  const todos = useSelector((state:any)=>state.todo.todos)

  const getTodosForDate = (date: Date) => {
    return todos.filter((todo: TodoOptions) => {
      const todoDate = new Date(todo.date);
      return (
        todoDate.getDate() === date.getDate() &&
        todoDate.getMonth() === date.getMonth() &&
        todoDate.getFullYear() === date.getFullYear()
      );
    });
  };

  console.log(selectedDay)

  return (
    <div className="flex justify-between items-center lg:min-w-full min-w-[350%]">
      {dates.map((date, index) => (
        <div
          key={index}
          className={` ${
            selectedDay?.getDate() === date.getDate()
              ? "bg-primary text-white"
              : ""
          } ${getTodosForDate(date).length > 0 && "border-b-2 border-primary"} border border-[#D0D5DD] py-[5px] rounded-lg  w-14 flex justify-center items-center flex-col gap-2 cursor-pointer`}
          onClick={() => handleDayClick(date)}
        >
          <p>{dayNames[date.getDay()]}</p>
          <p>{date.getDate()}</p>
          {/* {getTodosForDate(date).length > 0 && (<p>📌</p>)} */}
        </div>
      ))}
    </div>
  );
}
