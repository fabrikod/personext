import NewChip from '@/components/Common/NewChip'
import { Mail, Theme } from '@/components/Icons'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const MENUS = [
  { text: 'Home', href: '/new-design' },
  { text: 'About', href: '/about' },
  { text: 'Publications', href: '/pulications' },
  { text: 'Projects', href: '/projects' },
  { text: 'Stack', href: '/stack' },
  { text: 'Contact', href: '/contact' },
]

export default function NewAppLayout({ children }) {
  const router = useRouter()

  return (
    <>
      <header className="flex h-20 items-center justify-center bg-base-2 font-ibm-plex-sans">
        <div className="flex min-w-[555px] gap-x-14">
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
          <div className="flex gap-3">
            <NewChip as="a" href="#" className="flex items-center">
              <Mail />
            </NewChip>

            <NewChip as="button">
              <Theme />
            </NewChip>
          </div>
        </div>
      </header>
      <main className="h-screen bg-base-4 font-ibm-plex-sans">{children}</main>
    </>
  )
}
