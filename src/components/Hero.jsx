import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from '@react-hook/media-query'; // Import the useMediaQuery hook
import heroVideoSrc from '../assets/videos/hero.mp4';
import heroVideoSrcSmall from '../assets/videos/smallHero.mp4';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const isMediumOrAbove = useMediaQuery('(min-width: 768px)'); // Check if screen size is medium or above
    
    
  const scrollRef = useRef(); // Add useRef for scroll animation

  useGSAP(() => {
    gsap.to('#hero_title', {
      delay: 1.7,
      opacity: 1,
      y: 0
    });

     
        // console.log('Medium or large screen detected'); // Add this line to check if medium or large screen condition is being triggered
      gsap.to('#hero_buy_and_price', {
        delay: 1.7,
        opacity: 1,
        y: 0,
        stagger: {
          amount: 1,
          opacity: 1,
          // from: 'center'
        }
      });
    
  }, []);

  return (
    <section className="max-h-full w-full  bg-black relative mt-8 mb-3 ">
      <div className="flex-center flex-col w-full">
        <p id="hero_title" className="opacity-0 section-heading">
          iphone 15 pro
        </p>
        <div className="flex-center ">
          <video autoPlay muted className="w-9/12 md:w-10/12">
            {isMediumOrAbove ? (
              <source src={heroVideoSrc} />
            ) : (
              <source src={heroVideoSrcSmall} />
            )}
          </video>
        </div>
        <div id='hero_buy_and_price' ref={scrollRef} className='flex-center flex-col  translate-y-20 relative opacity-0'>
          <button className='btn '>Buy</button>
          <p className='font-normal text-xl '> From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;


