import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import { Save } from '@/components/Icons'
import apiClient from '@/utils/axios'
import { useEffect } from 'react'

export default function Create({
  title,
  children,
  actionButtonText = 'Save',
  cancelButtonText = 'Cancel',
  actionAndReturnButtonText = 'Save and Return',
  file,
  form,
  fetchData,
  url,
  id,
  type,
}) {
  const handleOnSubmit = async e => {
    e?.preventDefault()
    let data = null
    if (!file) {
      data = {
        data: {
          slug: form.slug.split('/')[1],
          ...form,
        },
      }
    } else {
      const formData = new FormData()

      for (const [key, value] of Object.entries(form)) {
        if (key === 'slug') {
          formData.append(key, value.split('/')[1])
          continue
        }
        formData.append(key, value)
      }

      data = formData
    }

    const headers = {
      'Content-Type': file ? 'multipart/form-data' : 'application/json',
    }

    id ? update(data, headers) : create(data, headers)
  }

  const create = async (data, headers) => {
    const blogs = await apiClient.post(`/admin/${url}/create`, data, {
      headers,
    })
  }

  const update = async (data, headers) => {
    const blogs = await apiClient.post(
      `/admin/${url}/update`,
      { id, ...data },
      {
        headers,
      }
    )
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

  const handleUpdateAndReturnSubmit = async () => {
    handleOnSubmit()
  }

  useEffect(() => {
    if (type === 'update' && Boolean(id)) {
      fetchDataDetail()
    }
  }, [type, id])

  return (
    <>
      <div className="mb-7">
        <div>{title && <h1 className="text-4xl font-bold">{title}</h1>}</div>
      </div>
      <NewCard className="!w-full px-5 py-6">
        <form onSubmit={handleOnSubmit}>
          {children}

          <div className="mt-7 flex justify-end gap-3">
            <NewChip
              as="link"
              href={`/panel/${url}`}
              className="inline-flex items-center gap-2 rounded-md bg-lineer-light px-3 text-sm"
            >
              {cancelButtonText}
            </NewChip>
            {actionAndReturnButtonText && (
              <NewChip
                as="button"
                onClick={handleUpdateAndReturnSubmit}
                className="inline-flex items-center gap-2 rounded-md bg-lineer-light px-3 text-sm"
              >
                {actionAndReturnButtonText}
              </NewChip>
            )}

            <NewChip
              as="button"
              className="inline-flex items-center gap-2 rounded-md bg-lineer-light px-3 text-sm"
              type="submit"
            >
              <Save /> {actionButtonText}
            </NewChip>
          </div>
        </form>
      </NewCard>
    </>
  )
}
