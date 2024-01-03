import PanelBlogList from '@/components/Pages/Panel/Blog/List'
import AdminLayout from '@/layouts/AdminLayout'

export default function index() {
  return (
    <AdminLayout>
      <PanelBlogList title={'Blogs'} />
    </AdminLayout>
  )
}
