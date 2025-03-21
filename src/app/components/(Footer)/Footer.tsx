import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="border-t border py-12 px-6 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center mb-4">
                                <h2 className="text-xl font-bold text-white">EZEBUDDIES</h2>
                            </div>
                            <p className="text-gray-400 mb-6">
                            Ezebuddies - Smart, Customizable IoT Solutions for Businesses & Consumers
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white">Sections</h3>
                            <ul className="space-y-2">
                                <li><Link href="/about" className="text-gray-400 hover:text-white">Home</Link></li>
                                <li><Link href="/services" className="text-gray-400 hover:text-white">About</Link></li>
                                <li><Link href="/benefits" className="text-gray-400 hover:text-white">Approach</Link></li>
                                <li><Link href="/plans" className="text-gray-400 hover:text-white">Plans</Link></li>
                                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between md:items-center mt-12 pt-8 border-t border-gray-800 text-sm text-white">
                        <p>Policy and cookies</p>
                        <p>Terms and conditions</p>
                        <p>© All right reserved to EZEBUDDIES</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
