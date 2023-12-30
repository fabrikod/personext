import AdminLayout from '@/layouts/admin/AdminLayout'
import { getSession } from 'next-auth/react'

export default function index() {
  return <AdminLayout></AdminLayout>
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}
