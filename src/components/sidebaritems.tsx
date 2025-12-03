"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
    label: string,
    imgSrc: string,
    href: string,
};

export const SidebarItems = ({ label, imgSrc, href }: Props) => {
    const pathName = usePathname();
    const active = pathName === href;
    return (
        <Button 
        variant={active ? "sidebarOutline" : "sidebar"}
        className="justify-start h-12"
        asChild
        >
            <Link href={href}>
            <Image src={imgSrc} alt={label} width={50} height={55}/>
                {label}
            </Link>
        </Button>
    )
}