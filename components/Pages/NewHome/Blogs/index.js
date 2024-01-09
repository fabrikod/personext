import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import React, { useEffect, useState } from 'react'
import BlogsCard from './BlogsCard'
import ComponentHeader from '../ComponentHeader'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default function Blogs({
  data,
  getMoreBlogData,
  isBlogLoading,
  blogMeta,
  title,
  description,
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex + 1)
    }, 50)

    if (currentIndex === data.length) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [currentIndex, data.length])

  return (
    <NewCard className="px-0" id="blogs" data-name="Blogs">
      <div className="px-9">
        <ComponentHeader title={title} description={description} />
      </div>

      <div className="mt-10 flex flex-col">
        {data.slice(0, currentIndex).map((blog, index) => (
          <BlogsCard
            key={index}
            data={blog}
            className={classNames(
              'button dark:dark-button animate-fade-in-out dark:bg-darkmode-base-1',
              index === data.length - 1 && 'border-b'
            )}
          />
        ))}
      </div>

      <NewChip
        as="button"
        disabled={blogMeta.pageCount <= blogMeta.page}
        onClick={getMoreBlogData}
        className={classNames(
          'button relative ml-11 mt-9 flex gap-2 px-4 py-1 text-xs text-primary-6 disabled:opacity-50 dark:bg-lineer-nav-link',
          isBlogLoading && 'pr-9'
        )}
      >
        View All Posts
        <div
          className={classNames(
            'loading visible absolute right-2 z-20 border-base-2 border-t-primary-6 opacity-0',
            isBlogLoading && '!visible opacity-100'
          )}
        />
      </NewChip>
    </NewCard>
  )
}

Blogs.propTypes = {
  data: PropTypes.array.isRequired,
}
