import Card from '@/components/Card/Card'
import SocialCard from './SocialCard'
import ComponentHeader from '../ComponentHeader'

export default function index({ data }) {
  return (
    <Card id="follow-me" data-name="Contact">
      <ComponentHeader
        title="Follow Me"
        description="Featured projects, templates and visual experiments"
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2.5">
        {data.map((social, index) => (
          <SocialCard key={index} data={social} />
        ))}
      </div>
    </Card>
  )
}
