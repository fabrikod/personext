import classNames from 'classnames'
import React from 'react'

export default function NewCard({ className, children, ...props }) {
  return (
    <div
      className={classNames(
        'dark:bg-darkmode-base-2 rounded-[20px] border-[1px] border-primary-1 bg-base-2 p-9',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
