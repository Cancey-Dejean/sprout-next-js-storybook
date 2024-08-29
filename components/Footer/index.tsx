import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import { dummyMenu, dummyMenu2 } from "@/constants";

export default function Footer() {
  return (
    <footer id="footer" className="bg-brown py-10 text-white mt-auto">
      <Container className="grid md:grid-cols-2 gap-10">
        <div className="flex md:justify-start justify-center">
          <Link href="#">
            <Image
              src={"/images/sprout-logo.svg"}
              alt="Sprout"
              width={50}
              height={53}
            />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-2">
          <ul className="flex flex-col text-center md:text-left">
            {dummyMenu2.map((item) => (
              <li key={item.label}>
                <Link href={item.url} className="text-sm hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col text-center md:text-left">
            {dummyMenu.map((item) => (
              <li key={item.label}>
                <Link href={item.url} className="text-sm hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="flex items-start text-sm justify-center md:justify-start gap-1 mt-4 md:mt-0">
            &copy; <span>Sprout</span>
            <span className="inline-block"></span>
            {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  );
}
