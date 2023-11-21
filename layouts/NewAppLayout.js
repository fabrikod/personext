import MobileMenu from '@/components/Common/MobileMenu'
import NewChip from '@/components/Common/NewChip'
import NewNav from '@/components/Common/NewNav'
import { HamburgerMenu, Mail, Theme } from '@/components/Icons'
import classNames from 'classnames'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function NewAppLayout({ children }) {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenu, setMobileMenu] = useState(false)

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

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleMobileMenu = () => {
    setMobileMenu(prev => !prev)
  }

  useEffect(() => {
    console.log('isMobileMenuisMobileMenu', isMobileMenu)
  }, [isMobileMenu])

  return (
    <>
      <header className="flex h-20 items-center justify-center bg-base-2 font-ibm-plex-sans">
        <div className="flex gap-x-14">
          <NewNav />
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
      <header
        className={classNames(
          'fixed -top-16 left-1/2 z-30 w-full max-w-[611.14px] -translate-x-1/2 duration-300',
          scrolled && 'translate-y-20'
        )}
      >
        <div className="mx-auto flex items-center rounded-full border border-primary-1 bg-base-2 py-1 pl-1 pr-2.5">
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
              <h1 className="text-sm font-semibold">Abdullah Önden</h1>
              <p className="text-2xs font-normal text-primary-6">
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
            'absolute top-0 -z-10 h-full w-full duration-300',
            isMobileMenu && 'translate-y-[70px]'
          )}
        >
          <MobileMenu />
        </div>
      </header>
      <main className="bg-base-4 px-5 font-ibm-plex-sans">{children}</main>
    </>
  )
}
