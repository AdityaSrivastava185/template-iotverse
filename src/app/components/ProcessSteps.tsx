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

                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-zinc-700 bg-zinc-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src="/mobile.png"
                      alt=""
                    />
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
                    we design IoT systems that prioritize speed, efficiency, and reliability, ensuring seamless operations in both B2B and B2C environments
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
                    Security is at the core of Ezebuddies' IoT ecosystem, ensuring your data, devices, and networks remain protected at all times.
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
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                          Dashboard.tsx
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                      </div>
                    </div>
                    <div className="px-6 pb-14">
                      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                        {`
import { useState } from 'react';
import { Switch } from '@headlessui/react';

function Example() {
  const [enabled, setEnabled] = useState(true);

  return (
    <form action="/notification-settings" method="post">
      <Switch checked={enabled} onChange={setEnabled} name="notifications">
        {/* Add your switch UI here */}
      </Switch>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Submit
      </button>
    </form>
  );
}
    `}
                      </pre>
                    </div>

                  </div>

                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

