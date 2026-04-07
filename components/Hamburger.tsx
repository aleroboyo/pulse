'use client'

import { useState } from "react"
import { CiMenuFries } from "react-icons/ci"
import Link from "next/link"

const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="flex justify-between items-center">

            <div className="flex items-center gap-2 text-[22px] font-bold">
                <div className="logo-dot"></div>
                Pulse
            </div>

            <div className="lg:hidden">
                <button onClick={() => setMenuOpen(prev => !prev)} className="text-[22px]">
                    <CiMenuFries />
                </button>

                {menuOpen && (
                    <ul className="text-[#a1a1aa] flex flex-col gap-4 lg:flex-row font-inter">
                        <Link href='/'>
                            <li>Explore Events</li>
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
                        <li>Explore Events</li>
                    </Link>
                    <a href='mailto:aleroboyo0@gmail.com'>
                        <li>Help</li>
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
