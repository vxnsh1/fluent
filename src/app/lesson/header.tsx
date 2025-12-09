import { Progress } from "@/components/ui/progress";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";
import { useExitModal } from "../../../store/useexitmodal";

type Props = {
    hearts: number,
    percentage: number,
    hasActiveSubscription: boolean,
};

export const Header = ({hearts, percentage, hasActiveSubscription}: Props) => {
    const { open } = useExitModal();
  return (
    <header className="lg:p-12 pt-5 px-10 flex gap-x-7 items-center justify-between max-w-285 mx-auto w-full">
        <X
            onClick={open}
            className="text-slate-500 hover:opacity-75 transition cursor-pointer"
        />
        <Progress value={percentage} />
        <div className="text-gray-800 flex items-center font-bold">
            <Image
                src="/hearts.svg"
                height={16}
                width={16}
                alt="heart"
                className="mr-2 -mt-1"
            />
            {hasActiveSubscription ? <InfinityIcon className="h-6 w-6 stroke-3" /> : hearts}
        </div>
    </header>
  )
}
