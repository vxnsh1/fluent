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
      <main className="h-full lg:ml-64 pt-12 lg:p-2">
        <div className="max-w-[1056px] mx-auto h-full">
          {children}
        </div>
      </main>
    </>
  )
}

export default MainLayout