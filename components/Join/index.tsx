import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImageMarquee from "../ImageMarquee/ImageMarquee";
import Container from "../Container";

export default function Join() {
  return (
    <section className="bg-cream text-center">
      <Container className="">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-heading-lg leading-none tracking-[-0.02em] mb-6">
              Join in the fun
            </h2>
            <p className="text-subtitle mb-10">
              People have already made some wonderful spaces. Start your own
              today.
            </p>
          </div>
        </div>
      </Container>

      <div className="mt-12">
        <ImageMarquee />
      </div>
    </section>
  );
}
