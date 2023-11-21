import NewChip from '@/components/Common/NewChip'
import classNames from 'classnames'
import Image from 'next/image'

export default function SocialCard({ className }) {
  return (
    <NewChip
      as="a"
      className={classNames(
        'flex h-24 w-24 items-center justify-center !rounded-[10px]',
        className
      )}
    >
      <div className="relative h-6 w-6">
        <Image src="/img/socials/facebook.png" fill />
      </div>
    </NewChip>
  )
}
