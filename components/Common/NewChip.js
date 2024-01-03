import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

export default function NewChip({
  as = 'div',
  children,
  className,
  onClick,
  ...props
}) {
  const handleOnClick = () => {
    onClick()
  }

  if (as === 'link') {
    return (
      <Link
        className={classNames(
          'rounded-full border-[1px] border-solid border-primary-1 p-2 dark:border-darkmode-border dark:text-darkmode-chip',
          className
        )}
        {...props}
      >
        {children}
      </Link>
    )
  }

  return React.createElement(
    as,
    {
      className: classNames(
        'rounded-full border-[1px] border-solid border-primary-1 p-2 dark:border-darkmode-border dark:text-darkmode-chip',
        className
      ),
      onClick: onClick ? handleOnClick : null,
      ...props,
    },
    children
  )
}
