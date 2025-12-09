import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
    title: string,

}

export const Header = ({ title }: Props) => {
    return (
        <div className="sticky top-0 pb-3 pt-5 lg:-mt-7 flex items-center justify-between lg:z-50 mb-10 bg-[#FAFDF6]">
            <Link href="/courses">
                <Button variant="ghost" size="sm">
                    <ArrowLeft className="h-5 w-5 stroke-2  text-neutral-400" />
                </Button>
            </Link>
            <h1 className="font-bold text-lg">
                {title}
            </h1>
            <div></div>
        </div>
    );
};