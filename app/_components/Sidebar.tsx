"use client"
import CoffeeIcon from "@/assets/brew.png";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'

interface SidebarProps {
    close: () => void;
}

export default function Sidebar({ close }: SidebarProps) {
    const router = useRouter()

    const closeSidebar = () => {
        close();
    }

    const go2faq = () => {
        router.push('/faq');
        close();
    }
    const go2howItWorks = () => {
        router.push('/how-it-works');
        close();
    }
    const go2about = () => {
        router.push('/about');
        close();
    }
    const go2privacy = () => {
        router.push('/privacy');
        close();
    }
    const go2terms = () => {
        router.push('/terms-and-conditions');

        close();
    }



    return (
        <motion.div className="w-full absolute right-0 top-0 h-[100vh] bg-white z-10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-[100%] flex justify-between items-center mt-4">

                <div className="flex w-[70%] justify-center items-center">
                    <Image src={CoffeeIcon} alt="FundMyBrew" width={50} height={60} />
                    <p className="font-mono text-lg antialiased font-bold leading-4	text-center	ml-2">
                        <Link href="/">Fund my brew</Link></p>
                </div>
                <X size={30} className="cursor-pointer mr-4" onClick={closeSidebar} />
            </div>
            <div className="w-full">
                <Button className="w-full mt-4" variant="ghost" onClick={go2faq}>
                    FAQs
                </Button>
                <Button className="w-full mt-4" variant="ghost" onClick={go2howItWorks}>
                    How it works?
                </Button>
                <Button variant="ghost" className="w-full mt-4" onClick={go2about}>
                    About
                </Button>
                <Button variant="ghost" className="w-full mt-4" onClick={go2privacy}>
                    Privacy

                </Button>
                <Button variant="ghost" className="w-full mt-4" onClick={go2terms}>
                    Terms & Conditions

                </Button>

            </div>
        </motion.div >
    );
}
