import React from 'react'

export default function Footer() {
    return (
        <div className="bg-black relative bottom-0 left-0 right-0 w-full h-48">
            <div className="flex justify-around ">
                <div className="m-8">
                    {/* <h1 className="text-white text-sm text-center ">
                        Find us at:git 
                    </h1>
                    <h3 className="text-white text-xs text-center">
                        <a
                            href="shine_clothes@hotmail.com"
                            className="text-white text-xs text-center no-underline"
                        >
                            shine_clothes@hotmail.com
                            
                        </a>
                    </h3> */}
                </div>
                <div className="m-8">
                    <h1 className="text-white text-sm text-center ">Contact</h1>
                    <h3 className="text-white text-xs text-center">
                        Business Phone: +54 991 923178
                    </h3>
                    <h3 className="text-white text-xs text-center">
                        Wanna be sponsor?
                    </h3>
                    <h3 className="text-white text-xs text-center">
                        shine_clothes@hotmail.com
                    </h3>
                </div>
                <div className=" m-8">
                    <h1 className="text-white text-sm text-center">SHINE TEAM</h1>
                    <h3 className="text-white text-xs text-center">
                        <a
                            href="/aboutus"
                            className="text-white text-xs text-center no-underline"
                        >
                            About Us
                        </a>
                    </h3>
                    <h3 className="text-white text-xs text-center">
                        Henry - Final Project - FT31b Team 17
                    </h3>
                </div>
            </div>
            <div className="mb-0 text-center font-light ">
                <h1 className="text-white text-sm">
                    Shine All Rights Reserved © 2023
                </h1>
            </div>
        </div>
    )
}
