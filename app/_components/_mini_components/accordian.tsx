import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils";
import { Gamja_Flower } from "next/font/google";

const inter = Gamja_Flower({ weight: ['400'], style: "normal", subsets: ["latin"] });

export function FaqAccordian() {
    return (
        <div className="w-full flex justify-center pt-10 flex-col items-center">
            <div className="w-full mb-20">
                <p className={cn(inter.className, "text-center text-3xl md:text-6xl mb-5")}>Frequently Asked Questions</p>
                <p className="text-center opacity-80 pl-10 pr-10">If you don&apos;t find your answers here, feel free to contact us at <span className="text-gray-500 underline">alakhhbn007@gmail.com</span></p>
            </div>
            <Accordion type="single" collapsible className="w-[90%] md:w-[35%]">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Who uses Fund My Brew?</AccordionTrigger>
                    <AccordionContent>
                        Anyone with an audience. Youtubers, musicians, podcasters, writers, programmers, nonprofits, cosplayers, you name it.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How do I get paid?</AccordionTrigger>
                    <AccordionContent>
                        You get paid to your local bank account. We currently offer bank deposits to creators from over 1 country (i.e. Canada).
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How can my audience pay?</AccordionTrigger>
                    <AccordionContent>
                        We support all major credit and debit cards and Google pay.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Is there any fee to use Fund My Brew?</AccordionTrigger>
                    <AccordionContent>
                        We do not charge a monthly fee. All features including publishing and emails are free for everyone.

                        We charge a 5% transaction fee, and creators keep 95% of the earnings.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Is it safe & secure to use Fund My Brew?</AccordionTrigger>
                    <AccordionContent>
                        Absolutely Yes. We do not store any credit card information. All transactions are processed by Stripe, a leading payment processor.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>Who are we?</AccordionTrigger>
                    <AccordionContent>
                        I am a software developer and I built Fund My Brew as a side personal project.
                        Connect with me on LinkedIn <a href="https://www.linkedin.com/in/alakh-patel/" className="underline">here</a>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
