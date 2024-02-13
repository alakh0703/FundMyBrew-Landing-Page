"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";

import CoffeeIcon from "@/assets/brew.png";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const openSidebar = () => {
        setIsOpen(true);
    }
    const closeSidebar = () => {
        setIsOpen(false);
    }

    return (
        <nav className="w-[100%] h-[80px] flex justify-between p-2 pt-4 pb-4 ">
            <div className="hidden sm:flex pl-2 w-[30%] items-center md:block">
                <Button variant="ghost" className="mr-10">
                    <Link href="/faq">FAQ</Link>
                </Button>
                <Button variant="ghost">
                    <Link href="/how-it-works">How it works?</Link>
                </Button>
            </div>

            <div className="w-[30%] flex justify-center items-center">
                <Image src={CoffeeIcon} alt="FundMyBrew" width={50} height={60} />
                <p className="font-mono text-lg antialiased font-bold leading-4	text-center	ml-2">
                    <Link href="/">Fund my brew</Link></p>
            </div>
            <div className="hidden w-[30%] pr-4 flex items-center justify-end  md:flex sm:flex">
                <Button>Try it</Button>
            </div>
            <div className="flex w-[30%] pr-4 items-center justify-end sm:hidden">
                <MenuIcon size={24} className="cursor-pointer" onClick={openSidebar} />
                {isOpen && <Sidebar close={closeSidebar} />}
            </div>
        </nav>
    );
}
