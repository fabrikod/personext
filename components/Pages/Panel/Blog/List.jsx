import { PanelDelete, PanelEdit } from '@/components/Icons'
import AdminDataList from '@/components/Layout/Admin/DataList'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

const PERPAGE = 10

export default function List({ title }) {
  const [blogs, setBlogs] = useState([])
  const adminDataListRef = useRef()

  const handleDelete = async id => {
    adminDataListRef.current.deleteData(id)
  }

  const getBlog = ({ data }) => {
    setBlogs(
      data.map(blog => {
        const doc = new DOMParser().parseFromString(blog.content, 'text/html')
        return {
          ...blog,
          content:
            doc.body.textContent.length > 150
              ? `${doc.body.textContent.substring(0, 150)}...`
              : doc.body.textContent,
        }
      })
    )
  }

  return (
    <>
      <AdminDataList
        className="!p-0"
        title={'Blogs'}
        url="blog"
        perPage={PERPAGE}
        getDataList={getBlog}
        isPaginage={true}
        ref={adminDataListRef}
      >
        {blogs.map((data, index) => (
          <div
            key={index}
            className={classNames(
              'flex items-center  justify-between gap-6 border-t border-solid border-primary-1 px-9 py-4 first:border-t-0 dark:border-darkmode-border max-xs:flex-col'
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
                {data.title}
              </h3>

              <p className="mt-2 text-sm font-normal text-primary-6 dark:text-darkmode-text">
                {data.content}
              </p>
            </div>

            <div className="flex h-full gap-2">
              <div
                className="cursor-pointer rounded-md border border-primary-1 bg-lineer-light px-1 py-1 font-bold"
                onClick={() => handleDelete(data.id)}
              >
                <PanelDelete />
              </div>
              <Link
                href={{
                  pathname: '/panel/blog/[id]/edit',
                  query: { id: data.id },
                }}
              >
                <div className="cursor-pointer rounded-md border border-primary-1 bg-lineer-light px-1 py-1">
                  <PanelEdit />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </AdminDataList>
      {/* <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={pageChanged}
          pageRangeDisplayed={5}
          pageCount={meta.pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagination mt-10 flex flex-wrap justify-center gap-4 gap-y-7"
        />
      </div> */}
    </>
  )
}
