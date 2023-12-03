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

  const handleMoreMenuBlock = () => {
    setIsMoreMenu(prev => !prev)
  }

  return (
    <nav id="nav-menu">
      <ul className={classNames('flex gap-2 text-primary-6', className)}>
        <li>
          <Link
            className={classNames(
              'block rounded-full border border-transparent px-4 py-2 text-xs font-medium -tracking-wide text-primary-6 dark:text-darkmode-text',
              activeMenu === '/' &&
                ' bg-base-5 text-active-menu dark:border-darkmode-border dark:bg-darkmode-base-1 dark:bg-lineer-nav-link'
            )}
            href="#"
          >
            Home
          </Link>
        </li>
        {menuList.map((menu, index) => (
          <li
            key={index}
            className={classNames(index > MENUCOUNT - 1 && 'sm:hidden')}
          >
            <Link
              className={classNames(
                'block rounded-full border border-transparent px-4 py-2 text-xs font-medium -tracking-wide text-primary-6 dark:text-darkmode-text',
                activeMenu === menu.href &&
                  'bg-base-5 text-active-menu dark:border-darkmode-border dark:bg-darkmode-base-1 dark:bg-lineer-nav-link'
              )}
              href={menu.href}
            >
              {menu.text}
            </Link>
          </li>
        ))}

        <li className="relative max-sm:hidden">
          <NewChip
            as="button"
            onClick={handleMoreMenuBlock}
            className={classNames(
              'flex h-[34px] items-center gap-1 px-3 dark:bg-darkmode-base-1 max-sm:ml-3.5',
              isMoreMenu && 'bg-base-5 dark:bg-lineer-nav-link'
            )}
          >
            {Array.from({ length: 3 }, (value, index) => (
              <div
                key={index}
                className={classNames(
                  'h-1.5 w-1.5 rounded-full border border-primary-1',
                  isMoreMenu && '!border-active-menu'
                )}
              ></div>
            ))}

            <NewCard
              className={classNames(
                'invisible absolute left-1/2 top-10 min-w-[140px] -translate-x-1/2 px-1 py-2 opacity-0',
                isMoreMenu && '!visible opacity-100'
              )}
            >
              {menuList.map((menu, index) => (
                <li
                  key={index}
                  className={classNames(
                    'inline-block',
                    index < MENUCOUNT && 'sm:hidden'
                  )}
                >
                  <Link
                    className={classNames(
                      'block rounded-full border border-transparent px-4 py-2 text-xs font-medium -tracking-wide text-primary-6 dark:text-darkmode-text',
                      activeMenu === menu.href &&
                        'bg-base-5 text-active-menu dark:border-darkmode-border dark:bg-darkmode-base-1 dark:bg-lineer-nav-link'
                    )}
                    href={menu.href}
                  >
                    {menu.text}
                  </Link>
                </li>
              ))}
            </NewCard>
          </NewChip>
        </li>
      </ul>
    </nav>
  )
}
