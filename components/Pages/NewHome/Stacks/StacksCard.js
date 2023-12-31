import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

export default function StackCard({ data, className }) {
  return (
    <div className={classNames('inline-flex', className)}>
      <div className="relative h-10 w-10">
        <Image
          src={data.image}
          fill
          alt=""
          className="rounded-lg object-cover"
        />
      </div>

      <div className="ml-2 flex items-center">
        <h3 className="text-base font-semibold dark:text-darkmode-title">
          {data.name}
        </h3>
        {/* <span className="-mt-0.5 block text-xs font-normal text-primary-6 dark:text-darkmode-text">
          Design Tool
        </span> */}
      </div>
    </div>
  )
}
