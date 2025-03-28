import React from 'react'

const About = () => {
    return (
        <div>
            <div className="bg-black min-h-screen flex flex-col justify-center relative overflow-hidden py-16">
                {/* Who We Are Section */}
                <div className="container mx-auto px-4 z-10">
                    <div className="flex justify-center mb-16">
                        <button className="bg-black bg-opacity-60 border border-gray-800 text-white hover:bg-blue-700 py-2 px-6 rounded-md transition">
                            About Us
                        </button>
                    </div>

                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-xl md:text-2xl font-base leading-tight mb-16 text-zinc-300">
                            We are <span className='text-2xl text-purple-300 font-bold '>EZEBUDDIES</span> <br /> we specialize in supplying tailor-made IoT devices for both businesses (B2B) and individual consumers (B2C). Our full-stack IoT services include everything from device customization to AI-powered insights, app integration, and fast deployment—all in a subscription-based model for flexibility and affordability.

                        </h2>
                    </div>

                    {/* Process Section */}
                    <div className="mt-32">
                        <div className="flex justify-center mb-16">
                            <button className="bg-black bg-opacity-60 border border-gray-800 text-white hover:bg-gray-900 py-2 px-6 rounded-md transition">
                                Process
                            </button>
                        </div>

                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-white text-4xl md:text-6xl font-medium mb-6">
                                Elevating Standards, Delivering Excellence
                            </h2>
                            <p className="text-white opacity-80 text-xl md:text-2xl">
                                We combine innovation, reliability, and AI-driven intelligence to create high-performance IoT solutions that redefine efficiency and security. Our cutting-edge technology ensures seamless automation, unmatched security, and effortless scalability—helping you stay ahead in a connected world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
