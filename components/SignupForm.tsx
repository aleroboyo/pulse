'use client'

import { useState } from "react"
import { usePulse } from "@/context/PulseContext"
import { useRouter } from "next/navigation"
import Input from "./Input"
import PasswordVisibility from "./PasswordVisibilty"
import Link from "next/link"

const SignupForm = () => {
  const { signup } = usePulse()
  const router = useRouter()
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    fullName: "", email: "", password: "", confirmPassword: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.fullName || !formData.email || !formData.password) {
      return setError("All fields are required")
    }
    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match")
    }

    const result = signup(formData.fullName, formData.email, formData.password)
    if (!result.success) return setError(result.message)
    router.push('/')
  }

  return (
    <div className="font-inter mt-20 md:mt-50 lg:mt-40 px-4 md:px-26 lg:px-100">
      <form onSubmit={handleSubmit} className="bg-[#111115] border border-[#f5f5f5]/10 px-4 py-8 flex flex-col gap-8 items-center rounded-xl">
        <div className="w-full">
          <div className="mb-8 text-center">
            <h2 className="font-syne text-3xl lg:text-4xl font-semibold">Create Account</h2>
            <h4 className="font-syne text-[#a1a1aa]">Join the Pulse community</h4>
          </div>

          <div className="flex flex-col gap-4">
            <Input placeholder="Full Name" value={formData.fullName} onChange={handleChange} name="fullName" />
            <Input placeholder="Email" value={formData.email} onChange={handleChange} name="email" />
            <PasswordVisibility placeholder="Password" value={formData.password} onChange={handleChange} name="password" />
            <PasswordVisibility placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} name="confirmPassword" />
          </div>

          {error && <p className="text-[#ff4d6d] text-sm mt-4 text-center">{error}</p>}
        </div>

        <button type="submit" className="w-full text-white bg-[#ff4d6d] py-2 rounded-md hover:bg-[#ff2e63] transition-colors primary-button">
          Sign Up
        </button>

        <div className="text-[#a1a1aa]">
          Already have an account? <Link href='/login'><span className="text-[#ff4d6d]">Login</span></Link>
        </div>
      </form>
    </div>
  )
}

export default SignupForm
