"use client"
import DhrumitIcon from "@/assets/dhrumit.jpeg";
import GitanshIcon from "@/assets/gitansh.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import { Lilita_One } from "next/font/google";

const inter = Lilita_One({ weight: ['400'], style: "normal", subsets: ["latin"] });

export default function Main() {

    // Your creative journey, your rules. Fund My Brew is your all-in-one support platform. From fan contributions to client payments and exclusive memberships, fuel your passion seamlessly. Elevate your content creation with the support it deserves.
    return (
        <motion.div
            className={`w-[100%] flex h-[100vh]`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div
                className="w-[20%] flex flex-col pt-[80px]"
            >
                <motion.div className="hidden w-[180px] h-[180px] rounded-lg mb-2 ml-2 flex-col pt-2 items-center shadow-lg rotate-6 lg:flex"
                    initial={{ x: -100, rotate: 12, opacity: 0 }}
                    animate={{ x: 20, rotate: 12, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}  // delay for initial to animate
                    whileHover={{ scale: 1.02, transition: { duration: 0 } }}

                >
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                        <Image src={DhrumitIcon} width={150} height={150} alt="profile_image" />
                    </div>
                    <div className="w-full text-center text-[0.8rem] font-bold leading-4 mt-3 mb-3">Dhrumit Patel is Aspiring <br />software engineer with a passion</div>
                    <div className="flex justify-center items-center text-[0.8rem]"><Heart size={15} fill="" className="mr-1" />69 supporters</div>
                </motion.div>
                <motion.div className="hidden w-[180px] h-[180px] rounded-lg mb-2 ml-28 flex-col pt-2 items-center shadow-lg hover:scale-[1.02] -rotate-12 lg:flex"

                    initial={{ x: -100, rotate: 0, opacity: 0 }}

                    animate={{ x: 10, rotate: -12, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 }}  // delay for initial to animate
                    whileHover={{ scale: 1.02, transition: { duration: 0 } }}

                >
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                        <Image src={GitanshIcon} width={150} height={150} alt="profile_image" />
                    </div>
                    <div className="w-full text-center text-[0.8rem] font-bold leading-4 mt-3 mb-3">Gitansh Mittal is Aspiring <br />Data Scientist with a passion</div>
                    <div className="flex justify-center items-center text-[0.8rem]"><Heart size={15} fill="" className="mr-1" />377 supporters</div>
                </motion.div>
                <motion.div className="hidden w-[180px] h-[180px] rounded-lg mb-2 ml-10 flex-col pt-2 items-center shadow-lg hover:scale-[1.02] rotate-12 lg:flex"
                    whileHover={{ scale: 1.02, transition: { duration: 0 } }}

                    initial={{ x: -100, rotate: 0, opacity: 0 }}

                    animate={{ x: 10, rotate: 12, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                >
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                        <Image src={DhrumitIcon} width={150} height={150} alt="profile_image" />
                    </div>
                    <div className="w-full text-center text-[0.8rem] font-bold leading-4 mt-3 mb-3">Dhrumit Patel is Aspiring <br />software engineer with a passion</div>
                    <div className="flex justify-center items-center text-[0.8rem]"><Heart size={15} fill="" className="mr-1" />3 supporters</div>
                </motion.div>
            </div>
            <div className="w-[60%] flex flex-col items-center pt-[50px] md:pt-[100px]">
                <h1 className={cn(inter.className, "text-5xl md:text-8xl")}>Fuel your</h1>
                <h1 className={cn(inter.className, "text-7xl mt-4 md:text-8xl")}>Passion</h1>
                <p className="mt-[30px] text-[#9d9d78]">Embrace Support. Monetize Your Talent.</p>
                <Button className="mt-[30px] w-[200px] h-[50px] text-lg transition duration-300 hover:scale-[1.05] md:w-[250px]"  >Start for free<ArrowRight className="ml-2" /></Button>
            </div>
            <div className="w-[20%] flex flex-col pt-[80px]">
                <motion.div className="hidden w-[180px] h-[180px] rounded-lg mb-2 mr-15 flex-col pt-2 items-center shadow-lg rotate-12 hover:scale-[1.02] lg:flex"
                    initial={{ x: 100, rotate: 0, opacity: 0 }}

                    animate={{ x: 10, rotate: -12, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0 } }}

                >
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                        <Image src={DhrumitIcon} width={150} height={150} alt="profile_image" />
                    </div>
                    <div className="w-full text-center text-[0.8rem] font-bold leading-4 mt-3 mb-3">Dhrumit Patel is Aspiring <br />software engineer with a passion</div>
                    <div className="flex justify-center items-center text-[0.8rem]"><Heart size={15} fill="" className="mr-1" />3 supporters</div>
                </motion.div>
                <motion.div className="hidden w-[180px] h-[180px] rounded-lg mb-2 ml-20 flex-col pt-2 items-center shadow-lg hover:scale-[1.02] rotate-12 lg:flex"
                    initial={{ x: 100, rotate: 0, opacity: 0 }}

                    animate={{ x: 10, rotate: 12, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0 } }}

                >
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                        <Image src={DhrumitIcon} width={150} height={150} alt="profile_image" />
                    </div>
                    <div className="w-full text-center text-[0.8rem] font-bold leading-4 mt-3 mb-3">Dhrumit Patel is Aspiring <br />software engineer with a passion</div>
                    <div className="flex justify-center items-center text-[0.8rem]"><Heart size={15} fill="" className="mr-1" />3 supporters</div>
                </motion.div>
                <motion.div className="hidden w-[180px] h-[180px] rounded-lg mb-2 mr-6 flex-col pt-2 items-center shadow-lg hover:scale-[1.02] -rotate-12 lg:flex"
                    initial={{ x: 100, rotate: 0, opacity: 0 }}

                    animate={{ x: 10, rotate: -12, opacity: 1 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0 } }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                >
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                        <Image src={DhrumitIcon} width={150} height={150} alt="profile_image" />
                    </div>
                    <div className="w-full text-center text-[0.8rem] font-bold leading-4 mt-3 mb-3">Dhrumit Patel is Aspiring <br />software engineer with a passion</div>
                    <div className="flex justify-center items-center text-[0.8rem]"><Heart size={15} fill="" className="mr-1" />3 supporters</div>
                </motion.div>
            </div>
        </motion.div>
    );
}
