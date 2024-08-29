import Image from "next/image";
import Container from "../Container";
import CardImageTextStack from "../Cards/CardImageTextStack";

const cardItems = [
  {
    image: "/images/card_1.png",
    title: "Join with one click",
    description:
      "Enter the meeting right from your browser. No installation or guest sign-in required.",
  },
  {
    image: "/images/card_2.png",
    title: "Make it yours, forever",
    description:
      "Customize your Space's name so it's easy to remember. Set up beforehand or come back later.",
  },
  {
    image: "/images/card_3.png",
    title: "Host your friends, co-workers, & family",
    description: "There's plenty of space for up to 8 people.",
  },
  {
    image: "/images/card_4.png",
    title: "Export your space",
    description:
      "Export the HTML of your space to keep when you're done. Congrats, you just made a web page!",
  },
];

export default function CardGrid() {
  return (
    <section className="bg-white">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {cardItems.map(({ ...item }) => (
          <CardImageTextStack key={item.title} {...item} />
        ))}
      </Container>
    </section>
  );
}
