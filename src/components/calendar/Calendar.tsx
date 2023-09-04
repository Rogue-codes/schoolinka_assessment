/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CalendarProps {
  setSelectedDay: React.Dispatch<React.SetStateAction<Date | null>>;
}

export default function CalendarComponent({ setSelectedDay }: CalendarProps) {
  const [value, onChange] = useState<Value>(new Date());

  const handleChange = (value: any) => {
    setSelectedDay(value);
  };

  useEffect(() => {
    handleChange(value);
  }, [value, onChange]);



  // Function to add 'weekend-day' class to weekend days
  

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    const currentDate = new Date();
  
    // Check if the date is a weekend day (Saturday or Sunday)
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;

    if (view === 'month') {
      if (
        date.getDate() === currentDate.getDate() &&
        date.getMonth() === currentDate.getMonth() &&
        date.getFullYear() === currentDate.getFullYear()
      ) {
        // Style the current day
        return "border-4 bg-[#3F5BF6] rounded-full p-3 text-white border-blue-600";
      } else if (isWeekend) {
        // Style weekend days with a blue background
        return 'text-[#3F5BF6]';
      }
    }
    return null;
  };

  return (
    <Calendar
      onChange={onChange}
      // className={" !text-[#344054] p-4 rounded-lg"}
      className="border-none rounded-lg py-12 px-6 shadow-[rgba(50,50,93,0.25)_0px_13px_27px_-5px,_rgba(0,0,0,0.3)_0px_8px_16px_-8px]" // Remove the default border
      value={value}
      // tileClassName={tileClassName}
      tileClassName={tileClassName}
    />
  );
}
