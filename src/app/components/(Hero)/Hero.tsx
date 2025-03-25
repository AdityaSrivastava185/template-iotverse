import React from 'react'

const Hero = () => {
    return (
        <div>
            <main className="relative z-10">
                <section className="text-center px-4 pt-20 pb-10">
                    <div className="inline-flex items-center bg-[#060413] text-white px-4 py-2 rounded-full border-1 border-[#ffff]/20 mb-6">
                        EZEBUDDIES - An IoT Service
                    </div>

                    <h1 className="text-white text-5xl md:text-6xl font-bold max-w-5xl mx-auto leading-tight">
                    Transforming IoT with AI-Powered Automation.
                    </h1>

                    <p className="text-white text-lg md:text-xl mt-6 max-w-3xl mx-auto">
                    Revolutionize your business with AI-powered IoT automation. Unlock intelligent, scalable, and adaptive solutions designed to optimize efficiency, enhance decision-making, and drive innovation—effortlessly.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center mt-12 gap-4">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md flex items-center justify-center transition">
                            Our Services
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </button>
                        <button className="bg-transparent border border-gray-500 text-white hover:bg-gray-800 py-3 px-6 rounded-md transition">
                            See Plans
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Hero
