import NewCard from '@/components/Card/NewCard'
import SocialCard from './SocialCard'

export default function index() {
  return (
    <NewCard>
      <h2 className="text-lg font-semibold ">Follow Me</h2>
      <p className="mt-2 text-sm font-normal text-primary-6">
        Featured projects, templates and visual experiments
      </p>

      <div className="mt-10 flex flex-wrap gap-2.5 sm:justify-between">
        <SocialCard />
        <SocialCard />
        <SocialCard />
        <SocialCard />
        <SocialCard />
      </div>
    </NewCard>
  )
}
