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

      <div className="mt-10 flex items-center justify-between">
        <Card className="flex gap-7 px-10 py-4">
          <Personal />
          <Edit />
          <Setting />
        </Card>
        <Link href="publications">
          <Card className="flex min-w-[14rem] justify-center gap-5 px-10 py-3.5">
            <Document />
            <span className="font-semibold">Publications</span>
          </Card>
        </Link>
      </div>
    </>
  )
}

export default Nav
