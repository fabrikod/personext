import ProfilePhoto from '@/components/Common/ProfilePhoto'
import { World } from '@/components/Icons'
import { useUser } from '@/context/user'
import Link from 'next/link'

export default function Side() {
  const { user } = useUser()
  return (
    <div className="sticky top-0 flex h-screen w-full flex-col items-center border-r border-primary-1 bg-white p-7">
      <div className="flex flex-col items-center">
        <ProfilePhoto src={user.image} />

        <h2 className="text-center text-base font-semibold">{user.fullName}</h2>
        <span className="mt-1.5 flex items-center gap-1 text-sm">
          <World /> View Site
        </span>
      </div>

      <div className="mt-7 w-[9.9rem]">
        <ul className="w-f">
          <li>
            <Link
              href="/panel/blog"
              className="block rounded-md bg-panel-menu px-2 py-2 text-sm text-black"
            >
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
