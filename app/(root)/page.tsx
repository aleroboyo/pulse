'use client'

import Input from "@/components/Input"
import { CiSearch } from "react-icons/ci"
import EventCard from "@/components/EventCard"
import FadeContent from '@/components/FadeContent'
  
const Home = () => {
  return (
    <FadeContent blur={true} duration={1000} ease="ease-out" initialOpacity={0}>

    <div className="font-inter">

      <section>

        <div className="flex flex-col gap-10 text-center mt-20">
          <h1 className="font-syne text-[40px] font-bold leading-10">Feel the<span className="text-[#ff4d6d]"> Pulse </span>of your city</h1>
          <p className="font-syne text-[#a1a1aa]">Discover the best events, parties, and experiences happening around you — in real time.</p>
          <div className="relative">
            <Input placeholder="Search events, venues..."/>
            <button className="absolute right-2 top-3"><CiSearch /></button>
          </div>
        </div>

      </section>

      <section>
        <EventCard/>
      </section>


    </div>

    </FadeContent>
  )
}

export default Home
