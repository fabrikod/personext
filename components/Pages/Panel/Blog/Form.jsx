import Spacer from '@/components/Common/Spacer'
import AdminCreate from '@/components/Layout/Admin/Create'
import FileInput from '@/components/Layout/Admin/Inputs/FileInput'
import RichText from '@/components/Layout/Admin/Inputs/RichText'
import TextInput from '@/components/Layout/Admin/Inputs/TextInput'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useReducer } from 'react'

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return {
        ...state,
        [action.field]: action.value,
      }
    case 'UPDATE_ALL_INPUT':
      return {
        ...state,
        ...action.value,
      }
    default:
      return state
  }
}

export default function Form({
  actionButtonText,
  cancelButtonText,
  type,
  url,
}) {
  const [formState, dispatch] = useReducer(formReducer, {
    title: '',
    description: '',
    content: '',
    image: '',
  })

  const handleInputChange = (field, value) => {
    dispatch({ type: 'UPDATE_INPUT', field, value })
  }

  const router = useRouter()

  const fetchData = data => {
    console.log('dadads', data)
    dispatch({
      type: 'UPDATE_ALL_INPUT',
      value: {
        title: data.title,
        description: data.description,
        content: data.content,
        image: data.image,
      },
    })
  }

  return (
    <AdminCreate
      actionButtonText={actionButtonText || 'Save'}
      cancelButtonText={cancelButtonText || 'Cancel'}
      formData={formState}
      cancelUrl={'/panel/blogs'}
      detailUrl="/admin/blog/detail"
      unicData={router.query.slug}
      type="update"
      fetchData={fetchData}
    >
      <TextInput
        label={'Title'}
        onChange={e => handleInputChange('title', e.target.value)}
        value={formState.title}
        placeholder={
          '100 Days of Drawing — Learnings From an Artist Who Never Commits'
        }
      />
      <Spacer className="h-5" />
      <TextInput
        label={'Description'}
        onChange={e => handleInputChange('description', e.target.value)}
        value={formState.description}
        placeholder={
          'List of investors with a focus on revenue, featured by Abdullah Önden'
        }
      />
      <Spacer className="h-5" />
      <RichText
        label={'Content'}
        onChange={value => handleInputChange('content', value)}
        value={formState.content}
      />
      <Spacer className="h-5" />
      <FileInput
        label={'Image'}
        onChange={value => handleInputChange('image', value)}
        value={formState.image}
        type={'image/*'}
      />
    </AdminCreate>
  )
}
