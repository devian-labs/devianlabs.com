import { getImageProps, type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

/**
 * An optimised image (responsive srcset, modern formats) without next/image's inline
 * `style` attribute. Layout comes from classes instead: `fill` images get absolute
 * positioning to cover their (relative) parent.
 */
export default function Img({ className, fill, priority, ...rest }: Omit<ImageProps, "style">) {
  const { props } = getImageProps({ ...rest, fill, priority });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { style, ...imgProps } = props;
  return (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img
      {...imgProps}
      className={cn(fill && "absolute inset-0 h-full w-full", "text-transparent", className)}
    />
  );
}
