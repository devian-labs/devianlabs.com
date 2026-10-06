import { getImageProps, type ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { publicImageSize } from "@/lib/image-size";

/**
 * An optimised image (responsive srcset, modern formats) without next/image's inline
 * `style` attribute. Layout comes from classes instead: `fill` images get absolute
 * positioning to cover their (relative) parent, plus their intrinsic width and height
 * as attributes so the browser knows the aspect ratio before the file arrives.
 *
 * `priority` marks the page's main above-the-fold image: loaded eagerly, and React
 * preloads eager images in the <head> on its own. It deliberately doesn't set a high
 * fetch priority: these screenshots are large, and at high priority they hold up the
 * fonts and stylesheet that the hero text needs.
 */
export default function Img({ className, fill, priority, ...rest }: Omit<ImageProps, "style">) {
  const { props } = getImageProps({
    ...rest,
    fill,
    ...(priority ? { loading: "eager" } : {}),
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { style, ...imgProps } = props;
  const intrinsic = fill && typeof rest.src === "string" ? publicImageSize(rest.src) : undefined;
  return (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img
      {...imgProps}
      width={imgProps.width ?? intrinsic?.width}
      height={imgProps.height ?? intrinsic?.height}
      className={cn(fill && "absolute inset-0 h-full w-full", "text-transparent", className)}
    />
  );
}
