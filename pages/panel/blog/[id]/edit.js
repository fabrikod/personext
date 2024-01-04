import PanelBlogForm from '@/components/Pages/Panel/Blog/Form'
import AdminLayout from '@/layouts/AdminLayout'

export default function edit() {
  return (
    <AdminLayout>
      <PanelBlogForm
        type="update"
        actionButtonText="Update"
        actionAndReturnButtonText="Update and Return"
      />
    </AdminLayout>
  )
}
