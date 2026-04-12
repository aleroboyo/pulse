"use client"

type InputProps = {
  label?: string
  placeholder?: string
  width?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
}

const Input = ({ label, placeholder, width = 'w-full', value, onChange, name }: InputProps) => {
  return (
    <div className="relative flex flex-col font-inter w-full">
      {label && (
        <label className='text-[14px] font-bold text-left md:text-lg mb-1'>{label}</label>
      )}
      <input
        type='text'
        placeholder={placeholder}
        className={`${width} h-10 border-[0.5px] border-[#f5f5f5]/10 rounded-md p-2 focus:shadow-xl focus:shadow-[#ff4d6d]/5 focus:outline-none`}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  )
}

export default Input