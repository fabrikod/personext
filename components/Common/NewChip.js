import classNames from 'classnames'
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

  return React.createElement(
    as,
    {
      className: classNames(
        'rounded-full border-[1px] border-solid border-primary-1 p-2',
        className
      ),
      onClick: handleOnClick,
      ...props,
    },
    children
  )
}
