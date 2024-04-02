export default function ArrowLeft({ width = 20, height = 20, className }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <path
        d="M6 12H18M6 12L11 7M6 12L11 17"
        className={className}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
