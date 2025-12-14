import { MobileSidebar } from "./mobilesidebar"
import { Sheet } from "./ui/sheet"

export const HamburgerMenu = () => {
  return (
    <nav className="lg:hidden px-4 h-12 flex items-center border-b fixed top-0 w-full z-50 bg-[#FAFDF6]">
         <MobileSidebar />
    </nav>
  )
}