import Spacer from '@/components/Common/Spacer'
import AdminCreate from '@/components/Layout/Admin/Create'
import FileInput from '@/components/Layout/Admin/Inputs/FileInput'
import RichText from '@/components/Layout/Admin/Inputs/RichText'
import TextInput from '@/components/Layout/Admin/Inputs/TextInput'
import AdminLayout from '@/layouts/AdminLayout'
import { useEffect, useState } from 'react'

export default function create() {
  const [content, setContent] = useState('')

  return (
    <AdminLayout title="Blogs">
      <AdminCreate actionButtonText="Save">
        <TextInput
          label={'Title'}
          placeholder={
            '100 Days of Drawing — Learnings From an Artist Who Never Commits'
          }
        />
        <Spacer size={'5'} />
        <TextInput
          label={'Description'}
          placeholder={
            'List of investors with a focus on revenue, featured by Abdullah Önden'
          }
        />
        <Spacer size={'5'} />
        <RichText label={'Content'} value={setContent} />
        <Spacer size={'5'} />
        <FileInput label={'Image'} type={'image/*'} />
      </AdminCreate>
    </AdminLayout>
  )
}
