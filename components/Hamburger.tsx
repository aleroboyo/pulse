'use client'

import { useState } from "react"
import { CiMenuFries } from "react-icons/ci"
import { IoClose } from "react-icons/io5"
import Link from "next/link"

const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="flex justify-between items-center font-inter">

            <Link href='/' className="flex items-center gap-2 text-[22px] font-bold font-syne">
                <div className="logo-dot"></div>
                Pulse
            </Link>

            <div className="lg:hidden">
                <button
                    onClick={() => setMenuOpen(prev => !prev)}
                    className="text-[22px] relative z-1001"
                >
                    {menuOpen ? <IoClose /> : <CiMenuFries />}
                </button>

                {menuOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-999"
                            onClick={() => setMenuOpen(false)}
                        />
                        <div className="fixed top-0 right-0 h-screen mt-15 w-80 md:w-150 bg-black py-6 px-10 flex flex-col gap-4 lg:gap-6 -mr-6 menuSlide md:px-20 md:py-15 md:text-lg md:gap-8 z-1000">
                            <Link href='/' onClick={() => setMenuOpen(false)} className="hover:text-[#ff4d6d] transition-colors">Explore Events</Link>
                            <Link href='/my-tickets' onClick={() => setMenuOpen(false)} className="hover:text-[#ff4d6d] transition-colors">My Tickets</Link>
                            <Link href='/create-event' onClick={() => setMenuOpen(false)} className="hover:text-[#ff4d6d] transition-colors">Create Event</Link>
                            <a href='mailto:aleroboyo0@gmail.com' className="hover:text-[#ff4d6d] transition-colors">Help</a>
                            <Link href='/login' onClick={() => setMenuOpen(false)} className="hover:text-[#ff4d6d] transition-colors">Login</Link>
                            <Link href='/signup' onClick={() => setMenuOpen(false)} className="hover:text-[#ff4d6d] transition-colors">Sign Up</Link>
                        </div>
                    </>
                )}
            </div>

            <div className="hidden lg:flex text-[#a1a1aa] gap-8 font-inter items-center">
                <Link href='/' className="hover:text-[#ff4d6d] transition-colors">Explore Events</Link>
                <Link href='/my-tickets' className="hover:text-[#ff4d6d] transition-colors">My Tickets</Link>
                <Link href='/create-event' className="hover:text-[#ff4d6d] transition-colors">Create Event</Link>
                <a href='mailto:aleroboyo0@gmail.com' className="hover:text-[#ff4d6d] transition-colors">Help</a>
                <Link href='/login' className="text-[#ff4d6d]">Login</Link>
                <Link href='/signup' className="text-white bg-[#ff4d6d] px-4 py-2 rounded-md hover:bg-[#ff2e63] transition-colors primary-button">Sign Up</Link>
            </div>
        </div>
    )
}

export default Hamburger