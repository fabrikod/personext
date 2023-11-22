import { MENUS } from '@/constrait'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const menuToElement = {
  '/new-design#about': 'highlight',
  '/new-design#publications': 'publication',
  '/new-design#stacks': 'stack',
  '/new-design#projects': 'selected-project',
  '/new-design#contact': 'follow-me',
}

export default function NewNav({ className }) {
  const router = useRouter()

  useEffect(() => {
    if (menuToElement[router.asPath]) {
      const targetElement = document.getElementById(
        menuToElement[router.asPath]
      )

      document.querySelector('html').scroll({
        top: targetElement.offsetTop - 90,
        behavior: 'smooth',
      })
    }
  }, [router])

  return (
    <nav>
      <ul className={classNames('flex gap-2 text-primary-6', className)}>
        {MENUS.map((menu, index) => (
          <li key={index}>
            <Link
              className={classNames(
                'block rounded-full px-4 py-2 text-xs font-medium -tracking-wide',
                router.asPath === menu.href && 'bg-base-5'
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
