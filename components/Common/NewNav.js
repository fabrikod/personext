import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const MENUS = [
  { text: 'Home', href: '/new-design' },
  { text: 'About', href: '/new-design/#about' },
  { text: 'Publications', href: '/new-design/#pulications' },
  { text: 'Projects', href: '/new-design/#projects' },
  { text: 'Stack', href: '/new-design/#stack' },
  { text: 'Contact', href: '/new-design/#contact' },
]

export default function NewNav() {
  const router = useRouter()

  return (
    <nav>
      <ul className="flex gap-2 text-primary-6">
        {MENUS.map((menu, index) => (
          <li key={index}>
            <Link
              className={classNames(
                'block rounded-full px-4 py-2 text-xs font-medium -tracking-wide',
                router.pathname === menu.href && 'bg-base-5'
              )}
              href={menu.href}
            >
              {menu.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
