/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';
import Bounce from 'react-reveal/Bounce';
import git from '../assets/git.png'
import figma from '../assets/figma.png'
import postman from '../assets/postman.png'
import visualStudio from '../assets/visual-studio.png'

const features = [
  {
    name: 'Git',
    description:
      'Level: Beginner',
      description2:
      'Exp: Pull request, branching, stashing, rebase',
    icon: git,
  },
  {
    name: 'Postman',
    description:
    'Level: Beginner',
    description2:
      'Exp: API call test',
    icon: postman,
  },
  {
    name: 'Figma',
    description:
    'Level: Beginner',
    description2:
      'Exp: Sketching, importing static web design',
    icon: figma,
  },
  {
    name: 'VS Code',
    description:
    'Level: Beginner',
    description2:
      'Exp: Git Lens Extension',
    icon: visualStudio,
  },
]

export default function Feature2() {
  return (
    <Bounce left>
    <div className="py-24 bg-blue-900/20 " id="tools">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className=" text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Tools
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Berikut adalah beberapa programming tools yang sudah pernah digunakan dalam mengerjakan project.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-20">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-blue-900 border-2 border-blue-500/20 rounded-md w-5/6 h-32 p-4">
                <dt>
                  <div className="absolute flex items-center text-3xl justify-center h-24 w-24 rounded-md bg-blue-500 text-white">
                     <img src={feature.icon} className="h-12 w-12" aria-hidden="true"/>
                  </div>
                  <p className="ml-28 text-xl leading-6 font-medium text-gray-100 text-left">{feature.name}</p>
                </dt>
                <dd className="mt-4 ml-28 text-base text-gray-400 text-left">{feature.description}</dd>
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
