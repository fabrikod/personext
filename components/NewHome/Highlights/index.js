import React from 'react'
import NewCard from '../../Card/NewCard'
import HighlightsCard from './HighlightsCard'

export default function Highlights() {
  return (
    <NewCard id="highlight">
      <h2 className="text-lg font-semibold ">Highlights</h2>
      <p className="mt-2 text-sm font-normal text-primary-6">
        Software and resources I use on a regular basis.
      </p>

      <div className="mt-10 flex flex-col gap-9">
        <HighlightsCard />
        <HighlightsCard />
      </div>
    </NewCard>
  )
}
