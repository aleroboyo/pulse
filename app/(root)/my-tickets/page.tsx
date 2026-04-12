'use client'

import { usePulse } from "@/context/PulseContext"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

const MyTickets = () => {
  const { user, myTickets } = usePulse()
  const router = useRouter()

  if (!user) {
    return (
      <div className="font-inter mt-20 md:mt-30 flex flex-col items-center gap-6 text-center px-4">
        <h2 className="font-syne text-3xl font-semibold">My Tickets</h2>
        <p className="text-[#a1a1aa]">You need to be logged in to view your tickets</p>
        <div className="flex gap-4">
          <button
            onClick={() => router.push('/login')}
            className="text-[#ff4d6d] border border-[#ff4d6d] px-6 py-2 rounded-md hover:bg-[#ff4d6d] hover:text-white transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => router.push('/signup')}
            className="bg-[#ff4d6d] text-white px-6 py-2 rounded-md hover:bg-[#ff2e63] transition-colors"
          >
            Sign Up
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="font-inter mt-20 md:mt-30 px-4 md:px-8 lg:px-40">

      <div className="mb-10">
        <h2 className="font-syne text-3xl lg:text-4xl font-semibold">My Tickets</h2>
        <p className="text-[#a1a1aa] mt-1">Welcome back, {user.name}</p>
      </div>

      {myTickets.length === 0 ? (
        <div className="flex flex-col items-center gap-6 text-center py-20">
          <p className="text-[#a1a1aa] text-lg">You have not booked any events yet</p>
          <Link href='/'>
            <button className="bg-[#ff4d6d] text-white px-6 py-2 rounded-md hover:bg-[#ff2e63] transition-colors">
              Explore Events
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myTickets.map(event => (
            <div
              key={event.id}
              className="bg-[#111115] border-[0.5px] border-[#f5f5f5]/10 rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="relative">
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={500}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-linear-to-br from-[#1a0a10] to-[#3d0d20] flex items-center justify-center">
                    <span className="text-4xl">🎟</span>
                  </div>
                )}
               
                <span className="absolute top-3 left-3 bg-[#22C55E] text-white text-[10px] font-medium uppercase tracking-wide px-3 py-1 rounded-full">
                  Booked ✓
                </span>
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="font-syne font-bold text-lg leading-snug">{event.title}</h3>

                <div className="flex flex-col gap-1 text-sm text-[#a1a1aa]">
                  <p className="flex items-center"> <Image src='/Calendar Icon - Transparent.png' alt="Calendar Icon" width={50} height={50} /> {event.date} at {event.time}</p>
                  <p className="flex items-center"> <Image src='/Location Icon - Transparent.png' alt="Location Icon" width={50} height={50} /> {event.location}</p>
                  <p className="flex items-center"> <Image src='/Price Tag Icon - Transparent.png' alt="Price Tag Icon" width={50} height={50} /> {event.price === 'Free' ? 'Free' : `₦${Number(event.price).toLocaleString()}`}</p>
                </div>

                {/* Fake QR placeholder */}
                <div className="mt-auto pt-4 border-t border-[#1F1F23] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#a1a1aa] uppercase tracking-wide">Ticket ID</span>
                    <span className="text-xs font-mono text-[#f5f5f5]">
                      #{event.id.slice(0, 8).toUpperCase()}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-0.5">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 ${Math.random() > 0.4 ? 'bg-black' : 'bg-white'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <Link href={`/event/${event.id}`}>
                  <button className="w-full mt-2 border border-[#ff4d6d] text-[#ff4d6d] py-2 rounded-md text-sm hover:bg-[#ff4d6d] hover:text-white transition-colors">
                    View Event
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyTickets
