import Image, { StaticImageData } from "next/image";

interface IProps {
  title?: string;
  description?: string;
  imageSrc?: StaticImageData;
  textBlockPlacement?: "left" | "right";
}

export const TextImageComponent: React.FC<IProps> = ({
  title,
  description,
  imageSrc,
  textBlockPlacement = "left",
}) => {
  const rowDirection =
    textBlockPlacement === "left" ? "flew-row" : "flex-row-reverse";

  return (
    <div className={`flex ${rowDirection} h-[350px]`}>
      <div className="flex-1 flex items-center bg-slate-300">
        <div className="p-4 flex flex-col gap-4">
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
        </div>
      </div>

      <div className="flex-1">
        {imageSrc && (
          <Image src={imageSrc} alt="" className="object-cover w-full h-full" />
        )}
      </div>
    </div>
  );
};
