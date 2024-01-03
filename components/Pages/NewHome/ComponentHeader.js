export default function ComponentHeader({ title, description }) {
  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold dark:text-darkmode-title">
          {title}
        </h2>
        <p className="mt-2.5 text-xs font-normal text-primary-6 dark:text-darkmode-text">
          {description}
        </p>
      </div>
    </div>
  )
}
