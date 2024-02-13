import { Button } from "@/components/ui/button";
import { DialogDemo } from "./_mini_components/disclaimer_dialog";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full bg-[#f6f3f4] h-[100px] flex md:pl-[25%] md:pr-[25%]">
            <div className="w-full flex flex-col md:flex-row justify-center items-center pb-20">
                <p className="text-sm mr-[200px] text-gray-500">@Fund My Brew</p>
                <Button variant="ghost" className="hover:bg-[#ffd8d8]">
                    <Link href="/about">About</Link>
                </Button>
                <Button variant="ghost" className="hover:bg-[#ffd8d8]">
                    <Link href="/privacy">Privacy</Link>

                </Button>
                <Button variant="ghost" className="hover:bg-[#ffd8d8]">
                    <Link href="/terms-and-conditions">Terms & Conditions</Link>

                </Button>
                <DialogDemo />
            </div>

        </div>
    );

}
