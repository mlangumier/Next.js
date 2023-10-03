import Image from "next/image";

interface IProps {
  title?: string;
  description?: string;
  imageSrc?: string;
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
    <div className={`flex ${rowDirection}`}>
      <div className="flex-1">
        {title && <h5>{title}</h5>}
        {description && <p>{description}</p>}
      </div>

      <div className="flex-1">
        {imageSrc && (
          <Image src={imageSrc} alt="" className="object-cover w-full" />
        )}
      </div>
    </div>
  );
};
