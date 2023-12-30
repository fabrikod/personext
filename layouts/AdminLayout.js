import Side from '@/components/Layout/Admin/Side'

export default function AdminLayout({ children, title }) {
  return (
    <div className="flex bg-base-4">
      <div className="w-full max-w-[15rem]">
        <Side />
      </div>

      <div className="w-full max-w-3xl p-7 pt-12">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="mt-7">{children}</div>
      </div>
    </div>
  )
}
