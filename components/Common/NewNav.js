import { MENUS } from '@/constrait'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function NewNav({ className }) {
  const router = useRouter()
  const [activeMenu, setActiveMenu] = useState()
  const [menuList, setMenuList] = useState([])

  useEffect(() => {
    setActiveMenu(router.asPath)
  }, [router])

  useEffect(() => {
    if (router.pathname === '/') {
      // const sections = document.querySelectorAll(
      //   '#stacks,#highlights,#publications,#selected-projects,#follow-me,#web-header'
      // )

      // const handleScroll = () => {
      //   const scrollPosition = window.scrollY

      //   sections.forEach(section => {
      //     const sectionTop = section.offsetTop
      //     const sectionHeight = section.clientHeight

      //     if (
      //       scrollPosition >= sectionTop &&
      //       scrollPosition < sectionTop + sectionHeight
      //     ) {
      //       const id = section.getAttribute('id')
      //       setActiveMenu(id !== 'web-header' ? `#${id}` : '/')
      //       window.history.replaceState(
      //         null,
      //         null,
      //         id !== 'web-header' ? `#${id}` : '/'
      //       )
      //     }
      //   })
      // }

      // window.addEventListener('scroll', handleScroll)

      const sectionList = document.querySelectorAll('#container > div')
      setMenuList(
        [...sectionList].map(element => ({
          href: `/#${element.getAttribute('id')}`,
          text: element.getAttribute('data-name'),
        }))
      )

      return () => {
        // window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <nav id="nav-menu">
      <ul className={classNames('flex gap-2 text-primary-6', className)}>
        <Link
          className={classNames(
            'block rounded-full border border-transparent px-4 py-2 text-xs font-medium -tracking-wide dark:text-darkmode-text',
            activeMenu === '/' &&
              'bg-base-5 dark:border-darkmode-border dark:bg-darkmode-base-1 dark:bg-lineer-nav-link'
          )}
          href="/"
        >
          Home
        </Link>
        {menuList.slice(0, 4).map((menu, index) => (
          <li key={index}>
            <Link
              className={classNames(
                'block rounded-full border border-transparent px-4 py-2 text-xs font-medium -tracking-wide dark:text-darkmode-text',
                activeMenu === menu.href &&
                  'bg-base-5 dark:border-darkmode-border dark:bg-darkmode-base-1 dark:bg-lineer-nav-link'
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
