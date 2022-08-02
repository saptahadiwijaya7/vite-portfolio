/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';
import Bounce from 'react-reveal/Bounce';

const features = [
  {
    name: 'Javascript',
    description:
      'Level: Beginner',
    icon: GlobeAltIcon,
  },
  {
    name: 'HTML',
    description:
    'Level: Beginner',
    icon: ScaleIcon,
  },
  {
    name: 'CSS',
    description:
    'Level: Beginner',
    icon: LightningBoltIcon,
  },
  {
    name: 'React JS',
    description:
    'Level: Beginner',
    icon: AnnotationIcon,
  },
  {
    name: 'Next JS',
    description:
    'Level: Beginner',
    icon: LightningBoltIcon,
  },
  {
    name: 'Material UI',
    description:
    'Level: Beginner',
    icon: AnnotationIcon,
  },
  {
    name: 'Ant Design',
    description:
    'Level: Beginner',
    icon: AnnotationIcon,
  },
  {
    name: 'Tailwind',
    description:
    'Level: Beginner',
    icon: AnnotationIcon,
  },
]

export default function Feature() {
  return (
    <Bounce right>
    <div className="py-24 bg-gray-900" id="feature">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Programming
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Berikut adalah beberapa programming language, library dan framework yang sudah pernah digunakan dalam mengerjakan project.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
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
