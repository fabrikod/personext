import React from 'react'
import CardType from '../constrait/CardType'
import Image from 'next/image'
import Chip from './Chip'
import * as Icons from './Icons'
import SvgPublish from './Icons/Publish'

export default function Card({ children, description, title, tags, image, name, type = 'fulltext', className }) {
  const CardComponent = CardTypeComponent[type];
  return (
    <CardComponent
      description={description}
      title={title}
      tags={tags}
      image={image}
      children={children}
      name={name}
      className={className}
    />
  )
}

const CardTypeComponent = {
  [CardType.Profile]: ProfileCard,
  [CardType.FullText]: FullTextCard,
  [CardType.HalfText]: HalfTextCard,
  [CardType.QuarterText]: QuarterTextCard,
  [CardType.FullImage]: FullImageCard
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
    <div className='blog-card rounded-[30px] shadow-card p-9 bg-base-2'>
      <h3 className='font-bold text-4xl text-primary-2'>{title}</h3>
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

function HalfTextCard({ children, description, title, image, tags }) {
  return (
    <div className='blog-card rounded-[30px] shadow-card p-9 flex flex-col md:flex-row bg-base-2 gap-10'>
      <div className='shrink-0 flex justify-center md:w-[220px]'>
        <Image
          src={image}
          width={262}
          height={259}
          alt="Picture of the author"
        />
      </div>
      <div className='flex flex-col justify-between'>
        <h3 className='font-bold text-4xl text-primary-2'>{title}</h3>
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

function QuarterTextCard({ children, description, title, image, tags }) {
  return (
    <div className='blog-card rounded-[30px] shadow-card p-6 bg-base-2'>
      <Image
        src={image}
        width={337}
        height={194}
        className='object-cover h-[194px] rounded-[20px]'
        alt="Picture of the author"
      />

      <h3 className='font-bold text-2xl text-primary-2 mt-4'>{title}</h3>

      <p className='font-semibold text-lg text-primary-3 mt-4'>
        {description}
      </p>

      {/* <div className='flex mt-3 gap-x-3'>
        {
          tags.map((tag, index) => <Chip className='text-primary-1 rounded-[15px] !py-3' key={index}>{tag}</Chip>)
        }
      </div> */}
    </div>
  )
}

function FullImageCard({ children, description, title, image, tags }) {
  return (
    <div className='blog-card rounded-[30px] shadow-card p-6 bg-base-2 relative'>
      <Image
        src={image}
        width={337}
        height={262}
        alt="Picture of the author"
      />

      <button className='bg-base-3 px-3 py-2 rounded-lg absolute top-11 left-11 self-end text-sm'>
        Drawings I made in summer
      </button>

      <button className='bg-base-3 px-3 py-1 rounded-3xl absolute bottom-12 right-12 self-end text-xs flex gap-2 items-center'>
        <SvgPublish />
        dribble.com
      </button>
    </div>
  )
}