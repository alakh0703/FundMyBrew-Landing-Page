"use client"
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DonationVector from "@/assets/donation_vector.png"
import MemberVector from "@/assets/membership_vector.png"
import PaymentVector from "@/assets/payment_vector.jpg"
import donVector from "@/assets/don.jpg"
import fanVector from "@/assets/abc.jpg"
import Image from 'next/image';


export default function InfoCards() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger animation only once
        rootMargin: '-100px 0px', // Adjust root margin as needed
    });
    const [ref2, inView2] = useInView({
        triggerOnce: true, // Trigger animation only once
        rootMargin: '-100px 0px', // Adjust root margin as needed
    });
    const [ref3, inView3] = useInView({
        triggerOnce: true, // Trigger animation only once
        rootMargin: '-100px 0px', // Adjust root margin as needed
    });
    const controls = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();

    useEffect(() => {
        if (inView) {
            // If component is in view, play the animation
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 1.5, ease: 'easeOut' },
            });
        }

        if (inView2) {
            // If component is in view, play the animation
            controls2.start({
                opacity: 1,
                y: 0,
                transition: { duration: 1.5, ease: 'easeOut' },
            });
        }

        if (inView3) {
            // If component is in view, play the animation
            controls3.start({
                opacity: 1,
                y: 0,
                transition: { duration: 1.5, ease: 'easeOut' },
            });
        }


    }, [inView, controls, inView2, controls2, inView3, controls3]);

    return (
        <div className="bg-[#f7f3f4] h-[fit-content] flex flex-col items-center pb-[100px]">
            <motion.div className="w-[90%] h-fit pb-10 md:h-[740px] bg-white mt-[100px] rounded-3xl pl-4 pr-4 md:w-[70%]" ref={ref}
                initial={{ opacity: 0, y: 70 }}
                animate={controls}
            >
                <p className="text-center mt-10 tracking-widest	font-bold text-[#beaaaa]">DONATIONS</p>
                <motion.h2 className="text-center mt-10 font-medium text-2xl md:text-6xl"
                    initial={{ opacity: 0, y: 70 }}
                    animate={controls}
                // transition={{ duration: 1.5 }}
                >Brewing Dreams,<br /> Pouring Support.</motion.h2>
                <motion.p className="text-center mt-10 md:pl-[150px] md:pr-[150px]"
                    initial={{ opacity: 0, y: 70 }}
                    animate={controls}

                >Empower Your Craft: Fuel My Brew, where fans
                    turn appreciation into empowerment.
                    Support your favorite creators with a simple brew – a gesture
                    that goes a long way in shaping their journey.</motion.p>
                <motion.div className='w-full flex justify-center pt-12'
                    initial={{ opacity: 0, y: 70 }}
                    animate={controls}
                >
                    <Image src={donVector} alt="" className='w-[60%] h-[200px] md:[45%] lg:w-[50%] md:h-[260px] lg:h-[360px]' />

                </motion.div>
            </motion.div>
            <motion.div className="w-[90%] h-fit pb-10 md:h-[740px] bg-white mt-[100px] rounded-3xl pl-4 pr-4 md:w-[70%]" ref={ref2}
                initial={{ opacity: 0, y: 70 }}
                animate={controls2}

            >
                <p className="text-center mt-10 tracking-widest	font-bold text-[#beaaaa]">PERSONALIZED PAYMENT LINKS</p>
                <motion.p className="text-center mt-10 font-medium text-2xl md:text-6xl"
                    initial={{ opacity: 0, y: 70 }}
                    animate={controls2}
                >Craft Your Payment Path</motion.p>
                <motion.p className="text-center mt-10 md:pl-[150px] md:pr-[150px]"
                    initial={{ opacity: 0, y: 70 }}
                    animate={controls2}
                >Unleash the power of personalized payment links. Seamlessly secure one-time support from sponsors and amplify your creative pursuits with a click.</motion.p>
                <motion.div className='w-full flex justify-center pt-12'
                    initial={{ opacity: 0, y: 70 }}
                    animate={controls2}
                >
                    <Image src={PaymentVector} alt="" className='w-[100%] h-[150px] md:w-[50%] md:h-[350px]' />

                </motion.div>
            </motion.div>
            <motion.div className="w-[90%] h-fit pb-10 md:h-[740px] bg-white mt-[100px] rounded-3xl pl-4 pr-4 md:w-[70%]" ref={ref3}
                initial={{ opacity: 0, y: 70 }}
                animate={controls3}
            >
                <p className="text-center mt-10 tracking-widest	font-bold text-[#beaaaa]">MEMBERSHIPS</p>
                <motion.p className="text-center mt-10 font-medium text-2xl md:text-6xl"
                    initial={{ opacity: 0, y: 70 }}
                    animate={controls3}
                >Fan the Flames of Loyalty</motion.p>
                <motion.p className="text-center mt-10 md:pl-[150px] md:pr-[150px]"
                    initial={{ opacity: 0, y: 70 }}
                    animate={controls3}
                >Unleash Exclusive Content and Sustain Your Passion with Memberships.</motion.p>
                <motion.div className='w-full flex justify-center pt-12'
                    initial={{ opacity: 0, y: 70 }}
                    animate={controls3}
                >
                    <Image src={fanVector} alt="" className=' w-[100%] h-[250px] md:w-[50%] md:h-[350px]' />

                </motion.div>
            </motion.div>
        </div>
    );
}
