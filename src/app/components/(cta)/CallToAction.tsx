import React from 'react'

const CallToAction = () => {
    return (
        <div>
            <main className="flex-grow bg-black">
                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center text-center py-24 px-4 h-screen">
                    <div className="mb-8">
                        {/* <img src="/radison-logo.svg" alt="Radison" className="h-8" /> */}
                    </div>

                    <h1 className="text-5xl font-bold mb-4 max-w-2xl text-white">
                        Let's talk about<br />your next big move
                    </h1>

                    <p className="text-gray-300 mb-8 max-w-xl">
                        Hop on a call with us to see how our services can accelerate your growth.
                    </p>

                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md flex items-center">
                        Schedule a quick call
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <p className="text-sm text-gray-400 mt-4">It's Free</p>
                </section>
            </main>
        </div>
    )
}

export default CallToAction
