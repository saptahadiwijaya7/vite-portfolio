import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import finanku from '../assets/finanku.png';
import angstrom from '../assets/angstrom.png';
import angstromAadmin from '../assets/angstrom-admin.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function MyCarouselExp() {

    const features = [
        {
            link: 'Finanku',
            image: finanku,
        },
        {
            link: 'Angstrom',
            image: angstrom,
        },
        {
            link: 'Angstrom Admin',
            image: angstromAadmin,
        },

    ]

    return (
        <div className='content-center pt-0 ml-6 mt-0 w-5/6'>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                {features.map((feature) => (
                    <div>
                        <img src={feature.image} />
                        <p className="legend hover:text-orange-600">{feature.link}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}