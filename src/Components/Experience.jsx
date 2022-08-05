/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import {MyCarouselExp} from './CarouselExp'
import Bounce from 'react-reveal/Bounce'

const experience = [
    {
      name: 'Finanku Web Apps',
      description:'In house project Finanku, menggunakan React JS',
    },
    {
      name: 'Angstrom Web Apps',
      description: 'In house project Angstrom, menggunakan Next JS dan Ant Design',
    },
    {
      name: 'Angstrom Admin',
      description: 'In house project Angstrom, menggunakan React Admin dan Material UI',
    },
  ]

export default function Experience() {
    return (
        <Bounce right>
            <div className='my-20' id="experience">
                <div className="lg:text-center my-10">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                        Experience
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
                        Memiliki pengalaman berkontribusi dalam development fintech web apps dan personal loan apps dan admin panel
                    </p>
                </div>
                <div className="relative bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

                            <Popover>
                                <MyCarouselExp />
                            </Popover>
                        </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-900 pl-4">
                        {experience.map((item, index) => (
                            <div className="relative pt-8 px-4 sm:px-6 lg:px-8 text-left" key={index}>
                                <h4 className="text-md tracking-tight font-bold text-gray-900 sm:text-5xl md:text-3xl">
                                    <span className="block text-orange-400 xl:inline">{item.name}</span>
                                </h4>
                                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-2 md:text-xl lg:mx-0">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Bounce>
    )
}
