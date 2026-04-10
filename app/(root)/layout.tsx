'use client'

import LightRays from "@/components/LightRays"
import Hamburger from "@/components/Hamburger"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (

        <div className="relative min-h-screen bg-[#0b0b0f] px-6 py-4">

            <div className="absolute inset-0 z-0 w-full overflow-hidden h-full">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#FF4D6D"
                    raysSpeed={0.6}
                    lightSpread={2.5}
                    rayLength={20}
                    pulsating={true}
                    fadeDistance={0.85}
                    saturation={1.2}
                    followMouse={true}
                    mouseInfluence={0.08}
                    noiseAmount={0.05}
                    distortion={0.1}
                />

                <div className="md:hidden lg:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-[#ff4d6d] rounded-full opacity-20 blur-[120px]"/>
            </div>

            <div>
                <Hamburger />
            </div>

            <div className="flex-1">
                {children}
            </div>


        </div>
    )
}

export default Layout