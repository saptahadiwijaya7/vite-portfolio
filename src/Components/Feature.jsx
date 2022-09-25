/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';
import Bounce from 'react-reveal/Bounce';

const features = [
  {
    name: 'Javascript',
    description:
      'Exp: 2 Yrs',
    icon: 'js',
  },
  {
    name: 'HTML',
    description:
    'Exp: 2 Yrs',
    icon: '<>',
  },
  {
    name: 'CSS',
    description:
    'Exp: 2 Yrs',
    icon: 'css',
  },
  {
    name: 'React JS',
    description:
    'Exp: 2 Yrs',
    icon: '{ }',
  },
  {
    name: 'Next JS',
    description:
    'Exp: 1 Yrs',
    icon: 'next',
  },
  {
    name: 'Material UI',
    description:
    'Exp: 2 Yrs',
    icon: 'mui',
  },
  {
    name: 'Ant Design',
    description:
    'Exp: 2 Yrs',
    icon: 'antd',
  },
  {
    name: 'Tailwind',
    description:
    'Exp: 1 Yrs',
    icon: 'tw',
  },
]

export default function Feature() {
  return (
    <Bounce right>
    <div className="py-24 md:bg-blue-900/20 bg-blue-900/30" id="programming">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Programming
          </p>
          <p className="mt-4 max-w-2xl xl:text-xl text-md text-gray-400 lg:mx-auto">
            Berikut adalah beberapa programming language, library dan framework yang sudah pernah digunakan dalam mengerjakan project.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-0 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10  grid grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative py-4 md:py-0">
                <dt>
                  <div className="absolute flex text-md items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-gray-900">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-100 text-left">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-400 text-left">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </Bounce>
  )
}
