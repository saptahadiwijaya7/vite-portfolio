import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import blogger from '../assets/blogger.png';
import youtube from '../assets/youtube.png';
import skype from '../assets/skype.png';
import instagram from '../assets/instagram.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function MyCarousel() {

    const features = [
        {
            link: 'youtube/gawaian',
            image: youtube,
        },
        {
            link: 'instagram/saptadragon',
            image: instagram,
        },
        {
            link: 'blogger/sepuluhdimensi',
            image: blogger,
        },
        {
            link: 'skype/itddp',
            image: skype,
        },

    ]

    return (
        <div className='content-center pt-16 mt-24 w-5/6'>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                {features.map((feature) => (
                    <div>
                        <img src={feature.image} />
                        <p className="legend hover:text-orange-600"><a href=''>{feature.link}</a></p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}