/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { MyCarouselExp } from './CarouselExp'
import Bounce from 'react-reveal/Bounce'
import self from '../assets/self.png'

const experience = [
    {
        name: 'Finanku Web Apps',
        description: 'In house project Finanku, menggunakan React JS',
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

export default function About() {
    return (
        <Bounce left>
            <div className='my-20' id="about">
                <div className="lg:text-center my-10 py-10 border-2 border-blue-500/20 rounded-xl">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                        Tentang Saya
                    </p>
                    <p className="mt-4 text-xl text-gray-400">
                        Sapta Hadiwijaya, Junior Front End Dev
                    </p>
                    <img src={self} className="lg:w-1/6 justify-items-center m-auto py-8" />
                    <p className="mt-4 max-w-4xl lg:mx-auto text-l text-gray-400">
                        Mulai menjadi front-end developer sejak tahun 2020, berawal dari divisi operasional yang kemudian berubah haluan ikut berpartisipasi mengerjakan project website kantor yang menggunakan react js,
                        hingga akhirnya terus belajar menjadi seorang front end developer hingga saat ini
                    </p>


                </div>
            </div>
        </Bounce>
    )
}
