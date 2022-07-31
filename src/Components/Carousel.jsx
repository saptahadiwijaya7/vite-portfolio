import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import blogger from  '../assets/blogger.png';
import youtube from  '../assets/youtube.png';
import skype from  '../assets/skype.png';
import instagram from  '../assets/instagram.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function MyCarousel() {

    return (
        <div className='content-center pt-28 mt-10 w-5/6'>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
            <div>
                <img src={youtube} />
                <p className="legend hover:text-orange-600"><a href=''>youtube/gawaian</a></p>
            </div>
            <div>
                <img src={instagram} />
                <p className="legend hover:text-orange-600"><a href=''>instagram/saptadragon</a></p>
            </div>
            <div>
                <img src={blogger} />
                <p className="legend hover:text-orange-600"><a href=''>blogger/sepuluhdimensi</a></p>
            </div>
            <div>
                <img src={skype} />
                <p className="legend hover:text-orange-600"><a href=''>skype/itddp</a></p>
            </div>
        </Carousel>
        </div>
    )
}