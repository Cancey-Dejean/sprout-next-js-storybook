"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { dummyMenu } from "@/constants";
import { Button } from "@/components/ui/button";

export default function MobileMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  function handleMenuClose() {
    setOpen(false);
  }

  return (
    <>
      <Transition show={open}>
        <Dialog className="relative z-[1001]" onClose={setOpen}>
          <TransitionChild
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                <TransitionChild
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <DialogPanel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-yellow pb-6 shadow-xl">
                      <div className="px-4 bg-yellow sm:px-6 py-5 sticky top-0 z-50">
                        <div className="flex items-start justify-between">
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

                          <div className="ml-3 flex h-7 items-center">
                            <Button size="icon" onClick={() => setOpen(false)}>
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <ul className="flex flex-col gap-6">
                          {dummyMenu.map((item) => (
                            <li key={item.label}>
                              <Link
                                onClick={handleMenuClose}
                                key={item.label}
                                href={item.url}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                          <li>
                            {/* CTA  */}
                            <Button asChild className="flex text-center">
                              <Link href={"#"}>Get Sprout for free</Link>
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
