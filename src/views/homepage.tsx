import Image from "next/image";

import {
  express,
  imageOne,
  imageTwo,
  linkedin,
  nextjs,
  nodejs,
  react,
} from "../components/medias";
import { TextImageComponent } from "../components/text-image";
import { CarrouselLogos } from "../components/carrousel-logos";

interface IProps {}

// TODO: mettre le menu de navigation en position-fixed et ajouter une margin-top aux pages (main ou view?)
// TODO: check secondary+tertiary colors
export const HomepageView: React.FC<IProps> = ({}) => {
  return (
    <>
      {/* Max-width */}
      <section className="flex h-screen flex-col md:flex-row gap-8 px-4">
        <div className="w-full h-full flex flex-col gap-4 justify-center">
          <h1>Mathieu LANGUMIER</h1>
          <p>
            Développeur Fullstack-javascript avec une expérience principalement
            Frontend, continue description...
          </p>
        </div>
        {/* Model: https://artera.io/ + images-parallax: show prefered techno logos, different hights, 
        and put them all at the same height + bottom when scrolling down */}
        <div className="w-full grid grid-cols-4 gap-8 items-center">
          <Image src={nextjs} alt="next-js" height={50} width={50} />
          <Image src={react} alt="react-js" height={50} width={50} />
          <Image src={nodejs} alt="node-js" height={50} width={50} />
          <Image src={express} alt="exoress-js" height={50} width={50} />
        </div>
      </section>

      {/* Full-width */}
      <section className="mt-32">
        {/* TODO: make appear animation on scroll (opacity? text-side?) */}
        <TextImageComponent
          title="Développeur Web & Web Mobile - 2021"
          description="Formation fullstack, des bases à la mise en place d'API avec frameworks. Cette formation m'a permis de m'adapter, d'apprendre et de progresser rapidement les technologies que j'utilise."
          imageSrc={imageOne}
        />
        <TextImageComponent
          title="Langue & Litérature Anglaise (LLCER) - 2018"
          description="Anglais oral et écrit niveau C1, l'anglais me sert au quotidien pour la partie technique du développement web: documentation, recherche d'informations, code etc."
          textBlockPlacement="right"
          imageSrc={imageTwo}
        />
      </section>

      {/* Max-width */}
      <section className="grid grid-cols-4 place-content-center mt-32">
        <CarrouselLogos />
      </section>

      {/* Max-width */}
      <section className="flex flex-row items-center justify-between mt-32">
        <p>mathieu.langumier@gmail.com</p>
        {/* Transform to clickable */}
        <p>06.89.91.08.82</p>
        <Image src={linkedin} alt="linkedin-icon" height={30} width={30} />
      </section>
    </>
  );
};
