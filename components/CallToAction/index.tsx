import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Container from "../Container";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="bg-off-white py-20 md:py-36 lg:py-52">
      <Container className="text-center relative">
        <div className="absolute top-0 -left-[1%]">
          <Image
            src={"/images/sparkles.svg"}
            width={1038}
            height={312}
            className="w-full pl-8"
            alt="hero"
          />
        </div>

        <div className="relative">
          <h2 className="text-heading-lg leading-none tracking-[-0.02em] mb-6">
            Ready to make <span className="block">yourself a space?</span>
          </h2>

          <p className="text-subtitle mb-6 md:mb-10">
            Free. Instant space. No sign-up required.
          </p>

          <div className="flex justify-center">
            <Button asChild variant={"secondary"} className="shadow-lg">
              <Link href="#create">Create a new space</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
