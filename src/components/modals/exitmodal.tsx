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
import { useExitModal } from "../../../store/useexitmodal";
import Image from "next/image";

export const ExitModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = useExitModal();

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
                        Hmm… Taking a break or rage quitting?
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        If you’re quitting… lowkey L move.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4 relative">
                    <div className="flex gap-x-5 w-full justify-center">
                        <Button className="w-1/3" size="lg" onClick={close}>
                            Keep Learning
                        </Button>
                        <Button variant="dangerOutline" className="w-1/3" size="lg" onClick={() => {
                            close();
                            router.push("/learn");
                        }}>
                            Quit Lesson
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};

