"use client"

import Head from "next/head";
import ProcessSection from "../components/ProcessSteps";
import PricingSection from "../components/Pricingcard";
import Navbar from "../components/(Navbar)/Navbar";
import About from "../components/(About)/About";
import Hero from "../components/(Hero)/Hero";
import Footer from "../components/(Footer)/Footer";
import CallToAction from "../components/(cta)/CallToAction";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-tl from-[#100a2e] to-[#000000] bg-opacity-95 relative overflow-hidden">
        <Head>
          <title>EZEBUDDIES - An IoT Service Startup</title>
          <meta
            name="description"
            content="Transforming workflows with AI powered automation"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Hero />
      </div>
      <About />
      <ProcessSection />
      <PricingSection />
      <CallToAction />
      <Footer />
    </>
  );
}
