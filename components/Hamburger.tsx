'use client'

import { useState } from "react"
import { CiMenuFries } from "react-icons/ci"
import { IoClose } from "react-icons/io5"
import Link from "next/link"

const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="flex justify-between items-center font-inter">
            <Link href='/'>
                <div className="flex items-center gap-2 text-[22px] font-bold font-syne">
                    <div className="logo-dot"></div>
                    <button>Pulse</button>
                </div>
            </Link>

            <div className="lg:hidden">
                <button onClick={() => setMenuOpen(prev => !prev)} className="text-[22px]  relative z-1001">
                    {menuOpen ? <IoClose /> : <CiMenuFries />}
                </button>

                {menuOpen && (
                    <>
                        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-999" />
                        <div className="z-1000 fixed top-0 right-0 h-screen mt-15 w-80 md:w-150 bg-black py-6 px-10 flex flex-col gap-4 lg:gap-6 -mr-6 menuSlide md:px-20 md:py-15 md:text-lg md:gap-8">
                            <Link href='/'>
                                <button>Explore Events</button>
                            </Link>
                            <Link href='/my-tickets'>
                                <button>My Tickets</button>
                            </Link>
                            <Link href='/create-event'>
                                <button>Create Event</button>
                            </Link>
                            <a href='mailto:aleroboyo0@gmail.com'>
                                <button>Help</button>
                            </a>
                            <Link href='/login'>
                                <button>Login</button>
                            </Link>
                            <Link href='/signup'>
                                <button>Sign Up</button>
                            </Link>
                        </div>
                    </>
                )}
            </div>

            <div className="hidden lg:flex text-[#a1a1aa] gap-8 lg:flex-row font-inter items-center">
                <Link href='/'>
                    <button className="hover:text-[#ff4d6d]">Explore Events</button>
                </Link>
                <Link href='/my-tickets'>
                    <button className="hover:text-[#ff4d6d]">My Tickets</button>
                </Link>
                <Link href='/create-event'>
                    <button className="hover:text-[#ff4d6d]">Create Event</button>
                </Link>
                <a href='mailto:aleroboyo0@gmail.com'>
                    <button className="hover:text-[#ff4d6d]">Help</button>
                </a>
                <Link href='/login'>
                    <button className="text-[#ff4d6d] border-[#ff4d6d]">Login</button>
                </Link>
                <Link href='/signup'>
                    <button className="text-white bg-[#ff4d6d] px-4 py-2 rounded-md">Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

export default Hamburger
