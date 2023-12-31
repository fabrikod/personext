import NewChip from '@/components/Common/NewChip'
import classNames from 'classnames'
import Image from 'next/image'

export default function SocialCard({ data, className }) {
  return (
    <NewChip
      as="a"
      href={data.url}
      className={classNames(
        'button flex h-24 w-24 items-center justify-center !rounded-[10px] dark:bg-lineer-nav-link',
        className
      )}
    >
      <div className="relative h-6 w-6">
        <Image src={data.icon} fill alt="" />
      </div>
    </NewChip>
  )
}
