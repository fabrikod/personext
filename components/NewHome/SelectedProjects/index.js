import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import React from 'react'
import SelectedProjectsCard from './SelectedProjectsCard'
import ComponentHeader from '../ComponentHeader'

const SELECTEDPROJECTS = [
  {
    title: 'Kindertrack',
    image: '/img/selected-projects/kindertrack.webp',
    description: '',
  },
  {
    title: 'Kinderway',
    image: '/img/selected-projects/kinderway.webp',
    description: '',
  },
  {
    title: 'The Open Quran',
    image: '/img/selected-projects/open-quran.webp',
    description: '',
  },
  {
    title: 'Sleepy Baby',
    image: '/img/selected-projects/sleppy-baby.webp',
    description: '',
  },
  {
    title: 'White Sound',
    image: '/img/selected-projects/white-sound.webp',
    description: '',
  },
  {
    title: 'Quran Mubin',
    image: '/img/selected-projects/mubin.webp',
    description: '',
  },
  {
    title: 'Prayer Times Light',
    image: '/img/selected-projects/prayer.webp',
    description: '',
  },
]

// const SELECTEDPROJECTS = [
//   {
//     title: 'HEADLESS CONTENT MANAGEMENT SYSTEM',
//     image: '',
//     description: '',
//   },
//   {
//     title: 'SAAS KLİNİK YÖNETİM SİSTEMİ',
//     image: '',
//     description: '',
//   },
//   {
//     title: 'SAAS NGO ERP SYSTEM',
//     image: '',
//     description: '',
//   },
//   {
//     title:
//       'STK ERP SİSTEMİ - Sivil Toplum Kuruluşları İçin Kurumsal Kaynak Planlama Sistemi',
//     image: '',
//     description: '',
//   },
//   {
//     title:
//       'T.C. Sanayi ve Teknoloji Bakanlığı Milli Teknoloji Hamlesi ve Stratejik Dönüşüm Programı Strateji Geliştirme ve Uygulama Danışmanlığı Projesi - Esenler Belediyesi Akıllı Şehir E-Platform Fizibilite Raporu',
//     image: '',
//     description: '',
//   },
// ]

export default function SelectedProjects() {
  return (
    <NewCard className="px-0" id="projects" data-name="Projects">
      <div className="px-9">
        <ComponentHeader
          title="Projects"
          description="Featured projects, templates and visual experiments"
        />
      </div>

      <div className="mt-10 flex flex-col gap-9 px-9">
        {SELECTEDPROJECTS.map((data, index) => (
          <SelectedProjectsCard data={data} key={index} />
        ))}
      </div>

      <hr className="mt-9 border-primary-1 dark:border-darkmode-border" />

      <NewChip
        as="button"
        className="button ml-11 mt-9 px-4 py-1 text-xs text-primary-6 dark:bg-lineer-nav-link"
      >
        View All Projects
      </NewChip>
    </NewCard>
  )
}
