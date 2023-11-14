import classNames from 'classnames'
import React from 'react'

export default function Chip({ children, className, onClick }) {
  const handleClick = () => {
    onClick && onClick()
  }

  return (
    <div
      onClick={handleClick}
      className={classNames(
        'inline-flex',
        'cursor-pointer',
        'flex-wrap',
        'gap-7',
        'rounded-[30px]',
        'bg-base-3',
        'px-4',
        'py-4',
        'sm:text-sm',
        'text-xs',
        className,
        'duration-500',
        'hover:bg-gray-200'
      )}
    >
      {children}
    </div>
  )
}
