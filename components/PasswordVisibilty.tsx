"use client"

import { useState } from 'react'
import { FaRegEye , FaRegEyeSlash } from "react-icons/fa6"

const PasswordVisibility = ({ placeholder, value, onChange, name, width = "w-full", label }: { placeholder: string; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; name?: string; width?: string; label?: string }) => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <>
            <div className='font-inter relative flex flex-col'>
                <label className='text-[14px] md:text-lg font-bold text-left'>{label}</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    className={`${width} h-10 border-[0.5px] border-[#f5f5f5]/10 rounded-md p-2 focus:shadow-xl focus:shadow-[#ff4d6d]/5 focus:outline-none`}
                    value={value}
                    onChange={onChange}
                    name={name}
                />
                <button type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-2 top-3'
                >
                    {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
                </button>
            </div>
        </>
    )
}


export default PasswordVisibility