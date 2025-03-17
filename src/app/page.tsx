"use client"

import Head from "next/head";
import Image from "next/image";
import ProcessSection from "./components/ProcessSteps";
import PricingSection from "./components/Pricingcard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-tl from-[#100a2e] to-[#000000] bg-opacity-95 relative overflow-hidden">
        <Head>
          <title>IoTVERSE - An IoT Service Startup</title>
          <meta
            name="description"
            content="Transforming workflows with AI powered automation"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="relative z-10">
          {/* Navigation Bar */}
          <nav className="flex justify-between items-center px-12 py-4">
            <div className="flex items-center">
              <span className="text-white font-bold text-2xl flex items-center">
              
              IoTVERSE
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#process"
                className="text-white hover:text-purple-300 transition"
              >
                Process
              </a>
              <a
                href="#services"
                className="text-white hover:text-purple-300 transition"
              >
                Services
              </a>
              <a
                href="#benefits"
                className="text-white hover:text-purple-300 transition"
              >
                Benefits
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

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md flex items-center transition">
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

          <section className="text-center px-4 pt-20 pb-10">
            <div className="inline-flex items-center bg-[#060413]  text-white px-4 py-2 rounded-xl border-1 border-[#ffff]/20 mb-6">
              IoTVERSE - An IoT Service
            </div>

            <h1 className="text-white text-5xl md:text-6xl font-bold max-w-5xl mx-auto leading-tight">
              Transforming workflows with AI powered automation
            </h1>

            <p className="text-white text-lg md:text-xl mt-6 max-w-3xl mx-auto">
              Experience the future of business with intelligent, scalable
              automation solutions tailored to your needs
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

      {/* Section 2 */}

      <div className="bg-black min-h-screen flex flex-col justify-center relative overflow-hidden py-16">
      {/* Stars Background - Add small dots as stars */}

      {/* Who We Are Section */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex justify-center mb-16">
          <button className="bg-black bg-opacity-60 border border-gray-800 text-white hover:bg-gray-900 py-2 px-6 rounded-md transition">
            Who We Are
          </button>
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl font-base leading-tight mb-16">
            We are Radison, we help founders like you to automate their day to day business operations with the help of AI
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
              Your path to excellence
            </h2>
            <p className="text-white text-xl opacity-80">
              A simple, effective approach to deliver excellence.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Section s3 */}

    <ProcessSection/>

    {/* Section S4 */}

    <ProcessSection/>


    {/* Section s5 */}

    <PricingSection/>

    {/* Section s6 */}

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

      <footer className="border-t border py-12 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo and Company Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className="bg-gray-800 p-1">
                    <rect width="24" height="24" fill="none" />
                    <path d="M5,5 L19,5 L19,19 L5,19 Z" fill="white" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-white">Radison</h2>
              </div>
              <p className="text-gray-400 mb-6">
                Your trusted partner in AI solutions, creating smarter systems for smarter businesses.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="#" className="h-8 w-8 bg-zinc-400 flex items-center justify-center rounded-full">
                  {/* <FaTwitter className="text-white" /> */}
                </a>
                <a href="#" className="h-8 w-8 bg-zinc-400 flex items-center justify-center rounded-full">
                  {/* <FaInstagram className="text-white" /> */}
                </a>
                <a href="#" className="h-8 w-8 bg-zinc-400 flex items-center justify-center rounded-full">
                  {/* <FaFacebookF className="text-white" /> */}
                </a>
                <a href="#" className="h-8 w-8 bg-zinc-400 flex items-center justify-center rounded-full">
                  {/* <FaPinterest className="text-white" /> */}
                </a>
              </div>
            </div>
            
            {/* Sections Column */}
            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white">Sections</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="/benefits" className="text-gray-400 hover:text-white">Benefits</Link></li>
                <li><Link href="/plans" className="text-gray-400 hover:text-white">Plans</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            {/* Pages Column */}
            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white">Pages</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link href="/coming-soon" className="text-gray-400 hover:text-white">Coming soon</Link></li>
                <li><Link href="/404" className="text-gray-400 hover:text-white">404</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800 text-sm text-white">
            <p>Policy and cookies</p>
            <p>Terms and conditions</p>
            <p>© All right reserved to IotVerse</p>
          </div>
        </div>
      </footer>
   


    </>
  );
}
