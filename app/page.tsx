import CallToAction from "@/components/CallToAction";
import CardGrid from "@/components/CardGrid";
import VideoTabs from "@/components/Discuss";
import Discuss from "@/components/Discuss";
import Facedock from "@/components/Facedock";
import Hero from "@/components/Hero";
import Join from "@/components/Join";
import PerfectPicture from "@/components/PerfectPicture";

export default function Home() {
  return (
    <>
      <Hero />

      <Facedock />

      <VideoTabs
        bgColor="bg-orange-red"
        heading="Meet, create & play"
        subheading="Drag in images, discuss documents, or just hang out."
      />

      <VideoTabs
        bgColor="bg-off-white"
        heading="Your vibe, your style"
        subheading="Create and customize a CSS Block. See the space transform, live."
      />
      <PerfectPicture />
      <CardGrid />
      <Join />
      <CallToAction />
    </>
  );
}
