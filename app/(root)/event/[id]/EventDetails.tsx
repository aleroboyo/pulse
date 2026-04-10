'use client'

import { Event } from "@/data/events"

type Props = {
  event: Event
}

const EventDetails = ({ event }: Props) => {
  return (
    <div className="text-white p-10">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>{event.price}</p>

      <button className="mt-6 bg-[#ff4d6d] px-4 py-2 rounded-md">
        Book Event
      </button>
    </div>
  )
}

export default EventDetails
