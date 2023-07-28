import React from 'react'

export default function AppLayout({ children }) {
  return (
    <main className='max-w-[1400px] mx-auto py-24 px-5'>
      {children}
    </main>
  )
}
