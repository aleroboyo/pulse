'use client'

import Input from "@/components/Input"
import { CiSearch } from "react-icons/ci"
import EventCard from "@/components/EventCard"
import { useState } from "react"
import { usePulse } from "@/context/PulseContext"
import FadeContent from '@/components/FadeContent'

const Home = () => {
  const { allEvents } = usePulse()
  const [query, setQuery] = useState("")

  const filteredEvents = allEvents.filter(event => {
    const search = query.trim().toLowerCase()
    return (
      event.title.toLowerCase().includes(search) ||
      event.category.toLowerCase().includes(search) ||
      event.location.toLowerCase().includes(search)
    )
  })

  return (
    <FadeContent blur={true} duration={1000} ease="ease-out" initialOpacity={0}>
      <div className="font-inter">
        <section>
          <div className="flex flex-col gap-10 lg:gap-15 text-center mt-20 md:mt-30 md:px-30 lg:px-74">
            <h1 className="font-syne text-[40px] font-bold leading-10 md:text-[54px] lg:text-[64px] md:leading-12 lg:leading-14">
              Feel the <span className="text-[#ff4d6d]">Pulse</span> of your city
            </h1>
            <p className="font-syne text-[#a1a1aa] lg:px-22 lg:text-[24px]">
              Discover the best events, parties, and experiences happening around you — in real time.
            </p>
            <div className="relative">
              <Input
                placeholder="Search events, categories, venues..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="absolute right-2 top-3"><CiSearch /></button>
            </div>
          </div>
        </section>

        <section>
          <EventCard events={filteredEvents} />
        </section>
      </div>
    </FadeContent>
  )
}

export default Home