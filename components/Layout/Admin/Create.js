import NewCard from '@/components/Card/NewCard'
import NewChip from '@/components/Common/NewChip'
import { Save } from '@/components/Icons'

export default function Create({ children, actionButtonText, formData, url }) {
  const handleOnSubmit = async e => {
    e.preventDefault()

    console.log('formDataformData', formData)
  }

  return (
    <NewCard className="!w-full px-5 py-6">
      <form onSubmit={handleOnSubmit}>
        {children}

        <div className="mt-7 flex justify-end">
          <NewChip
            as="button"
            className="inline-flex items-center gap-2 rounded-md bg-lineer-light px-3"
          >
            <Save /> {actionButtonText}
          </NewChip>
        </div>
      </form>
    </NewCard>
  )
}
