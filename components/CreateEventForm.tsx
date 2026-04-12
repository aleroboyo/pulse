'use client'

import { useState } from "react"
import { usePulse } from "@/context/PulseContext"
import { useRouter } from "next/navigation"
import Input from "./Input"

const CreateEventForm = () => {
    const { addEvent, user } = usePulse()
    const router = useRouter()
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        title: "", description: "", date: "", time: "",
        location: "", category: "", price: "", image: "", badge: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (!formData.title || !formData.date || !formData.time || !formData.location || !formData.price) {
            return setError("Please fill in all required fields")
        }

        if (!user) {
            router.push('/signup')
            return
        }

        const result = addEvent({
            id: crypto.randomUUID(),
            title: formData.title,
            description: formData.description,
            date: formData.date,
            time: formData.time,
            location: formData.location,
            category: formData.category,
            price: formData.price === 'Free' || formData.price === 'free' ? 'Free' : Number(formData.price),
            image: formData.image || undefined,
            badge: formData.badge || undefined,
            createdBy: user.name,
        })

        if (!result.success) return setError(result.message)
        router.push('/')
    }

    return (
        <div className="font-inter mt-20 md:mt-50 lg:mt-40 px-4 md:px-26 lg:px-55">
            <form onSubmit={handleSubmit} className="bg-[#111115] border border-[#f5f5f5]/10 px-4 py-8 flex flex-col gap-8 items-center rounded-xl">
                <div className="w-full">
                    <div className="mb-8 text-center">
                        <h2 className="font-syne text-3xl lg:text-4xl font-semibold">Create Event</h2>
                        <h4 className="font-syne text-[#a1a1aa]">Share your event with Lagos</h4>
                    </div>

                    <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                        <div>
                            <Input label="Name" value={formData.title} onChange={handleChange} name="title" />
                            <Input label="Description" value={formData.description} onChange={handleChange} name="description" />
                            <div className="md:hidden">
                                <div className="grid grid-cols-2 gap-2 mt-6">
                                    <Input label="Date (e.g. Fri 11 Apr)" value={formData.date} onChange={handleChange} name="date" />

                                    <Input label="Time (e.g. 8pm)" value={formData.time} onChange={handleChange} name="time" />
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <Input label="Price (number or Free)" value={formData.price} onChange={handleChange} name="price" />
                                    <Input label="Category (e.g. Music, Tech)" value={formData.category} onChange={handleChange} name="category" />
                                </div>
                            </div>
                            <Input label="Venue / Location" value={formData.location} onChange={handleChange} name="location" />
                            <Input label="Badge (e.g. Free, Tonight)" value={formData.badge} onChange={handleChange} name="badge" />
                            <div className="md:hidden">
                                <Input label="Cover Image URL" value={formData.image} onChange={handleChange} name="image" />
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="grid grid-cols-2 gap-2 mt-6">
                                <Input label="Date (e.g. Fri 11 Apr)" value={formData.date} onChange={handleChange} name="date" />

                                <Input label="Time (e.g. 8pm)" value={formData.time} onChange={handleChange} name="time" />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <Input label="Price (number or Free)" value={formData.price} onChange={handleChange} name="price" />
                                <Input label="Category (e.g. Music, Tech)" value={formData.category} onChange={handleChange} name="category" />
                            </div>
                            <Input label="Cover Image URL" value={formData.image} onChange={handleChange} name="image" />
                        </div>
                    </div>

                    {error && <p className="text-[#ff4d6d] text-sm mt-4 text-center">{error}</p>}
                </div>

                <button type="submit" className="w-full text-white bg-[#ff4d6d] py-2 rounded-md hover:bg-[#ff2e63] transition-colors">
                    Publish Event
                </button>
            </form>
        </div>
    )
}

export default CreateEventForm