'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/constants';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetFooter,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { SignedOut } from '@clerk/nextjs';

const NavContent = () => {
  const pathName = usePathname();
  return (
    <section className="flex flex-col gap-6 pt-16">
      {sidebarLinks.map(item => {
        const isActive =
          (pathName.includes(item.route) && item.route.length > 1) ||
          pathName === item.route;

        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? 'primary-gradient rounded-lg text-light-900'
                  : 'text-dark300_light900'
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? '' : 'invert-colors'}`}
              />
              <p className={`${isActive ? 'base-bold' : 'base-medium'}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="Menu"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 flex flex-col justify-between border-none sm:hidden"
      >
        <div>
          <SheetHeader>
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/assets/images/site-logo.svg"
                width={36}
                height={36}
                alt="DevFlow"
              />
              <p className="h2-bold text-dark100_light900 font-spaceGrotesk ">
                Dev <span className="text-primary-500">Overflow</span>
              </p>
            </Link>
          </SheetHeader>
          <NavContent />
        </div>
        <SheetFooter>
          <div className="flex flex-col gap-3">
            <SignedOut>
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3">
                    <span className="primary-text-gradient ">Log In</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3">
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </SignedOut>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
