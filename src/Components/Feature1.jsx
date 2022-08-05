/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import Bounce from 'react-reveal/Bounce';

const features = [
  {
    name: 'Latar Belakang',
    description:'D3',
    description2:'Manajemen Informatika',
    icon: "D3",
  },
  {
    name: 'Experience',
    description: '2 Tahun',
    description2: 'Front End Dev',
    icon: "2y",
  },
  {
    name: 'Project',
    description: '0 Project',
    description2: 'Published',
    icon: "0",
  },
]

export default function Feature1() {
  return (
    <Bounce left>
    <div className="py-4 bg-gray-900" id="feature">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-20">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-gray-800 rounded-md w-5/6 h-32 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <dt>
                  <div className="absolute flex items-center text-3xl justify-center h-24 w-24 rounded-md bg-orange-500 text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-28 text-xl leading-6 font-medium text-gray-100 text-left">{feature.name}</p>
                </dt>
                <dd className="mt-4 ml-28 text-base text-gray-400 text-left">{feature.description}</dd>
                <dd className="mt-0 ml-28 text-base text-gray-400 text-left">{feature.description2}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </Bounce>
  )
}
