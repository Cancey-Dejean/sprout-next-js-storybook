import Image from "next/image";
import Container from "../Container";
import Video from "../Video";

export default function Hero() {
  return (
    <section className="text-center pt-44 md:pt-52 pb-20 md:pb-32 relative">
      <div className="absolute top-[250px] left-10 lg:left-20 md:block hidden">
        <div className="relative size-[100px]">
          <Image
            fill
            src="/images/cursor_julius.png"
            className="object-contain"
            sizes="(max-width: 768px) 100vw"
            alt=""
          />
        </div>
      </div>

      <div className="absolute top-[150px] right-10 lg:right-[50px] md:block hidden">
        <div className="relative size-[100px]">
          <Image
            fill
            src="/images/cursor_mayli.png"
            className="object-contain"
            sizes="(max-width: 768px) 100vw"
            alt=""
          />
        </div>
      </div>

      <Container className=" flex flex-col px-4 md:px-6">
        <h1 className="text-display tracking-[-0.02em] leading-[.9] mb-7">
          Your space,
          <span className="block">Your call</span>
        </h1>

        <p className="text-subtitle max-w-[450px] mx-auto font-medium mb-8">
          Create a virtual space to meet, chat, and play with your favorite
          people.
        </p>

        <Video
          autoPlay
          src="/videos/hero_yellow.mp4"
          className="aspect-video"
        />
      </Container>
    </section>
  );
}
