import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

export default function BlogsCard({ className }) {
  return (
    <div
      className={classNames(
        'flex gap-6 border-t border-solid border-primary-1 px-9 py-4',
        className
      )}
    >
      <div className="relative h-[108px] w-[129px] shrink-0">
        <Image fill src="/img/blog-post-1.png" alt="" />
      </div>
      <div>
        <h3 className="text-base font-semibold ">
          100 Days of Drawing — Learnings From an Artist Who Never Commits
        </h3>

        <p className="mt-2 text-sm font-normal text-primary-6">
          List of investors with a focus on revenue, featured by Abdullah Önden
        </p>
      </div>
    </div>
  )
}
