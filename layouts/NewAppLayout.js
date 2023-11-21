import NewChip from '@/components/Common/NewChip'
import NewNav from '@/components/Common/NewNav'
import { Mail, Theme } from '@/components/Icons'
import React from 'react'

export default function NewAppLayout({ children }) {
  return (
    <>
      <header className="flex h-20 items-center justify-center bg-base-2 font-ibm-plex-sans">
        <div className="flex min-w-[555px] gap-x-14">
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
      <main className="bg-base-4 px-5 font-ibm-plex-sans">{children}</main>
    </>
  )
}
