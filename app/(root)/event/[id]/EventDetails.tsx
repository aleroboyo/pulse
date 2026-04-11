'use client'

import { Event } from "@/data/events"
import Image from "next/image"
import { usePulse } from "@/context/PulseContext"
import { useRouter } from "next/navigation"

type Props = {
    event: Event
}

const EventDetails = ({ event }: Props) => {
    const { user, bookTicket, isBooked } = usePulse()
    const router = useRouter()

    const handleBook = () => {
        if (!user) {
            router.push('/signup')
            return
        }
        bookTicket(event.id)
    }

    const booked = isBooked(event.id)
    const buttonClass = `mt-6 px-4 py-2 rounded-md text-center w-full transition-colors ${
        booked
            ? 'bg-[#1F1F23] text-[#a1a1aa] cursor-not-allowed'
            : 'bg-[#ff4d6d] text-white hover:bg-[#ff2e63]'
    }`
    const buttonText = booked ? 'Booked ✓' : user ? 'Book Event' : 'Sign up to book'

    return (
        <div className="font-inter mt-14 md:mt-30 md:px-4 lg:px-50 lg:mt-6 flex flex-col items-center">

            <div>
                {event.image && (
                    <Image
                        src={event.image}
                        alt={event.title}
                        width={350}
                        height={350}
                        className="rounded-3xl md:w-150 lg:w-70"
                    />
                )}
            </div>

            <div className="md:grid md:grid-cols-[70%_30%] md:gap-3 lg:gap-6 items-center w-full">
                <div className="bg-[#111115] p-6 flex flex-col gap-6 mt-10 rounded-3xl">
                    <div className="flex items-start justify-between">
                        <h1 className="text-3xl font-bold font-syne">{event.title}</h1>
                        {event.badge && (
                            <span className="text-[10px] lg:text-[12px] rounded-full bg-[#ff4d6d] px-2 py-1 whitespace-nowrap ml-4 mt-1">
                                {event.badge}
                            </span>
                        )}
                    </div>

                    {/* Mobile details */}
                    <div className="md:hidden flex flex-col gap-2">
                        <p className="flex items-center">
                            <Image src='/Calendar Icon - Transparent.png' alt="Calendar Icon" width={50} height={50} />
                            {event.date}
                        </p>
                        <p className="flex items-center">
                            <Image src='/Location Icon - Transparent.png' alt="Location Icon" width={50} height={50} />
                            {event.location}
                        </p>
                        <p className="flex items-center">
                            <Image src='/Price Tag Icon - Transparent.png' alt="Price Tag Icon" width={50} height={50} />
                            {event.price === 'Free' ? 'Free' : `₦${Number(event.price).toLocaleString()}`}
                        </p>
                    </div>

                    <h3 className="font-syne text-xl font-semibold">About this Event</h3>
                    <p>{event.description}</p>

                    <h3 className="font-syne text-xl font-semibold">Organizer</h3>
                    <p>{event.createdBy}</p>

                    {/* Mobile book button */}
                    <button onClick={handleBook} disabled={booked} className={`md:hidden ${buttonClass}`}>
                        {buttonText}
                    </button>
                </div>

                {/* Desktop sidebar */}
                <div className="hidden md:flex flex-col bg-[#111115] justify-center p-6 mt-10 rounded-3xl gap-4">
                    <p className="flex items-center">
                        <Image src='/Calendar Icon - Transparent.png' alt="Calendar Icon" width={50} height={50} />
                        {event.date}
                    </p>
                    <p className="flex items-center">
                        <Image src='/Location Icon - Transparent.png' alt="Location Icon" width={50} height={50} />
                        {event.location}
                    </p>
                    <p className="flex items-center">
                        <Image src='/Price Tag Icon - Transparent.png' alt="Price Tag Icon" width={50} height={50} />
                        {event.price === 'Free' ? 'Free' : `₦${Number(event.price).toLocaleString()}`}
                    </p>
                    <button onClick={handleBook} disabled={booked} className={buttonClass}>
                        {buttonText}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default EventDetails