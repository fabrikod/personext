import { MENUS } from '@/constrait'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import NewChip from './NewChip'
import NewCard from '../Card/NewCard'

const MENUCOUNT = 4

export default function NewNav({ className }) {
  const router = useRouter()
  const [activeMenu, setActiveMenu] = useState()
  const [menuList, setMenuList] = useState([])
  const [isMoreMenu, setIsMoreMenu] = useState(false)

  useEffect(() => {
    setActiveMenu(router.asPath)
    setIsMoreMenu(false)
  }, [router])

  useEffect(() => {
    if (router.pathname === '/') {
      const sectionList = document.querySelectorAll('#container > div')
      setMenuList(
        [...sectionList]
          .filter(element => element.getAttribute('id') !== 'profile')
          .map(element => ({
            href: `/#${element.getAttribute('id')}`,
            text: element.getAttribute('data-name'),
          }))
      )
    } else {
      setMenuList(MENUS)
    }
  }, [])

  const handleMoreMenuBlock = () => {
    setIsMoreMenu(prev => !prev)
  }

  return (
    <nav id="nav-menu">
      <ul className={classNames('flex gap-1 text-primary-6', className)}>
        <li>
          <Link
            className={classNames(
              'hover:bg-button-hover block rounded-full border border-transparent px-3.5 py-2 text-xs font-medium -tracking-wide text-primary-6 dark:bg-darkmode-base-1 dark:!text-darkmode-text dark:hover:!bg-lineer-nav-link',
              activeMenu === '/' &&
                ' bg-base-5 !text-active-menu dark:border-darkmode-border dark:bg-darkmode-base-1 dark:bg-lineer-nav-link dark:!text-darkmode-title'
            )}
            href="/"
          >
            Home
          </Link>
        </li>
        {menuList.map((menu, index) => (
          <li key={index}>
            <Link
              className={classNames(
                'hover:bg-button-hover block rounded-full border border-transparent px-4 py-2 text-xs font-medium -tracking-wide text-primary-6 dark:bg-darkmode-base-1 dark:!text-darkmode-text dark:hover:!bg-lineer-nav-link',
                activeMenu === menu.href &&
                  'bg-base-5 !text-active-menu dark:border-darkmode-border  dark:bg-lineer-nav-link dark:!text-darkmode-title'
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
