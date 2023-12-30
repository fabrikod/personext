import Image from 'next/image'
import NewChip from './NewChip'

export default function ProfilePhoto({ src }) {
  return (
    <NewChip className={'mb-5 inline-block'}>
      <div className="relative h-[4.9rem] w-[4.9rem]">
        {src && (
          <Image fill src={src} className="rounded-full object-cover" alt="" />
        )}
      </div>
    </NewChip>
  )
}
