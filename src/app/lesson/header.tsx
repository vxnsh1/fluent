import { Progress } from "@/components/ui/progress";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";

type Props = {
    hearts: number,
    percentage: number,
    hasActiveSubscription: boolean,
};

export const Header = ({hearts, percentage, hasActiveSubscription}: Props) => {
  return (
    <header className="lg:p-12 pt-5 px-10 flex gap-x-7 items-center justify-between max-w-285 mx-auto w-full">
        <X
            onClick={() => {}}
            className="text-slate-500 hover:opacity-75 transition cursor-pointer"
        />
        <Progress value={percentage} />
        <div className="text-gray-500 flex items-center font-bold">
            <Image
                src="/hearts.svg"
                height={32}
                width={32}
                alt="heart"
                className="mr-2"
            />
            {hasActiveSubscription ? <InfinityIcon className="h-6 w-6 strok-3" /> : hearts}
        </div>
    </header>
  )
}
