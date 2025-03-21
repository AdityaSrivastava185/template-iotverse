import React from 'react'

const Navbar = () => {
    return (
        <div>
            <main className="relative z-10">
                <nav className="flex justify-between items-center px-12 py-4">
                    <div className="flex items-center">
                        <span className="text-white font-bold text-2xl flex items-center cursor-pointer">
                            EZEBUDDIES
                        </span>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <a
                            href="#process"
                            className="text-white hover:text-purple-300 transition"
                        >
                            Home
                        </a>
                        <a
                            href="#services"
                            className="text-white hover:text-purple-300 transition"
                        >
                            About
                        </a>
                        <a
                            href="#benefits"
                            className="text-white hover:text-purple-300 transition"
                        >
                            Approach
                        </a>
                        <a
                            href="#plans"
                            className="text-white hover:text-purple-300 transition"
                        >
                            Plans
                        </a>
                        <a
                            href="#contact"
                            className="text-white hover:text-purple-300 transition"
                        >
                            Contact
                        </a>
                    </div>

                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md flex items-center transition cursor-pointer">
                        Get in touch
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2"
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
                </nav>
            </main>
        </div>
    )
}

export default Navbar
