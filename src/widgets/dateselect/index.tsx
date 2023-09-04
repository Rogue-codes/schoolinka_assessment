/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendar4Event } from 'react-icons/bs';

interface DateSelectProps {
    className?: string,
    onChange?: (e: Date | null) => any,
    placeholderText?: string,
    selected? : Date | null,
    minDate? : Date,
    style?: React.CSSProperties,
    disbaled? : boolean,
    nullValuePlaceHolder? : string
}
export default function DateSelect(
    {
        className="",
        onChange,
        placeholderText,
        selected,
        minDate,
        style,
        disbaled=false,
        nullValuePlaceHolder=""
    }: DateSelectProps
) {
    const CustomInput = React.forwardRef(({value, onClick, onChange} : any, ref : any) => {
        return <div onClick={onClick}
                className={"flex item-center items-center border  " + className + (disbaled ? " opacity-80" : ' hover:border-[#B0BACA]')} style={style}  >
            <BsCalendar4Event color="#627496" size="20" className='mr-2 -ml-1'/>
            <input 
                className='disabled:cursor-not-allowed focus:outline-none w-full placeholder:text-blue-11 text-blue-11 bg-transparent'
                value={value ? value : nullValuePlaceHolder}
                onChange={onChange}
                placeholder={placeholderText}
                ref={ref}
                // disabled={disbaled}
            />
        </div>
    })
    return <div>
        <DatePicker
            customInput={<CustomInput />}
            selected={selected}
            onChange={(e) => onChange && onChange(e)}
            minDate={minDate}
            // disabled={disbaled}
        />
    </div>
}