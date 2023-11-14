import React from 'react'
import Card from '@/components/Card/Card'
import { Document, Edit, Personal, Setting } from '../Icons'
import Link from 'next/link'

function Nav({ user }) {
  return (
    <>
      <Card
        type="profile"
        name={user.fullName}
        job={user.job}
        description={user.description}
        socials={user.socials}
        image={user.image}
      />

      <div className="mt-10 flex flex-col items-center justify-between gap-10 sm:flex-row">
        <Card className="flex w-full justify-center gap-7 px-10 py-4 sm:w-auto">
          <Personal />
          <Edit />
          <Setting />
        </Card>
        <Link href="publications" className="w-full sm:w-auto">
          <Card className="flex w-full justify-center gap-5 px-10 py-3.5 sm:min-w-[14rem] ">
            <Document />
            <span className="font-semibold">Publications</span>
          </Card>
        </Link>
      </div>
    </>
  )
}

export default Nav
