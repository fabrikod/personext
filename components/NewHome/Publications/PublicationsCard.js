import classNames from 'classnames'
import React from 'react'

export default function PublicationsCard({ className }) {
  return (
    <div
      className={classNames(
        'border-t border-solid border-primary-1 px-9 py-4',
        className
      )}
    >
      <h3 className="text-base font-semibold ">
        A Spatial Analytics Decision Support System for Analyzing the Role of
        Sea Transport in Public Transportation
      </h3>

      <p className="mt-2 text-sm font-normal text-primary-6">
        List of investors with a focus on revenue, featured by Abdullah Önden
      </p>
      <span className="text-2xs mt-2 block text-primary-6">
        Decision Analytics Journal, 6, 100149 Doi: 10.1016/j.dajour.2022.100149
      </span>
    </div>
  )
}
