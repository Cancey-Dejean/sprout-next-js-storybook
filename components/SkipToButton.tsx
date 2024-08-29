import { Button } from "./ui/button";
import Link from "next/link";

type SkipToButtonProps = {
  url: string;
  text: string;
};

export default function SkipToButton({
  url = "#main",
  text = "content",
}: SkipToButtonProps) {
  return (
    <Button
      className="z-[1000] fixed left-3 top-0 -translate-y-full text-white transition-all duration-300 ease-in-out focus:translate-y-0 bg-black"
      asChild
    >
      <Link href={url}>Skip to {text}</Link>
    </Button>
  );
}
