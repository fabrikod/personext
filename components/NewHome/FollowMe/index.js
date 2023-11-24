import NewCard from '@/components/Card/NewCard'
import SocialCard from './SocialCard'
import ComponentHeader from '../ComponentHeader'

export default function index() {
  return (
    <NewCard id="follow-me">
      <ComponentHeader
        title="Follow Me"
        description="Featured projects, templates and visual experiments"
      />

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