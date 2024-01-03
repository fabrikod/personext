import Side from '@/components/Layout/Admin/Side'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function AdminLayout({ children }) {
  return (
    <div className="flex bg-base-4">
      <div className="w-full max-w-[15rem]">
        <Side />
      </div>

      <div className="w-full max-w-3xl p-7 pt-12">
        <button onClick={() => signOut()}>cikis yap</button>
        <div>{children}</div>
      </div>
    </div>
  )
}
