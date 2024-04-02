import React from 'react'
import Nav from './Nav'
import Chip from './Chip'
import { changeThemeMode } from '@/helpers/theme'
import { Theme } from '../Icons'

export default function MobileMenu() {
  const changeTheme = () => {
    changeThemeMode()
  }

  return (
    <div className="flex min-h-[60px] items-center justify-between rounded-[28px] border border-primary-1 bg-base-2 px-2 dark:border-darkmode-border dark:bg-darkmode-base-1 max-sm:flex-col max-sm:items-start max-sm:py-3 sm:rounded-full">
      <Nav className="max-sm:flex-col max-sm:items-start" />
      <Chip as="button" onClick={changeTheme}>
        <Theme />
      </Chip>
    </div>
  )
}
