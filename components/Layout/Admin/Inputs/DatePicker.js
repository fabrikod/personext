import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function DatePickerInput({ id, label, value, ...props }) {
  return (
    <div className="inline-flex flex-col items-start">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <DatePicker
        id={id}
        selected={value}
        popperClassName="duration-0"
        className="mt-1 h-[2.4rem] w-full rounded-md border border-primary-1 pl-3 text-xs outline-none placeholder:text-xs placeholder:font-medium placeholder:text-input"
        {...props}
      />
    </div>
  )
}
