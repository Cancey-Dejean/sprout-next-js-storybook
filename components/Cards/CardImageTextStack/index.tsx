import Image from "next/image";

export default function CardImageTextStack({
  image,
  imageAlt,
  title,
  description,
}: {
  image?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col shadow-lg bg-off-white rounded-base text-center">
      <div className="p-8 pb-0">
        <Image
          src={image || "/images/placeholder.svg"}
          alt={imageAlt || "Placeholder"}
          width={460}
          height={200}
          className="rounded-base object-cover"
        />
      </div>

      <div className="p-8 pt-0 flex flex-col gap-6">
        <h3 className="text-xl">{title || "Title"}</h3>
        <p className="line-clamp-2">{description || "Description goes here"}</p>
      </div>
    </div>
  );
}
