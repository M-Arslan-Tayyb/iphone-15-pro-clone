import React from 'react'
import chip from '../assets/images/chip.jpeg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import frameImg from '../assets/images/frame.png'
import frameVid from '../assets/videos/frame.mp4'
import { useRef } from 'react'




const HowItWorks = () => {
    const videoRef = useRef(null);
    useGSAP(()=>{
        gsap.from('#A17Chip', 
        { opacity:0,

        
        })
        gsap.to('#A17Chip', 
        { duration:2,
            scale:0.5,
            ease: 'power2.inOut',
            scrollTrigger:{
                trigger:'#A17Chip',
                scrub:1,
                toggleActions:'restart none none none',
                start:'top 60%', //first top use hoga jab element ka top ai ga then 90% viewport ho jai ga to then Animation..
                end:'bottom 70%',
                
            }

        
        })
        gsap.to('.g_fadeIn',{
            y:0,
            opacity:1,
            


        })
        gsap.to(videoRef.current,{
            scrollTrigger:{
                trigger:videoRef.current.children,
                scrub:1,
                toggleActions:'play none none none',
                start:'top 60%', //first top use hoga jab element ka top ai ga then 90% viewport ho jai ga to then Animation..
                end:'bottom 70%',
                
            }
        })
       
    })
  return (
    <section className='w-full relative overflow-hidden common-padding'>
        <div className='flex-center flex-col items-center' >
            <img src={chip} alt='A17Chip' id='A17Chip'  />
            <h2 className="hiw-title">
            A17 Pro chip.
            <br /> A monster win for gaming.
            </h2>

            <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
            
            </p>

            {/* frame: */}
            <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={frameVid} type="video/mp4" />
                </video>
              </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p>
          </div>

          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                    A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                    <span className="text-white">
                      best graphic performance by far
                    </span>.
                  </p>

                  <p className="hiw-text g_fadeIn">
                   Mobile {' '}
                    <span className="text-white">
                      games will look and feel so immersive
                    </span>,
                     with incredibly detailed environments and characters.
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="hiw-text">New</p>
                <p className="hiw-bigtext">Pro-class GPU</p>
                <p className="hiw-text">with 6 cores</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks