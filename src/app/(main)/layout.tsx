import { HamburgerMenu } from "@/components/hamburgermenu";
import { Sidebar } from "@/components/sidebar";

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({children}: Props) => {
  return (
    <>
    <HamburgerMenu />
    <Sidebar className="hidden lg:flex"/>
      <main className="h-full lg:ml-64 pt-12 lg:pt-0">
        <div className="bg-red-500 h-full">
          {children}
        </div>
      </main>
    </>
  )
}

export default MainLayout