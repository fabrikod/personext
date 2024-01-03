import PanelBlogForm from '@/components/Pages/Panel/Blog/Form'
import AdminLayout from '@/layouts/AdminLayout'

export default function create() {
  return (
    <AdminLayout title="Blogs">
      <PanelBlogForm />
    </AdminLayout>
  )
}
