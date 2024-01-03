import PanelBlogForm from '@/components/Pages/Panel/Blog/Form'
import AdminLayout from '@/layouts/AdminLayout'

export default function edit() {
  return (
    <AdminLayout title="Blogs">
      <PanelBlogForm actionButtonText="Update" />
    </AdminLayout>
  )
}
