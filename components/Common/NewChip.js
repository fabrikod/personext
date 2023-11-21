import classNames from 'classnames'
import React, { useEffect, useMemo, useState } from 'react'

export default function NewChip({
  as = 'div',
  children,
  className,
  onClick,
  ...props
}) {
  const [propsList, setPropsList] = useState({})

  const handleOnClick = () => {
    onClick()
  }

  useEffect(() => {
    setPropsList({
      className: classNames(
        'rounded-full border-[1px] border-solid border-primary-1 p-2',
        className
      ),
      ...props,
    })

    if (onClick) {
      setPropsList(prev => ({
        onClick: handleOnClick,
        ...prev,
      }))
    }
  }, [])

  return React.createElement(as, propsList, children)
}
