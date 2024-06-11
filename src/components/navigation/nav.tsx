import { ModeToggle } from "@/app/components/them-toggle";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";

import Link from "next/link";
import { Button } from "../ui/button";

function Navigation() {
  return (
    <div className="absolute w-full px-3 mt-6">
      <div className="flex flex-row justify-between h-15 md:py-2 md:mx-20 ">
        <div className="flex items-center">
          <Image src={"/accets/Logo.png"} width={133} height={40} alt="logo" />
        </div>
        <div>
          <ul className="hidden text-1xl lg:flex flex-row gap-5  items-center ">
            <li>
              <Link href={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Link href={"/about-us"}>Services</Link>
            </li>
            <li>
              <Link href={"/about-us"}>Use Case</Link>
            </li>
            <li>
              <Link href={"/about-us"}>Pricing</Link>
            </li>
            <li>
              <Link href={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Button className="p-6 bg-transparent text-black text-bold border-1.5 border-black shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
                <Link href={"/about-us"}>Request quote</Link>
              </Button>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <TextAlignJustifyIcon
                width={30}
                height={30}
                className="text-4xl "
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <Link href={"/about-us"}>About Us</Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>
                <Link href={"/about-us"}>Services</Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>
                <Link href={"/about-us"}>Use Cases</Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>
                <Link href={"/about-us"}>Pricing</Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>
                <Link href={"/about-us"}>Blog</Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>
                <Button>
                  <Link href={"/about-us"}>Request quote</Link>
                </Button>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
