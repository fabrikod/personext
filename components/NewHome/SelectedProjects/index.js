import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import React from 'react'
import SelectedProjectsCard from './SelectedProjectsCard'
import ComponentHeader from '../ComponentHeader'

const SELECTEDPROJECTS = [
  {
    title: 'HEADLESS CONTENT MANAGEMENT SYSTEM',
    image: '',
    description: '',
  },
  {
    title: 'SAAS KLİNİK YÖNETİM SİSTEMİ',
    image: '',
    description: '',
  },
  {
    title: 'SAAS NGO ERP SYSTEM',
    image: '',
    description: '',
  },
  {
    title:
      'STK ERP SİSTEMİ - Sivil Toplum Kuruluşları İçin Kurumsal Kaynak Planlama Sistemi',
    image: '',
    description: '',
  },
  {
    title:
      'T.C. Sanayi ve Teknoloji Bakanlığı Milli Teknoloji Hamlesi ve Stratejik Dönüşüm Programı Strateji Geliştirme ve Uygulama Danışmanlığı Projesi - Esenler Belediyesi Akıllı Şehir E-Platform Fizibilite Raporu',
    image: '',
    description: '',
  },
]

export default function SelectedProjects() {
  return (
    <NewCard className="px-0" id="selected-projects">
      <div className="px-9">
        <ComponentHeader
          title="Selected Projects"
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
        className="ml-11 mt-9 px-4 py-1 text-sm text-primary-6"
      >
        View All Projects
      </NewChip>
    </NewCard>
  )
}
