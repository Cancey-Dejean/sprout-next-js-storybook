import React from "react";
import { ArrowRight, StarGroup, StarSingle } from "../icons";
import Container from "../Container";
import { Link } from "next-view-transitions";

export default function AnnouncementBar() {
  return (
    <div className="bg-brown text-sm md:text-[18px] text-white py-3">
      <Container className="flex relative items-center justify-center gap-[10px]">
        <div className="hidden md:flex items-center gap-[5px]">
          <StarSingle />
          <span>New</span>
          <StarGroup />
        </div>
        <p>
          We just launched a selfie sticker app on iOS, stamp your face in
          iMessage
        </p>
        <Link href="#" className="after:absolute after:inset-0">
          <span className="sr-only">link to sale</span>
          <ArrowRight />
        </Link>
      </Container>
    </div>
  );
}
