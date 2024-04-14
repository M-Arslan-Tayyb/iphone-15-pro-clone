import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import exploreVideo from '../assets/videos/explore.mp4'
import exploreImg1 from '../assets/images/explore1.jpg'
import exploreImg2 from '../assets/images/explore2.jpg'


import { useRef } from 'react';
// In summary, toggleActions specifies what actions to perform when the trigger element 
// enters or leaves the viewport, while start and end define the scroll positions 
// at which the animation should start and end relative to the trigger element.
//  Both properties are useful for controlling the behavior of animations triggered by scrolling.

// Register ScrollTrigger as a plugin
gsap.registerPlugin(ScrollTrigger);


const Features = () => {
    const videoRef = useRef(null);
    useGSAP(()=>{
        gsap.to('#title_feature',{
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:'#title_feature',
                toggleActions:'restart reverse restart reverse',
                start:'top 90%', //first top use hoga jab element ka top ai ga then 90% viewport ho jai ga to then Animation..
                end:'bottom 70%',
                scrub:1,
                
            }

        })
        gsap.to('#exploreVideo',{
            scrollTrigger:{
                trigger:'#exploreVideo',
                toggleActions:'paly pause reverse restart',
                start:'top 90%', //first top use hoga jab element ka top ai ga then 90% viewport ho jai ga to then Animation..
                end:'bottom 70%',
                scrub:1,
                onEnter: () => {
                    const video = videoRef.current;
                    if (video) {
                        video.play();
                    }
                }
            }
        })
        gsap.to('.g_grow',{
            scale:1,
            opacity:1,
            ease:'power1',
            scrollTrigger:{
                trigger:'.g_grow',
                scrub:5.5,
                toggleActions:'restart none restart none',
                start:'top 85%',
                end:'bottom 75%'
                
            },
            
        })
        gsap.to('.g_text',{
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:'.g_text',
                scrub:1,
                toggleActions:'restart none restart none',
                start:'top 85%',
                end:'bottom 75%'
                
            },
        })
    },[]);
  return (
    <section className='bg-zinc relative h-full common-padding overflow-hidden'>
        <div className='screen-max-width'>
            <div className='w-full mb-12'>
                <h1 id='title_feature' className='section-heading'>
                    Explore the full story.
                </h1>

            </div>
        </div>
        <div className='flex flex-col overflow-hidden justify-center items-center'>
            <div className='mt-32 mb-24 sm:pl-24 '>
                <h2 className='font-medium text-5xl lg:text-7xl'>Iphone Forged in titanium.</h2>

            </div>

        </div>
        <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video playsInline id="exploreVideo" className="w-full h-full object-cover object-center" preload="none" muted autoPlay ref={videoRef}>
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={exploreImg1} alt="titanium" className="feature-video g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={exploreImg2} alt="titanium 2" className="feature-video g_grow" />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is {' '}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium design
                    </span>,
                    using the same alloy that spacecrafts use for missions to Mars.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>


              </div>
            </div>
        </div>

    </section>
  )
}

export default Features