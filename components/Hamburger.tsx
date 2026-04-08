'use client'

import { useState } from "react"
import { CiMenuFries } from "react-icons/ci"
import { IoClose } from "react-icons/io5"
import Link from "next/link"
import AnimatedContent from "./AnimatedContent"

const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="flex justify-between items-center font-inter">

            <Link href='/'>
                <div className="flex items-center gap-2 text-[22px] font-bold font-syne">
                    <div className="logo-dot"></div>
                    Pulse
                </div>
            </Link>

            <div className="lg:hidden">
                <button onClick={() => setMenuOpen(prev => !prev)} className="text-[22px] relative">
                    {menuOpen ? <IoClose /> : <CiMenuFries />}
                </button>

                {menuOpen && (
                        <ul className="z-1000 fixed top-0 right-0 h-screen mt-15 w-80 bg-black py-6 px-10 flex flex-col gap-4 lg:gap-6 -mr-6 menuSlide">
                            <Link href='/'>
                                <li>Explore Events</li>
                            </Link>
                            <Link href='/my-tickets'>
                                <li>My Tickets</li>
                            </Link>
                            <Link href='/create-event'>
                                <li>Create Event</li>
                            </Link>
                            <a href='mailto:aleroboyo0@gmail.com'>
                                <li>Help</li>
                            </a>
                            <Link href='/login'>
                                <li>Login</li>
                            </Link>
                            <Link href='/signup'>
                                <li>Sign Up</li>
                            </Link>
                        </ul>
                )}
            </div>

            <div className="hidden lg:block">
                <ul className="text-[#a1a1aa] flex flex-col gap-8 lg:flex-row font-inter items-center">
                    <Link href='/'>
                        <li className="hover:text-[#ff4d6d] cursor-pointer">Explore Events</li>
                    </Link>
                    <Link href='/my-tickets'>
                        <li className="hover:text-[#ff4d6d] cursor-pointer">My Tickets</li>
                    </Link>
                    <Link href='/create-event'>
                        <li className="hover:text-[#ff4d6d] cursor-pointer">Create Event</li>
                    </Link>
                    <a href='mailto:aleroboyo0@gmail.com'>
                        <li className="hover:text-[#ff4d6d]">Help</li>
                    </a>
                    <Link href='/login'>
                        <li className="text-[#ff4d6d] border-[#ff4d6d]">Login</li>
                    </Link>
                    <Link href='/signup'>
                        <li className="text-white bg-[#ff4d6d] px-4 py-2 rounded-md">Sign Up</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Hamburger
