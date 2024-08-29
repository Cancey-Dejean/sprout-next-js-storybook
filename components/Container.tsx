import { cn } from "../lib/utils";

type ContainerProps = {
  as?: React.ElementType;
  size?: "base" | "contained" | "wide";
  className?: string;
  children: React.ReactNode;
};

const containerSizes = {
  base: "max-w-[1024px]",
  contained: "",
  wide: "",
};

export default function Container({
  as: Comp = "div",
  className,
  size = "base",
  children,
  ...restProps
}: ContainerProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Comp
      className={cn(
        "mx-auto w-full px-5 md:px-8",
        containerSizes[size],
        className,
      )}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
