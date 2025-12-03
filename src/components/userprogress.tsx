import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type Props = {
    activeCourse: { imageSrc: string, title: string },
    hearts: number,
    points: number,
    hasActiveSubscription: boolean,
}

export const UserProgress = ({ activeCourse, hearts, points, hasActiveSubscription }: Props) => {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full mt-2">
            <Link href="/courses">
                <Button variant="ghost">
                    <Image src={activeCourse.imageSrc} alt={activeCourse.title} width={32} height={32} className="rounded-md border" />
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost">
                    <Image src="/points.svg" alt="points" width={28} height={28} />
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost">
                    <Image src="/hearts.svg" alt="Hearts" width={18} height={18} className="mr-2 -mt-1" />
                    {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-3" /> : hearts}
                </Button>
            </Link>
        </div>
    );
};