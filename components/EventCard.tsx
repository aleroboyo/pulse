'use client'

import { events, Event } from "@/data/events"
import Image from "next/image"

const EventCard = () => {
    return (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 font-inter text-[14px]">

            {events.map((event: Event) => (
                <div key={event.id} className="bg-[#111115] rounded-4xl p-8 flex flex-col items-center">
                    <div className="relative">
                        {event.image ? (<Image
                            src={event.image}
                            alt={event.title}
                            width={250}
                            height={150}
                            className=""
                        />) : (
                        <span className="text-[10px] absolute top-3 left-2 rounded-full bg-[#ff4d6d] px-2 py-1 ">{event.badge}</span>)}
                        
                    </div>

                    <div className="mt-6 flex flex-col gap-2">
                        <div className="text-[#a1a1aa] flex gap-4">
                            <p>{event.date}</p>
                            <p>{event.time}</p>
                            <p>{event.location}</p>
                        </div>

                        <h3 className="text-lg font-semibold">{event.title}</h3>

                        <div className="flex justify-between">
                            <p className="text-[#ff4d6d]">{event.price}</p>
                            <p className="text-[#a1a1aa]">{event.category}</p>
                        </div>
                    </div>    
                </div>
            ))}

        </div>
    )
}

export default EventCard
