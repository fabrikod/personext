export default function TextInput({
  type = 'text',
  id,
  value,
  onChange,
  name,
  label,
  placeholder,
}) {
  return (
    <>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        className="mt-1 h-[2.4rem] w-full rounded-md border border-primary-1 pl-3 text-xs outline-none placeholder:text-xs placeholder:font-medium placeholder:text-input"
        onChange={e => onChange(e)}
      />
    </>
  )
}
