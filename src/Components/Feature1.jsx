/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import Bounce from 'react-reveal/Bounce';

const features = [
  {
    name: 'Latar Belakang',
    description:'D3',
    description2:' Manajemen Informatika',
    icon: "D3",
  },
  {
    name: 'Experience',
    description: '2 Tahun',
    description2: 'Front End Developer',
    icon: "2 tahun",
  },
  {
    name: 'Project',
    description: '0 Project',
    description2: 'Project Published',
    icon: "0",
  },
  {
    name: 'Experience',
    description: '2 Tahun',
    description2: 'Operation Assistant',
    icon: "2 tahun",
  },
]

export default function Feature1() {
  return (
    <Bounce left>
    <div className="xl:py-12" id="feature">
      <div className="max-w-7xl mx-auto right-0 px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <dl className="space-y-0 md:space-y-0 mt-0 md:grid md:grid-cols-2 pl-48 xl:pl-8 md:gap-x-8 md:gap-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="xl:border-l border-l-indigo-500 mb-4 relative w-5/6 h-20 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <dt>
                  <div className=" flex items-center xl:text-3xl text-md rounded-md text-blue-300">
                    {feature.icon}
                  </div>
                  
                </dt>
                
                <dd className="mt-0 text-sm xl:text-lg text-gray-400 text-left">{feature.description2}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </Bounce>
  )
}
