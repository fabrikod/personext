import React, { useEffect, useState } from 'react'
import { CardType, DESCRIPTION_MAX_LENGTH } from '../../constrait'
import Image from 'next/image'
import Chip from '../Common/Chip'
import * as Icons from '../Icons'
import SvgPublish from '../Icons/Publish'
import Link from 'next/link'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'

export default function Card({ as, type, children, className, ...props }) {
  const CardComponent = CardTypeComponent[type]
  const [customClass, setColumnClass] = useState()

  return (
    <div
      className={classNames(
        'rounded-[30px] bg-base-2 p-9 shadow-card',
        customClass,
        className,
        type !== 'profile' ? 'card' : ''
      )}
    >
      {children ? (
        children
      ) : (
        <CardComponent {...props} setColumnClass={setColumnClass} />
      )}
    </div>
  )
}

const CardTypeComponent = {
  [CardType.Profile]: ProfileCard,
  [CardType.FullText]: FullTextCard,
  [CardType.HalfText]: HalfTextCard,
  [CardType.FullImage]: FullImageCard,
}

function ProfileCard({ description, name, job, image, socials }) {
  return (
    <div>
      <Link href="/" className="inline-block">
        <Image
          src={image}
          width={152}
          height={152}
          className="rounded-full"
          alt="Picture of the author"
        />
      </Link>

      <Link href="/">
        <h1 className="mt-7 text-3xl font-bold sm:text-5xl">{name}</h1>
      </Link>
      <h2 className="mt-3 text-base font-semibold text-primary-1">{job}</h2>
      <p className="mb-7 mt-5 text-xl font-normal text-primary-3 sm:text-2xl">
        {description}
      </p>

      {socials && (
        <Chip className="cursor-default">
          {socials.map((social, index) => {
            const ComponentName = Icons[social.name]
            if (!ComponentName) {
              return null
            }
            return (
              <Link href={social.url} key={index} target="_blank">
                <ComponentName />
              </Link>
            )
          })}
        </Chip>
      )}
    </div>
  )
}

function FullTextCard({ description, title, tags, slug }) {
  return (
    <div className="min-h-[190px]">
      <h3 className="text-xl font-bold text-primary-2 sm:text-3xl">
        <Link href={slug}>{title}</Link>
      </h3>
      <p className="mt-6 font-semibold text-primary-3">
        {description.length > DESCRIPTION_MAX_LENGTH
          ? `${description.substring(0, DESCRIPTION_MAX_LENGTH)}...`
          : description}
      </p>

      {tags.length && (
        <div className="mt-9 flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <Link
              href={{
                pathname: '/',
                query: {
                  tag: tag.key,
                },
              }}
              key={index}
            >
              <Chip className="self-start !rounded-[15px] !py-3 text-primary-1">
                {tag.name}
              </Chip>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function HalfTextCard({
  description,
  content,
  title,
  image,
  tags,
  slug,
  imageClassName,
}) {
  const [contentState, setContentState] = useState(content)
  const { t } = useTranslation()

  useEffect(() => {
    if (process.browser) {
      const doc = new DOMParser().parseFromString(content, 'text/html')
      setContentState(doc.body.textContent || content)
    }
  }, [])

  return (
    <div>
      {image && (
        <div
          className={classNames(
            'relative aspect-square min-h-[190px] w-full sm:aspect-[2] sm:h-auto',
            imageClassName
          )}
        >
          <Image
            src={image}
            fill
            className="rounded-[20px] object-cover"
            alt="Picture of the author"
          />
        </div>
      )}
      <div
        className={classNames(
          'flex flex-1 flex-col justify-between',
          image && 'mt-10'
        )}
      >
        <h3 className="text-xl font-bold text-primary-2 sm:text-3xl">
          <Link href={slug}>{title}</Link>
        </h3>
        <p className="mt-4 text-sm font-semibold text-primary-3 sm:text-base">
          {description ? (
            <span>
              {description.length > DESCRIPTION_MAX_LENGTH
                ? `${description.substring(0, DESCRIPTION_MAX_LENGTH)}...`
                : description}
            </span>
          ) : (
            <span>
              {contentState.length > DESCRIPTION_MAX_LENGTH
                ? `${contentState.substring(0, DESCRIPTION_MAX_LENGTH)}...`
                : contentState}
            </span>
          )}
        </p>

        {tags.length !== 0 && (
          <div className="mt-9 flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <Link
                href={{
                  pathname: t('link:/tag/[tag]'),
                  query: {
                    tag: tag.key,
                  },
                }}
                key={index}
              >
                <Chip className="!rounded-[15px] !py-3 text-primary-1">
                  {tag.name}
                </Chip>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function FullImageCard({ slug, setColumnClass }) {
  useEffect(() => {
    setColumnClass('!p-5')
  }, [])

  return (
    <div className="relative aspect-square">
      <Link href={slug}>
        {/* <Image
          src={image}
          fill
          className="rounded-[20px] object-cover"
          alt="Picture of the author"
        /> */}
      </Link>

      <button className="absolute left-5 top-5 self-end rounded-lg bg-base-3 px-3 py-2 text-sm">
        Drawings I made in summer
      </button>

      <button className="absolute bottom-5 right-5 flex items-center gap-2 self-end rounded-3xl bg-base-3 px-3 py-1 text-xs">
        <SvgPublish />
        dribble.com
      </button>
    </div>
  )
}
