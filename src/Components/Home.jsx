/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { MyCarousel } from './Carousel';
import logo from '../assets/logo.svg';
import Bounce from 'react-reveal/Bounce';
import blueBg from '../assets/blueBg.png';

const navigation = [
  { name: 'Programming', href: '#programming' },
  { name: 'Tools', href: '#tools' },
  { name: 'Experience', href: '#experience' },
  { name: 'About', href: '#about' },
]

export default function Home() {
  return (
    <>
      <Bounce left>
        <div className="relative bg-gradient-to-l from-blue-900/30 to-gray-900/30 overflow-hidden h-screen" id="hero">
          <div className="max-w-7xl mx-auto">
            <img src={blueBg} className="absolute lg:w-1/2 right-20 lg:opacity-50 opacity-0" />
            <div className="relative z-10 pb-4 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <Popover>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                          <span className="sr-only">Workflow</span>
                          <img
                            alt="Workflow"
                            className="h-8 w-auto sm:h-10"
                            src={logo}
                          />
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                      {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="font-medium text-white hover:text-orange-400">
                          {item.name}
                        </a>
                      ))}

                    </div>
                  </nav>
                </div>

                <Transition
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                  >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-orange-400.svg"
                            alt=""
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close main menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      {/* <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a> */}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>

              <main className="md:mt-20 mt-2 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-52">
                <div className="sm:text-left lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block text-white xl:inline">Portfolio</span>{' '}
                    <span className="block text-blue-500 xl:inline">Sapta Hadiwijaya</span>
                  </h1>
                  <h4 className='text-xl tracking-tight font-extrabold text-white mt-4'>
                    <span>Junior Web Developer</span>
                  </h4>
                  <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Profiling dapat lebih efektif dan efisien melalui media sosial, klik tautan dalam carousel disamping untuk mengunjungi.
                  </p>
                  <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Source code dan desain portfolio dapat dilihat melalui tombol dibawah.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="https://www.figma.com/file/rAkaOzei2imDzX7SJuotIp/Untitled?node-id=0%3A1"
                        target="_blank"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 md:py-4 md:text-lg md:px-10"
                      >
                        Figma
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="https://github.com/saptahadiwijaya7"
                        target="_blank"
                        className="w-full flex items-center justify-center px-8 py-3 border border-blue-500 text-base font-medium rounded-md text-blue-500 bg-transparent hover:bg-transparent md:py-4 md:text-lg md:px-10"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-48 lg:w-1/3 w-1/2 mx-auto text-center">
            <MyCarousel />
          </div>
        </div>
      </Bounce>

    </>
  )
}
