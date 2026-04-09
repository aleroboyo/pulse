'use client'

import LightRays from "@/components/LightRays"
import Hamburger from "@/components/Hamburger"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (

        <div className="relative  h-full bg-[#0b0b0f] px-6 py-4">

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
            </div>

            <div>
                <Hamburger />
            </div>

            <div>
                {children}
            </div>


        </div>
    )
}

export default Layout