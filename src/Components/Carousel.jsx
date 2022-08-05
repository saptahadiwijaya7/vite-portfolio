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
            url: 'https://www.youtube.com/watch?v=_owAmDIsA5w'
        },
        {
            link: 'instagram/saptadragon',
            image: instagram,
            url: 'https://www.instagram.com/saptadragon/'
        },
        {
            link: 'blogger/sepuluhdimensi',
            image: blogger,
            url: 'https://www.sepuluhdimensi.online/'
        },

    ]

    return (
        <div className='content-center pt-16 mt-24 w-5/6'>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                {features.map((feature, index) => (
                    <div key={index}>
                        <img src={feature.image} />
                        <p className="legend hover:text-orange-600"><a href={feature.url} target="_blank">{feature.link}</a></p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}