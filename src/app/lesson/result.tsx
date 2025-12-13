import { cn } from "@/lib/utils"
import Image from "next/image"

type Props = {
    value: number,
    variant: "points" | "hearts",
}
export const Result = ({value, variant}: Props) => {
    const src = variant === "hearts" ? "/hearts.svg" : "/points.svg";
    const width = variant === "hearts" ? "16" : "24";
    const height = variant === "hearts" ? "16" : "24"
  return (
    <div className={cn(
        "rounded-2xl border-4 w-full bg-gray-700 border-gray-700")}>
        <div className={cn(
            "p-2 text-white rounded-t-xl font-bold text-center text-xs uppercase bg-gray-700"
        )}>
            {variant === "hearts" ? "Hearts Left" : "Total XP"}
        </div>
        <div className={cn(
            "rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-lg"
        )}>
            {value}
            <Image src={src} alt={variant} width={width} height={height} className="ml-2 -mt-1"/>
        </div>
    </div>
  )
}
