import MobileMenu from '@/components/Common/MobileMenu'
import NewChip from '@/components/Common/NewChip'
import NewNav from '@/components/Common/NewNav'
import { HamburgerMenu, Mail, Theme } from '@/components/Icons'
import { MENUS } from '@/constrait'
import { throttle } from '@/helpers/dom'
import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function NewAppLayout({ children, user }) {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenu, setMobileMenu] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY || document.documentElement.scrollTop

      const threshold = 120

      if (scrollHeight > threshold) {
        setScrolled(true)
      } else {
        setScrolled(false)
        setMobileMenu(false)
      }
    }

    const throttledScroll = throttle(() => {
      handleScroll()
    }, 100)

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (MENUS.find(menu => menu.href === router.asPath)) {
      setMobileMenu(false)
    }
  }, [router])

  const handleMobileMenu = () => {
    setMobileMenu(prev => !prev)
  }

  const changeTheme = () => {
    document.documentElement.classList.toggle('dark')
    localStorage.setItem(
      'theme',
      localStorage.getItem('theme') === 'light' ? 'dark' : 'light'
    )
  }

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <>
      <header
        id="web-header"
        className="flex h-20 items-center justify-center bg-base-2 font-ibm-plex-sans dark:border-b dark:border-darkmode-border dark:bg-darkmode-base-1 max-sm:hidden"
      >
        <div className="flex min-w-[620px] justify-between gap-x-14">
          <NewNav />
          <div className="flex gap-3">
            <NewChip as="a" href="#" className="flex items-center">
              <Mail />
            </NewChip>

            <NewChip as="button" onClick={changeTheme}>
              <Theme />
            </NewChip>
          </div>
        </div>
      </header>
      <header
        className={classNames(
          'fixed -top-20 left-1/2 z-30 w-full max-w-[620px] -translate-x-1/2 duration-300 max-sm:translate-y-24 max-sm:px-5',
          scrolled && 'translate-y-24'
        )}
      >
        <div className="mx-auto flex items-center rounded-full border border-primary-1 bg-base-2 py-1 pl-1 pr-2.5 dark:border-darkmode-border dark:bg-darkmode-base-1">
          <div className="flex w-full items-center gap-2">
            <NewChip as="a" href="#" className={'inline-block p-1'}>
              <div className="relative h-10 w-10">
                <Image
                  fill
                  src="/img/profile.jpg"
                  className="rounded-full"
                  alt=""
                />
              </div>
            </NewChip>
            <div>
              <h1 className="text-sm font-semibold dark:text-darkmode-title">
                Abdullah Önden
              </h1>
              <p className="text-2xs font-normal text-primary-6 dark:text-darkmode-text">
                Academician Dr. Faculty Member
              </p>
            </div>
          </div>

          <NewChip
            as="button"
            onClick={handleMobileMenu}
            className="flex h-10 w-11 items-center justify-center !p-0"
          >
            <HamburgerMenu />
          </NewChip>
        </div>

        <div
          className={classNames(
            'absolute left-0 top-[3px] -z-10 h-full w-full duration-300 max-sm:-translate-y-80 max-sm:px-5',
            isMobileMenu && '!translate-y-[75px]'
          )}
        >
          <MobileMenu />
        </div>
      </header>
      <main className="bg-base-4 px-5 font-ibm-plex-sans dark:bg-darkmode-base-1">
        {children}
      </main>
    </>
  )
}
