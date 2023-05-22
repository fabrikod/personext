import React from 'react'

export default function Chip({ children, className }) {
  return (
    <div className={`
      bg-base-3 
      rounded-[30px] 
      py-4 
      text-sm 
      px-7 
      inline-flex 
      gap-x-7 
      cursor-pointer 
      ${className}
    `}>
      {children}
    </div>
  )
}
