import Image from "next/image";
import { DetailedHTMLProps } from "react";

const apiDndImage = process.env.NEXT_PUBLIC_DND_IMAGE_API;

interface IProps {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const ImageDnd: React.FC<IProps> = ({
  url,
  alt,
  width = 300,
  height = 300,
  className = "",
}) => (
  <Image
    className={className}
    src={`${apiDndImage}${url}`}
    alt={alt}
    width={width}
    height={height}
  />
);
