import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import { Save } from '@/components/Icons'
import apiClient from '@/utils/axios'
import { useEffect } from 'react'

export default function Create({
  children,
  actionButtonText,
  cancelButtonText,
  updateAndReturnButtonText,
  formData,
  fetchData,
  url,
  id,
  type,
}) {
  const handleOnSubmit = async e => {
    e.preventDefault()
    const blogs = await apiClient.post(`/admin/${url}/update`, {
      data: {
        id: id,
        ...formData,
      },
    })
  }

  const fetchDataDetail = async () => {
    const blogs = await apiClient.get(`/admin/${url}/detail`, {
      params: {
        id: id,
      },
    })

    if (blogs.data) {
      fetchData(blogs.data)
    }
  }

  const handleUpdateAndReturnSubmit = () => {}

  useEffect(() => {
    if (type === 'update' && Boolean(id)) {
      fetchDataDetail()
    }
  }, [type, id])

  return (
    <NewCard className="!w-full px-5 py-6">
      <form onSubmit={handleOnSubmit}>
        {children}

        <div className="mt-7 flex justify-end gap-3">
          {updateAndReturnButtonText && (
            <NewChip
              as="button"
              onClick={handleUpdateAndReturnSubmit}
              className="inline-flex items-center gap-2 rounded-md bg-lineer-light px-3 text-sm"
            >
              {updateAndReturnButtonText}
            </NewChip>
          )}

          <NewChip
            as="link"
            href={`/panel/${url}`}
            className="inline-flex items-center gap-2 rounded-md bg-lineer-light px-3 text-sm"
          >
            {cancelButtonText}
          </NewChip>
          <NewChip
            as="button"
            className="inline-flex items-center gap-2 rounded-md bg-lineer-light px-3 text-sm"
          >
            <Save /> {actionButtonText}
          </NewChip>
        </div>
      </form>
    </NewCard>
  )
}
