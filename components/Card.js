import React from 'react'
import CardType from '../constrait/CardType'
import Image from 'next/image'
import Chip from './Chip'
import * as Icons from './Icons'

export default function Card({ children, description, title, tags, image, name, type = 'fulltext' }) {
  const CardComponent = CardTypeComponent[type];
  return (
    <CardComponent
      description={description}
      title={title}
      tags={tags}
      image={image}
      children={children}
      name={name}
    />
  )
}

const CardTypeComponent = {
  [CardType.Profile]: ProfileCard,
  [CardType.FullText]: FullTextCard,
  [CardType.HalfText]: HalfTextCard
}

function ProfileCard({ children, description, name, job, tags, image }) {
  return (
    <div className='rounded-[30px] shadow-card p-9 bg-base-2'>
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

      <Chip>
        <Icons.Twitter></Icons.Twitter>
        <Icons.Instagram></Icons.Instagram>
        <Icons.Linkedin></Icons.Linkedin>
        <Icons.Behance></Icons.Behance>
        <Icons.Dribbble></Icons.Dribbble>
      </Chip>
    </div>
  )
}

function FullTextCard({ children, description, title, tags }) {
  return (
    <div className='rounded-[30px] shadow-card p-9 bg-base-2'>
      <h3 className='font-bold text-4xl text-primary-2 mt-20'>{title}</h3>
      <p className='font-semibold text-primary-3 mt-6'>
        {description}
      </p>
      <div className='flex mt-12'>
        {
          tags.map(tag => <Chip className='text-primary-1 rounded-[15px] py-4'>{tag}</Chip>)
        }
      </div>
    </div>
  )
}

function HalfTextCard({ children, description, title, image, tags }) {
  return (
    <div className='rounded-[30px] shadow-card p-9 bg-base-2 flex gap-x-10'>
      <Image
        src={image}
        width={262}
        height={262}
      />
      <div>
        <h3 className='font-bold text-4xl text-primary-2 mt-20'>{title}</h3>
        <p className='font-semibold text-primary-3 mt-6'>
          {description}
        </p>

        <div className='flex mt-12'>
          {
            tags.map(tag => <Chip className='text-primary-1 rounded-[15px] py-4'>{tag}</Chip>)
          }
        </div>
      </div>
    </div>
  )
}