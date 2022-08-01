/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';
import Bounce from 'react-reveal/Bounce';

const features = [
  {
    name: 'Git',
    description:
      'Level: Beginner',
      description2:
      'Exp: Pull request, branching, stashing, rebase',
    icon: GlobeAltIcon,
  },
  {
    name: 'Postman',
    description:
    'Level: Beginner',
    description2:
      'Exp: API call test',
    icon: ScaleIcon,
  },
  {
    name: 'Figma',
    description:
    'Level: Beginner',
    description2:
      'Exp: Sketching, importing static web design',
    icon: LightningBoltIcon,
  },
  {
    name: 'VS Code',
    description:
    'Level: Beginner',
    description2:
      'Exp: Git Lens Extension',
    icon: AnnotationIcon,
  },
]

export default function Feature2() {
  return (
    <Bounce left>
    <div className="py-12 bg-gray-900" id="feature">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Tools
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Berikut adalah beberapa programming tools yang sudah pernah digunakan dalam mengerjakan project.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-20">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-gray-800 rounded-md w-5/6 h-32 p-4">
                <dt>
                  <div className="absolute flex items-center justify-center h-24 w-24 rounded-md bg-orange-500 text-white">
                    <feature.icon className="h-12 w-12" aria-hidden="true" />
                  </div>
                  <p className="ml-28 text-xl leading-6 font-medium text-gray-100 text-left">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-28 text-base text-gray-400 text-left">{feature.description}</dd>
                <dd className="mt-2 ml-28 text-base text-gray-400 text-left">{feature.description2}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </Bounce>
  )
}
