import Image from 'next/image';
import React from 'react';

export default function ProcessSection() {

  return (
    <>
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Everything you need to deploy your app
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg border-1 border-zinc-600 bg-gradient-to-tl from-[#100a2e] to-[#000000] bg-opacity-95  overflow-hidden lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                    Mobile friendly
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-zinc-400 max-lg:text-center">
                  A responsive, user-friendly web application that allows users to control, monitor, and customize their IoT devices from anywhere
                  </p>
                </div>

                <div className="max-w-6xl px-6">
                  <div className="bg-gradient-to-tl from-[#100a2e] to-[#000000] bg-opacity-95 p-6 rounded-lg shadow-lg">
                    <h2 className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                      Mobile-Friendly Web Application
                    </h2>
                    <p className="text-gray-400 mt-3 text-center md:text-left">
                      Easily control and monitor your IoT devices from anywhere with our
                      intuitive, responsive web application.
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
                      <ul className="text-gray-300 text-sm space-y-3">
                        <li><strong>Real-time Monitoring</strong> - Get live updates on your devices.</li>
                        <li><strong>Effortless Control</strong> - Adjust settings anytime, anywhere.</li>
                        <li><strong>AI Insights</strong> - Optimize energy usage with smart analytics.</li>
                        <li><strong>Cross-Device Support</strong> - Works on mobile, tablet, and desktop.</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg border-1 border-zinc-600 bg-gradient-to-tl from-[#100a2e] to-[#000000] bg-opacity-95  overflow-hidden max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Performance</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-zinc-400 max-lg:text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs"
                    src="/performance.png"
                    alt="IoT Performance of device"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg border-1 border-zinc-600 bg-gradient-to-tl from-[#100a2e] to-[#000000] bg-opacity-95  overflow-hidden"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Security</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-zinc-400 max-lg:text-center">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    className="h-[min(152px,40cqw)] object-cover"
                    src="/secure.png"
                    alt="IoT security"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg border-1 border-zinc-600 bg-gradient-to-tl from-[#100a2e] to-[#000000] bg-opacity-95  overflow-hidden max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white  max-lg:text-center">
                    Powerful Integrations
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-zinc-400 max-lg:text-center">
                  Seamless integration framework that enables users to connect their IoT devices
                  </p>
                </div>
                <div className="max-w-6xl mx-auto px-6">
                  <div className="bg-gradient-to-tl from-[#100a2e] to-[#000000] bg-opacity-95 p-6 rounded-lg shadow-lg">
                    <h2 className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                      Powerful Integration & Customization
                    </h2>
                    <p className="text-gray-400 mt-3 text-center md:text-left">
                      Connect your IoT devices effortlessly with our smart integration platform,
                      allowing full customization to suit your needs.
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
                      <ul className="text-gray-300 text-sm space-y-3">
                        <li><strong>Seamless Connectivity</strong> - Integrate IoT devices with ease.</li>
                        <li><strong>Smart Automations</strong> - Customize workflows for optimal efficiency.</li>
                        <li><strong>API & Cloud Support</strong> - Connect to external platforms effortlessly.</li>
                        <li><strong>Enterprise-Grade Security</strong> - Keep your data protected at all times.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

