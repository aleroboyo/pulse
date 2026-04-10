'use client'

import { Event } from "@/data/events"
import Link from "next/link"
import Image from "next/image"
import AnimatedContent from './AnimatedContent'
import { usePulse } from "@/context/PulseContext"
import { useRouter } from "next/navigation"

const EventCard = ({ events }: { events: Event[] }) => {
    const { user, bookTicket, isBooked } = usePulse()
    const router = useRouter()

    const handleBook = (e: React.MouseEvent, eventId: string) => {
        e.preventDefault()  // stops Link from navigating
        if (!user) {
            router.push('/signup')
            return
        }
        bookTicket(eventId)
    }

    return (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-inter text-[14px] lg:px-40 md:px-8">

            {events.map((event: Event) => (
                <Link href={`/event/${event.id}`} className="block" key={event.id}>
                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        duration={1.2}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                    >
                        <div className="bg-[#111115] border-[0.5px] border-[#f5f5f5]/10 rounded-4xl p-8 flex flex-col items-center transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,77,109,0.2)] hover:cursor-pointer md:h-140 lg:h-150">
                            <div className="relative">
                                {event.image && (
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        width={250}
                                        height={150}
                                        className=""
                                    />
                                )}

                                {event.badge && (
                                    <span className="text-[10px] lg:text-[12px] absolute top-3 left-2 rounded-full bg-[#ff4d6d] px-2 py-1">
                                        {event.badge}
                                    </span>
                                )}
                            </div>

                            <div className="mt-6 flex flex-col gap-2 lg:gap-4 w-full">
                                <div className="text-[#a1a1aa] flex gap-4">
                                    <p>{event.date}</p>
                                    <p>{event.time}</p>
                                    <p>{event.location}</p>
                                </div>

                                <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">{event.title}</h3>

                                <div className="flex justify-between items-center">
                                    <p className="text-[#ff4d6d]">
                                        {event.price === 'Free' ? 'Free' : `₦${Number(event.price).toLocaleString()}`}
                                    </p>
                                    <p className="text-[#a1a1aa]">{event.category}</p>
                                </div>

                                <button
                                    onClick={(e) => handleBook(e, event.id)}
                                    disabled={isBooked(event.id)}
                                    className={`w-full py-2 rounded-lg text-sm font-medium transition-all mt-2
                                        ${isBooked(event.id)
                                            ? 'bg-[#1F1F23] text-[#a1a1aa] cursor-not-allowed'
                                            : 'bg-[#ff4d6d] text-white hover:bg-[#ff2e63]'
                                        }`}
                                >
                                    {isBooked(event.id) ? 'Booked ✓' : user ? 'Book now' : 'Sign up to book'}
                                </button>
                            </div>
                        </div>
                    </AnimatedContent>
                </Link>
            ))}

        </div>
    )
}

export default EventCard
