import React from 'react'

export default function ComponentHeader({ title, description }) {
  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold ">{title}</h2>
        <p className="mt-2 text-sm font-normal text-primary-6">{description}</p>
      </div>
    </div>
  )
}