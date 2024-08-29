"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import AnnouncementBar from "../AnnouncementBar";

import Container from "../Container";
import { BrandLogo, HamburgerIcon } from "../icons";
import Link from "next/link";
import { dummyMenu } from "@/constants";
import Image from "next/image";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  function handleMenuOpen() {
    setOpen(true);
  }
  return (
    <header className="fixed top-0 w-full left-0 z-50">
      <AnnouncementBar />
      <div className="bg-yellow flex items-center py-5">
        <Container className="flex items-center gap-10 justify-between w-full">
          {/* Logo  */}
          <Link href="#" className="flex items-center">
            <Image
              src="/images/logo-text.svg"
              alt="Sprout"
              width={110}
              height={29}
              priority
              sizes="(max-width: 768px) 100vw"
            />
          </Link>

          {/* Menu */}
          <div className="hidden lg:flex grow justify-end items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-4">
                {dummyMenu.map((item) => (
                  <li key={item.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        prefetch={false}
                        href={item.url}
                        className="group inline-flex w-max items-center justify-center rounded-md py-2 text-base font-medium transition-colors hover:underline focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA  */}
          <Button asChild className="hidden lg:flex">
            <Link href={"#"}>Get Sprout for free</Link>
          </Button>

          {/* Mobile Menu */}
          <div className="flex lg:hidden">
            <Button onClick={handleMenuOpen} size="icon">
              <HamburgerIcon />
            </Button>
          </div>
        </Container>
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}
