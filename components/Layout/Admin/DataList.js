import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import { PanelDelete, PanelEdit } from '@/components/Icons'
import classNames from 'classnames'

export default function DataList({
  url,
  data = [],
  columns = [],
  className,
  itemClassName,
  children,
  action,
  title,
  createActionText,
  createAction,
}) {
  return (
    <>
      <div className="mb-7 flex justify-between">
        <div>{title && <h1 className="text-4xl font-bold">{title}</h1>}</div>
        <div>
          {createAction ? (
            createAction
          ) : (
            <NewChip
              href={`/panel/${url}/create`}
              as="link"
              className="inline-flex items-center gap-2 rounded-md bg-lineer-light px-3 text-sm capitalize"
            >
              Create New {url}
            </NewChip>
          )}
        </div>
      </div>
      <NewCard className={classNames('!w-full', className)}>
        {children
          ? children
          : data.length &&
            data.map(dataItem => (
              <div
                className={classNames(
                  'flex justify-between gap-6 border-t border-solid border-primary-1 px-9 py-4 dark:border-darkmode-border max-xs:flex-col',
                  itemClassName
                )}
              >
                <div>
                  {columns.map(column => (
                    <div
                      className="flex"
                      onClick={() =>
                        console.log('item1item1item1', dataItem[column.id])
                      }
                    >
                      {Object.keys(dataItem).includes(column.id) && (
                        <>
                          <div className="min-w-[7rem]">{column.name}</div>:
                          <div className="break-all">{dataItem[column.id]}</div>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                <div className="">
                  {action ? (
                    action
                  ) : (
                    <div className="gap flex h-full items-center gap-2">
                      <div className="cursor-pointer rounded-md border border-primary-1 bg-lineer-light px-1 py-1 font-bold">
                        <PanelDelete />
                      </div>
                      <div className="cursor-pointer rounded-md border border-primary-1 bg-lineer-light px-1 py-1 ">
                        <PanelEdit />
                      </div>
                    </div>
                  )}
                </div>
                {/* {Object.entries(dataItem).map(([key, value]) => (
                <div
                  className="flex"
                  onClick={() => console.log('item1item1item1', item2)}
                >
                  <div className="w-24">{key}</div>: {JSON.stringify(value)}
                </div>
              ))} */}
                {/* {dataItem.image && (
              <div className="relative w-[129px] shrink-0 max-xs:aspect-square max-xs:w-full sm:h-[108px]">
                <Image
                  fill
                  src={dataItem.image}
                  className="rounded-lg object-cover"
                  alt=""
                />
              </div>
            )}
            <div>
              <h3 className="text-base font-semibold dark:text-darkmode-title">
                {dataItem.title}
              </h3>

              <p className="mt-2 text-sm font-normal text-primary-6 dark:text-darkmode-text">
                {dataItem.description}
              </p>
            </div> */}
              </div>
            ))}
      </NewCard>
    </>
  )
}
