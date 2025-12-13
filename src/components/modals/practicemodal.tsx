"use client";

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
import { usePracticeModal } from "../../../store/usepracticemodal";

export const PracticeModal = () => {
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = usePracticeModal();

    useEffect(() => setIsClient(true), []);

    if (!isClient) return null;

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center justify-center w-full mb-5">
                        <Image
                            src="/hearts.svg"
                            alt="heart"
                            height={80}
                            width={80}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold">
                        Practice Lesson
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Practice lesson can be used to gain hearts. <br /> Note: No hearts are reduced even if wrong answer is selected.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4 relative">
                    <div className="flex gap-x-5 w-full justify-center">
                        <Button className="w-1/3" size="lg" onClick={() => {
                            close();
                        }}>
                            I understand
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};

