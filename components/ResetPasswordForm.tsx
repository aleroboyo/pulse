'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Input from "./Input"
import PasswordVisibility from "./PasswordVisibilty"

const ResetPasswordForm = () => {
    const router = useRouter()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (!formData.email || !formData.password || !formData.confirmPassword) {
            return setError("All fields are required")
        }
        if (formData.password !== formData.confirmPassword) {
            return setError("Passwords do not match")
        }

        // Since we're using localStorage, find the account and update the password
        const stored = localStorage.getItem('pulse')
        if (!stored) return setError("No account found with this email")

        const data = JSON.parse(stored)
        const accountIndex = data.accounts?.findIndex((a: { email: string }) => a.email === formData.email)

        if (accountIndex === -1 || accountIndex === undefined) {
            return setError("No account found with this email")
        }

        data.accounts[accountIndex].password = formData.password
        localStorage.setItem('pulse', JSON.stringify(data))

        setSuccess(true)
        setTimeout(() => router.push('/login'), 2000)
    }

    return (
        <div className="font-inter mt-20 md:mt-50 lg:mt-40 px-4 md:px-26 lg:px-100">
            <form onSubmit={handleSubmit} className="bg-[#111115] border border-[#f5f5f5]/10 px-4 py-8 flex flex-col gap-6 items-center rounded-xl">
                <div className="w-full">
                    <div className="mb-6 text-center">
                        <h2 className="font-syne text-3xl lg:text-4xl font-semibold">Reset Password</h2>
                        <h4 className="font-syne text-[#a1a1aa]">Enter your email and a new password</h4>
                    </div>

                    <div className="flex flex-col gap-4 mb-4">
                        <Input
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            name="email"
                        />
                        <PasswordVisibility
                            placeholder="New Password"
                            value={formData.password}
                            onChange={handleChange}
                            name="password"
                        />
                        <PasswordVisibility
                            placeholder="Confirm New Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            name="confirmPassword"
                        />
                    </div>

                    {error && (
                        <p className="text-[#ff4d6d] text-sm mt-4 text-center">{error}</p>
                    )}
                    {success && (
                        <p className="text-[#22C55E] text-sm mt-4 text-center">
                            Password reset! Redirecting to login...
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full text-white bg-[#ff4d6d] py-2 rounded-md hover:bg-[#ff2e63] transition-colors primary-button"
                >
                    Reset Password
                </button>
            </form>
        </div>
    )
}

export default ResetPasswordForm