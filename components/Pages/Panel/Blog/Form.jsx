import Spacer from '@/components/Common/Spacer'
import AdminCreate from '@/components/Layout/Admin/Create'
import FileInput from '@/components/Layout/Admin/Inputs/FileInput'
import RichText from '@/components/Layout/Admin/Inputs/RichText'
import TextInput from '@/components/Layout/Admin/Inputs/TextInput'
import { useReducer } from 'react'

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return {
        ...state,
        [action.field]: action.value,
      }
    default:
      return state
  }
}

export default function Form() {
  const [formState, dispatch] = useReducer(formReducer, {
    title: '',
    description: '',
    content: '',
  })

  const handleInputChange = (field, value) => {
    dispatch({ type: 'UPDATE_INPUT', field, value })
  }

  return (
    <AdminCreate actionButtonText="Save" formData={formState}>
      <TextInput
        label={'Title'}
        value={e => handleInputChange('title', e.target.value)}
        placeholder={
          '100 Days of Drawing — Learnings From an Artist Who Never Commits'
        }
      />
      <Spacer className="h-5" />
      <TextInput
        value={e => handleInputChange('description', e.target.value)}
        label={'Description'}
        placeholder={
          'List of investors with a focus on revenue, featured by Abdullah Önden'
        }
      />
      <Spacer className="h-5" />
      <RichText
        label={'Content'}
        value={value => handleInputChange('content', value)}
      />
      <Spacer className="h-5" />
      <FileInput
        label={'Image'}
        value={value => handleInputChange('image', value)}
        type={'image/*'}
      />
    </AdminCreate>
  )
}
