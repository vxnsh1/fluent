"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useHeartsModal } from "../../../store/useheartsmodal";

export const HeartsModal = () => {
   const router = useRouter(); 
   const onClick = () => {
        close();
        router.push("/shop");
    };
    
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = useHeartsModal();

    useEffect(() => setIsClient(true), []);

    if (!isClient) return null;

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center justify-center w-full mb-5">
                        <Image
                            src="/mascot_sad.svg"
                            alt="logo"
                            height={80}
                            width={80}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold">
                        You ran out of hearts!
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Go Pro for unlimited hearts, or purchase them in the store.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4 relative">
                    <div className="flex gap-x-5 w-full justify-center">
                        <Button className="w-1/2" size="lg" onClick={onClick}>
                            Get unlimited hearts
                        </Button>
                        <Button variant="primaryOutline" className="w-1/3" size="lg" onClick={() => {
                            close();
                        }}>
                            No thanks
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};

