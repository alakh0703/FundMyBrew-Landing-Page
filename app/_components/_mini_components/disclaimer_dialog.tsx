import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function DialogDemo() {
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="ghost" className="hover:bg-[#ffd8d8]">Disclaimer</Button>
            </DialogTrigger>
            <DialogContent className="w-[600px] sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Disclaimer</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <p>
                        This website made for personal project and is not intended for any real use. <br />
                        It is heavily inspired by the <a href="https://www.buymeacoffee.com/" className="underline">Buy Me A Coffee</a><br /><br />
                        Contect me at <a href="mailto:alakhhbn007@gmail.com" className="underline">
                            alakhhbn007@gmail.com
                        </a> for any queries.
                    </p>
                </DialogDescription>

            </DialogContent>
        </Dialog>
    )
}
