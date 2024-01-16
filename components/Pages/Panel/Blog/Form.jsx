import Spacer from '@/components/Common/Spacer'
import AdminCreate from '@/components/Layout/Admin/Create'
import DatePicker from '@/components/Layout/Admin/Inputs/DatePicker'
import FileInput from '@/components/Layout/Admin/Inputs/FileInput'
import RichText from '@/components/Layout/Admin/Inputs/RichText'
import TextInput from '@/components/Layout/Admin/Inputs/TextInput'
import { parseSlug } from '@/helpers/client.converter'
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
  actionAndReturnButtonText,
  type,
  url,
}) {
  const router = useRouter()

  const [formState, dispatch] = useReducer(formReducer, {
    title: '',
    description: '',
    content: '',
    image: '',
    slug: '',
    publishedAt: '',
  })

  const handleInputChange = (field, value) => {
    dispatch({ type: 'UPDATE_INPUT', field, value })
  }

  useEffect(() => {
    console.log('asdasdformState', formState)
  }, [formState])

  useEffect(() => {
    handleInputChange('slug', `/${parseSlug(formState.title)}`)
  }, [formState.title])

  const fetchData = data => {
    dispatch({
      type: 'UPDATE_ALL_INPUT',
      value: {
        title: data.title,
        description: data.description,
        content: data.content,
        image: data.image,
        slug: data.slug,
        publishedAt: new Date(data.publishedAt),
      },
    })
  }

  return (
    <AdminCreate
      actionButtonText={actionButtonText}
      actionAndReturnButtonText={actionAndReturnButtonText}
      form={formState}
      url={'blog'}
      title={'Blogs'}
      id={router.query.id}
      file={true}
      type={type}
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
        label={'Slug'}
        onChange={e => handleInputChange('slug', e.target.value)}
        value={formState.slug}
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
      <Spacer className="h-5" />
      <DatePicker
        label="Published Date"
        locale="pt-BR"
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
        value={formState.publishedAt}
        onChange={value => handleInputChange('publishedAt', value)}
      />
    </AdminCreate>
  )
}
