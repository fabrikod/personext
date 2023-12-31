import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function BlogsCard({ data, className }) {
  const [contentState, setContentState] = useState(data.content)

  useEffect(() => {
    if (process.browser) {
      const doc = new DOMParser().parseFromString(data.content, 'text/html')

      setContentState(
        data.description ||
          (doc.body.textContent.length > 150
            ? `${doc.body.textContent.substring(0, 150)}...`
            : doc.body.textContent) ||
          data.content
      )
    }
  }, [])

  return (
    <div
      className={classNames(
        'flex gap-6 border-t border-solid border-primary-1 px-9 py-4 dark:border-darkmode-border max-xs:flex-col',
        className
      )}
    >
      {data.image && (
        <div className="relative w-[129px] shrink-0 max-xs:aspect-square max-xs:w-full sm:h-[108px]">
          <Image
            fill
            src={data.image}
            className="rounded-lg object-cover"
            alt=""
          />
        </div>
      )}
      <div>
        <h3 className="text-base font-semibold dark:text-darkmode-title">
          <Link href={data.slug}>{data.title}</Link>
        </h3>

        <p className="mt-2 text-sm font-normal text-primary-6 dark:text-darkmode-text">
          {contentState}
        </p>
      </div>
    </div>
  )
}
