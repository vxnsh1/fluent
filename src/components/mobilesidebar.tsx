import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Sidebar } from "./sidebar"
import { Equal } from "lucide-react"

export const MobileSidebar = () => {
  return (
    <div>
        <Sheet>
            <SheetTrigger>
                <Equal className="cursor-pointer p-1 hover:bg-gray-700/20 rounded transition-colors duration-300 mt-1" size={32} />
            </SheetTrigger>
            <SheetContent className="p-0 z-99" side="left">
                <Sidebar />
            </SheetContent>
        </Sheet>
    </div>
  )
}