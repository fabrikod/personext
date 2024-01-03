import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import { Save } from '@/components/Icons'
import apiClient from '@/utils/axios'
import { useEffect } from 'react'

export default function Create({
  children,
  actionButtonText,
  cancelButtonText,
  formData,
  fetchData,
  cancelUrl,
  detailUrl,
  unicData,
  type,
}) {
  const handleOnSubmit = async e => {
    e.preventDefault()

    console.log('formDataformData', formData)
  }

  const fetchDataDetail = async () => {
    const blogs = await apiClient.get(detailUrl, {
      params: {
        unicData: unicData.split('/')[1],
      },
    })

    if (blogs.data) {
      fetchData(blogs.data)
    }
  }

  useEffect(() => {
    if (type === 'update' && Boolean(unicData)) {
      fetchDataDetail()
    }
  }, [type, unicData])

  return (
    <NewCard className="!w-full px-5 py-6">
      <form onSubmit={handleOnSubmit}>
        {children}

        <div className="mt-7 flex justify-end gap-3">
          <NewChip
            as="link"
            href={cancelUrl}
            className="inline-flex items-center gap-2 rounded-md bg-lineer-light px-3"
          >
            {cancelButtonText}
          </NewChip>
          <NewChip
            as="button"
            className="inline-flex items-center gap-2 rounded-md bg-lineer-light px-3"
          >
            <Save /> {actionButtonText}
          </NewChip>
        </div>
      </form>
    </NewCard>
  )
}
