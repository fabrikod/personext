import Image from 'next/image'
import React from 'react'

export default function StackCard() {
  return (
    <div className="inline-flex">
      <div className="relative h-10 w-10">
        <Image src="/img/app-1.png" fill />
      </div>

      <div className="ml-2">
        <h3 className="text-base font-semibold">Stack</h3>
        <span className="-mt-0.5 block text-xs font-normal text-primary-6">
          Design Tool
        </span>
      </div>
    </div>
  )
}
