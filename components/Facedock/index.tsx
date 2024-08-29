import Container from "../Container";
import Video from "../Video";

import { Button } from "../ui/button";
import { Link } from "next-view-transitions";

export default function Facedock() {
  return (
    <section className="bg-[#fff9f3] py-0">
      <Container className="relative grid lg:grid-cols-[368px_1.5fr] lg:gap-10">
        <div className="lg:absolute inset-0 hidden md:block">
          <Video autoPlay src="/videos/facedock.mov" />
        </div>

        <div className="relative py-16 lg:py-24">
          <h2 className="text-heading-lg leading-none tracking-[-0.02em] mb-6">
            Pull up a <span className="line-through">chair</span> Facedock
          </h2>

          <p className="text-subtitle mb-8 md:mb-12">
            Facedocks are flexible, resizable, rearrangeable frames. Feeling
            shy? Just shrink your Facedock.
          </p>

          <Button asChild variant="outline" size={"lg"}>
            <Link href="/">Try it with your face</Link>
          </Button>

          <p className="mt-6 md:text-lg opacity-60">
            This will request access for your webcam. It will only be used to
            demo this feature. No photos will be taken or stored.
          </p>
        </div>
      </Container>
    </section>
  );
}
