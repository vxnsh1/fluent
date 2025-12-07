import { Button } from "@/components/ui/button"
import { NotebookText } from "lucide-react"
import Link from "next/link"

type Props = {
    title: string,
    description: string, 
}

export const UnitBanner = ({title, description}: Props) => {
    return (
        <div className="w-full rounded-xl bg-black/80 p-5 flex items-center justify-between text-white border border-gray-700">
            <div className="space-y-2.5">
                <h3 className="text-2xl font-bold">
                    {title}
                </h3>
                <p className="text-lg">
                    {description}
                </p>
            </div>
            <Link href="/lesson">
                <Button size="lg" variant="ghost" className="text-white hover:text-black hidden lg:flex">
                    <NotebookText className="mr-2"/>
                    Continue
                </Button>
            </Link>
        </div>
    )
}

