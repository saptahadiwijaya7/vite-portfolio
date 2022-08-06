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
            <div className='py-0 bg-blue-900/20' id="about">
                <div className="lg:text-left py-40 mx-auto max-w-7xl">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                        Tentang Saya
                    </p>
                    <div className='w-1/2  float-left'>

                       
                        <div>
                            
                            <p className="mt-10 max-w-4xl lg:mx-auto text-l text-gray-400">
                                Mulai menjadi front-end developer sejak tahun 2020, berawal dari divisi operasional yang kemudian berubah haluan ikut berpartisipasi mengerjakan project website kantor yang menggunakan react js,
                                hingga akhirnya terus belajar menjadi seorang front end developer hingga saat ini. 
                            </p>
                        </div>
                        <img src={self} className="lg:w-1/6 mr-4 mt-4 float-left" />
                        <p className="mt-10 text-xl text-gray-200">
                            Sapta Hadiwijaya
                        </p>
                        <p className="mt-0 text-l text-gray-400">
                            Junior Front End Dev
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
