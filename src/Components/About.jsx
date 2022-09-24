/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { MyCarouselExp } from './CarouselExp'
import Bounce from 'react-reveal/Bounce'
import self from '../assets/self.png'
import Feature1 from './Feature1'

export default function About() {
    return (
        <Bounce left>
            <div className='py-0 bg-blue-900/20 h-screen xl:h-auto' id="about">
                <div className="lg:text-left xl:py-40 pt-20 pb-40 mx-auto max-w-7xl pl-4">
                    <p className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                        Tentang Saya
                    </p>
                    <div className='w-1/2 float-left border-r xl:border-r-0'>
                        <div>
                            <p className="xl:mt-10 max-w-4xl mr-4 lg:mx-auto xl:text-md text-gray-400">
                                Mulai menjadi front-end developer sejak tahun 2020, berawal dari divisi operasional yang kemudian berubah haluan berpartisipasi mengerjakan project website kantor yang menggunakan react js.
                                Saat ini saya aktif mengelola konten digital milik sendiri yaitu web gawaian.com dan channel youtube gawaian. 
                            </p>
                        </div>
                        <img src={self} className="lg:w-1/6 w-1/3 mr-4 mt-4 float-left" />
                        <p className="xl:mt-10 mt-6 xl:text-xl text-xs text-gray-200">
                            Sapta Hadiwijaya
                        </p>
                        <p className="mt-0 text-xs xl:text-lg text-gray-400">
                            Front End Dev
                        </p>
                    </div>
                    <div className=''>
                        <Feature1 />
                    </div>
                </div>
            </div>
        </Bounce>
    )
}
