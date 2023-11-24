import { MENUS } from '@/constrait'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function NewNav({ className }) {
  const router = useRouter()
  const [activeMenu, setActiveMenu] = useState()

  useEffect(() => {
    setActiveMenu(router.asPath)
  }, [router])

  useEffect(() => {
    const sections = document.querySelectorAll(
      '#stacks,#highlights,#publications,#selected-projects,#follow-me,#web-header'
    )

    const handleScroll = () => {
      const scrollPosition = window.scrollY

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          const id = section.getAttribute('id')
          setActiveMenu(
            id !== 'web-header' ? `${router.pathname}#${id}` : '/new-design'
          )
          window.history.replaceState(
            null,
            null,
            id !== 'web-header' ? `#${id}` : '/new-design'
          )
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav id="nav-menu">
      <ul className={classNames('flex gap-2 text-primary-6', className)}>
        {MENUS.map((menu, index) => (
          <li key={index}>
            <Link
              className={classNames(
                'dark:text-darkmode-text block rounded-full border border-transparent px-4 py-2 text-xs font-medium -tracking-wide',
                activeMenu === menu.href &&
                  'dark:bg-lineer-nav-link dark:border-darkmode-border dark:bg-darkmode-base-1 bg-base-5'
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
