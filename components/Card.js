import React, { useEffect, useState } from 'react'
import CardType from '../constrait/CardType'
import Image from 'next/image'
import Chip from './Chip'
import * as Icons from './Icons'
import SvgPublish from './Icons/Publish'
import Link from 'next/link'
import classNames from 'classnames'

export default function Card(props) {
  const { type, children } = props
  const CardComponent = CardTypeComponent[type];
  const [customClass, setColumnClass] = useState()

  return (
    <div className={classNames('rounded-[30px] shadow-card p-9 bg-base-2', customClass)}>
      {
        children
          ? children
          : <CardComponent {...props} setColumnClass={setColumnClass} />
      }
    </div>
  )
}

const CardTypeComponent = {
  [CardType.Profile]: ProfileCard,
  [CardType.FullText]: FullTextCard,
  [CardType.HalfText]: HalfTextCard,
  [CardType.FullImage]: FullImageCard
}

function ProfileCard({ children, description, name, job, tags, image, socials }) {
  return (
    <div>
      <Image
        src="/img/Ellipse 2.png"
        width={152}
        height={152}
        alt="Picture of the author"
      />

      <h1 className='font-bold text-5xl mt-7'>{name}</h1>
      <h2 className='font-semibold text-2xl mt-3 text-primary-1'>{job}</h2>
      <p className='font-normal text-xl text-primary-3 mt-2 mb-7'>
        {description}
      </p>

      {
        socials && <Chip>
          {
            socials.map((social, index) => {
              const ComponentName = Icons[social.name]
              if (!ComponentName) {
                return null
              }
              return <Link href={social.url} key={index} target="_blank"><ComponentName /></Link>;
            })
          }
        </Chip>
      }
    </div>
  )
}

function FullTextCard({ children, description, title, tags, slug }) {
  return (
    <div>
      <h3 className='font-bold text-4xl text-primary-2'><Link href={slug}>{title}</Link></h3>
      <p className='font-semibold text-primary-3 mt-6'>
        {description}
      </p>
      <div className='flex flex-wrap mt-9 gap-3 '>
        {
          tags.map((tag, index) => <Chip className='text-primary-1 !rounded-[15px] !py-3 self-start' key={index}>{tag}</Chip>)
        }
      </div>
    </div>
  )
}

function HalfTextCard({ children, description, title, image, tags, slug }) {
  return (
    <div className='flex flex-col h-full items-start md:flex-row gap-10'>
      {
        image && (
          <div className='h-60 sm:h-96 md:h-full w-full relative md:w-1/3'>
            <Image
              src={image}
              fill
              className='object-cover rounded-[20px] h-full w-full'
              alt="Picture of the author"
            />
          </div>
        )
      }
      <div className='flex flex-col justify-between md:w-2/3'>
        <h3 className='font-bold text-4xl text-primary-2'><Link href={slug}>{title}</Link></h3>
        <p className='font-semibold text-primary-3 mt-4'>
          {description}
        </p>

        <div className='flex mt-3 gap-x-3'>
          {
            tags.map((tag, index) => <Chip className='text-primary-1 !rounded-[15px] !py-3' key={index}>{tag}</Chip>)
          }
        </div>
      </div>
    </div>
  )
}

function FullImageCard({ children, description, title, image, tags, slug, setColumnClass }) {

  useEffect(() => {
    setColumnClass('!p-5')
  }, [])

  return (
    <div className='relative h-96 sm:h-full'>
      <Link href={slug}>
        <Image
          src={image}
          fill
          className='object-cover rounded-[20px]'
          alt="Picture of the author"
        />
      </Link>

      <button className='bg-base-3 px-3 py-2 rounded-lg absolute top-5 left-5 self-end text-sm'>
        Drawings I made in summer
      </button>

      <button className='bg-base-3 px-3 py-1 rounded-3xl absolute bottom-5 right-5 self-end text-xs flex gap-2 items-center'>
        <SvgPublish />
        dribble.com
      </button>
    </div>
  )
}