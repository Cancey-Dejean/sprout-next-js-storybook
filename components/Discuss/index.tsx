import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Video from "../Video";
import Container from "../Container";
import { cn } from "@/lib/utils";

const videoTabData = [
  {
    title: "Play time",
    src: "/videos/meet1.mp4",
  },
  {
    title: "Meeting",
    src: "/videos/meet2.mp4",
  },
  {
    title: "Presentation",
    src: "/videos/meet3.mp4",
  },
  {
    title: "Happy Hour",
    src: "/videos/meet4.mp4",
  },
];

const spaceToUnderscoreRegex = /\s+/g;
const underscore = "_";

export default function VideoTabs({
  bgColor,
  heading,
  subheading,
}: {
  bgColor?: string;
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className={cn(bgColor)}>
      <Container>
        <div className="flex flex-col text-center">
          <h2 className="text-heading-lg text-balance leading-none tracking-[-0.02em] mb-6">
            {heading || "Heading"}
          </h2>

          <p className="text-subtitle mb-10">
            {subheading || "This is a subheading"}
          </p>
        </div>

        <Tabs
          defaultValue={videoTabData[0].title.replace(
            spaceToUnderscoreRegex,
            underscore,
          )}
        >
          {videoTabData.map((tab) => (
            <TabsContent
              key={tab.title}
              value={tab.title.replace(spaceToUnderscoreRegex, underscore)}
            >
              <div className="rounded-base overflow-hidden" key={tab.title}>
                <Video
                  autoPlay
                  src={tab.src}
                  className="min-h-[188px] md:min-h-[540px]"
                />
              </div>
            </TabsContent>
          ))}

          <TabsList className="flex flex-wrap gap-4 bg-transparent pt-8">
            {videoTabData.map((tab) => (
              <TabsTrigger
                key={tab.title}
                value={tab.title.replace(spaceToUnderscoreRegex, underscore)}
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </Container>
    </section>
  );
}
