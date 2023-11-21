import NewChip from '@/components/Common/NewChip'
import ArrowRight from '@/components/Icons/ArrowRight'
import classNames from 'classnames'
import Image from 'next/image'
import React, { useState } from 'react'

const GALLERIES = [
  {
    title: 'San Francisco, USA1',
    href: '#',
    img: '/img/galleries/gallery-1.png',
  },
  {
    title: 'San Francisco, USA2',
    href: '#',
    img: '/img/galleries/gallery-2.png',
  },
  {
    title: 'San Francisco, USA3',
    href: '#',
    img: '/img/galleries/gallery-3.png',
  },
  {
    title: 'San Francisco, USA4',
    href: '#',
    img: '/img/galleries/gallery-4.png',
  },
  {
    title: 'San Francisco, USA5',
    href: '#',
    img: '/img/galleries/gallery-5.png',
  },
]

export default function PhotoGallery({ className }) {
  const [selectedPhoto, setSelectedPhoto] = useState(0)

  const handleSelectedPhoto = index => {
    setSelectedPhoto(index)
  }

  const handleNextPhoto = index => {
    setSelectedPhoto(prev => (prev + 1 === GALLERIES.length ? 0 : prev + 1))
  }

  const handlePreviousPhoto = index => {
    setSelectedPhoto(prev =>
      prev - 1 === -1 ? GALLERIES.length - 1 : prev - 1
    )
  }

  return (
    <div className={classNames(className)}>
      <div className="photo-gallery">
        <div className="relative h-[260px]">
          <div className="relative h-full">
            <div className="relative h-full">
              {GALLERIES.map(({ img, href }, index) => (
                <Image
                  key={index}
                  alt=""
                  fill
                  src={img}
                  className={classNames(
                    'object-cover duration-300',
                    selectedPhoto === index ? 'opacity-100' : 'opacity-0'
                  )}
                />
              ))}
            </div>

            {GALLERIES.map(({ img, href, title }, index) => (
              <div
                key={index}
                className={classNames(
                  'bg-base-6 text-primary-7 max-xs:bottom-14 absolute bottom-6 left-6 rounded-2xl px-4 py-1 text-sm duration-500',
                  selectedPhoto === index ? 'opacity-100' : 'opacity-0'
                )}
              >
                {title}
              </div>
            ))}

            <NewChip
              onClick={handlePreviousPhoto}
              className="bg-base-6 arrow-left photo-arrow invisible absolute left-6 top-1/2 z-20 -translate-y-1/2 rotate-180 cursor-pointer border-none px-3 opacity-0 duration-500"
            >
              <ArrowRight fill="#fff" width="15" height="20" />
            </NewChip>

            <NewChip
              onClick={handleNextPhoto}
              className="bg-base-6 arrow-right photo-arrow invisible absolute right-6 top-1/2 z-20 -translate-y-1/2 cursor-pointer border-none px-3 opacity-0 duration-500"
            >
              <ArrowRight fill="#fff" width="15" height="20" />
            </NewChip>
          </div>

          <div className="bg-base-6 text-primary-7 absolute bottom-6 right-6 flex gap-1 rounded-2xl px-4 py-2.5">
            {GALLERIES.map((img, index) => (
              <div
                key={index}
                className={classNames(
                  'bg-base-7 h-2 w-2 cursor-pointer rounded-full duration-500',
                  selectedPhoto !== index ? 'opacity-25' : ''
                )}
                onClick={() => handleSelectedPhoto(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
