import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItems } from "./sidebaritems";
import { 
    ClerkLoading,
    ClerkLoaded,
    UserButton,

 } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { getUserSubscription } from "../../db/queries";

type Props = {
  className?: string
};



export const Sidebar = async ({ className }: Props) => {
    const userSubscriptionData = getUserSubscription();
    const [
      userSubscription,
    ] = await Promise.all([
      userSubscriptionData,
    ]);

  const sidebarItems = [
    {
      label: "Learn",
      imgSrc: "/learn.svg",
      href: "/learn"
    },
    {
      label: "Leaderboard",
      imgSrc: "/leaderboard.svg",
      href: "/leaderboard"
    },
    {
      label: "Quest",
      imgSrc: "/quest.svg",
      href: "/quest"
    },
    {
      label: "Shop",
      imgSrc: "/shop.svg",
      href: "/shop"
    },
  ]
  return (
    <div className={cn("h-full lg:w-64 lg:fixed flex left-0 top-0 px-4 border-r flex-col",
      className,
    )}> <Link href='/learn'>
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/logo.svg" width="50" height="50" alt="logo"></Image>
          <h1 className="text-2xl tracking-tighter font-bold ">
            {!!userSubscription?.isActive ? "Fluent Pro" : "Fluent"}
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        {sidebarItems.map((item, idx) => (
          <SidebarItems key={idx} label={item.label} imgSrc={item.imgSrc} href={item.href}/> 
        ))} 
      </div>
      <div className="p-4">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
          </ClerkLoading>
          <ClerkLoaded>
              <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
      </div>  
    </div>
  )
}