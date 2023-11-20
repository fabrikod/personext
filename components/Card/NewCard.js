import classNames from 'classnames'
import React from 'react'

export default function NewCard({ className, children }) {
  return (
    <div
      className={classNames(
        'rounded-[20px] border-[1px] border-primary-1 bg-base-2 p-9',
        className
      )}
    >
      {children}
    </div>
  )
}
