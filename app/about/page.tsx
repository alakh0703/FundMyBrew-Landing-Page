import Signature from "@/assets/signature.png"
import Image from "next/image"
import { Cute_Font } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Cute_Font({ weight: ['400'], style: "normal", subsets: ["latin"] });

export default function About() {
    return (
        <div className="w-[100%] flex flex-col pl-[10%] pr-[10%] lg:pl-[32%] lg:pr-[30%]" >

            <p className={cn(inter.className, "text-center text-4xl md:text-8xl pt-10 pb-2")}> Our Journey</p>
            <p className="text-left leading-9">
                At FundMyBrew, we envision a world where every individual is a creator, and our mission is to empower a million people to thrive through their creative endeavors by 2030. <br /><br />

                Founded in 2024, FundMyBrew was born out of a shared passion for supporting creators and simplifying the path to financial independence. Our founders, Alakh Patel, initially navigated the challenges of relying on advertising income for their creative pursuits. Recognizing the limitations of this model, we set out to create a platform that transcends transactional interactions, starting with a name that reflects the essence of meaningful connections. <br /><br />

                The inspiration for FundMyBrew arose from the realization that advertising models and algorithms often fall short in recognizing the true value of creators&apos; work. Our founders understood the importance of establishing direct relationships with audiences. Much like the pivotal role Adsense checks played for them, FundMyBrew provides a reliable channel for fans to express gratitude. Creators can reciprocate by offering exclusive content and community access, fostering a closer bond with their most dedicated supporters.
                <br /><br />
                Savor the journey with FundMyBrew – where creativity meets empowerment. Cheers to a future where every brew fuels the dreams of creators and their communities.
            </p>
            <div className="w-full mt-2">
                <Image src={Signature} alt="signature" width={300} />
            </div>
        </div>
    )
}
