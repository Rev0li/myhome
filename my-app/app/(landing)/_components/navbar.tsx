"use client";

import Link from "next/link";
import { NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
 } from "@radix-ui/react-navigation-menu";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

 const navigation = [
    {
        item:"About",
        href:"/about"
    },
    {
        item:"Tarif",
        href:"/tarif"
    },
    {
        item:"Contact",
        href:"/contact"
    },
 ]

 export const NavBar = () => {
    return(
        <div className="flex  items-center justify-center w-full sm:pt-5 select-none">
        <NavigationMenu className={`flex flex-col sm:flex-row  w-full max-w-[1200px] justify-between px-5 py-2 h-auto sm:h-[60px] items-center`}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" className="flex items-center space-x-2">
                        <Logo />
                        <h2 className="text-2xl font-bold">Welcome</h2>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList className="flex justify-between items-center font-light mt-3 sm:mt-0 space-x-10 text-xs">
                {navigation.map((link) => (
                    <NavigationMenuItem className="cursor-pointer hover:underline">
                        <NavigationMenuLink>
                            {link.item}
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
  
        </NavigationMenu>
    </div>
    )
 }