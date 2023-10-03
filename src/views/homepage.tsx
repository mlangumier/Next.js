import { TextImageComponent } from "../components/text-image";

interface IProps {}

// TODO: for technos
// https://www.chartjs.org/docs/latest/samples/other-charts/radar-skip-points.html

export const HomepageView: React.FC<IProps> = ({}) => {
  return (
    <>
      {/* Max-width */}
      <section className="flex flex-row gap-8">
        <div className="flex-1">
          <h1>Mathieu LANGUMIER</h1>

          <p>
            Développeur Fullstack-javascript avec une expérience principalement
            Frontend, continue description...
          </p>
        </div>
        {/* Model: https://artera.io/ + images-parallax: show prefered techno logos, different hights, 
        and put them all at the same height + bottom when scrolling down */}
        <div className="flex-2 bg-blue-200">Logos</div>
      </section>

      {/* Full-width */}
      <section>
        {/* TODO: make appear animation on scroll (opacity? text-side?) */}
        <TextImageComponent
          title="Développeur Web & Web Mobile - 2021"
          description="Formation fullstack, des bases à la mise en place d'API avec frameworks. Cette formation m'a permis de m'adapter, d'apprendre et de progresser rapidement les technologies que j'utilise."
        />
        <TextImageComponent
          title="Langue & Litérature Anglaise (LLCER) - 2018"
          description="Anglais oral et écrit niveau C1, l'anglais me sert au quotidien pour la partie technique du développement web: documentation, recherche d'informations, code etc."
          textBlockPlacement="right"
        />
      </section>

      {/* Max-width */}
      <section className="flex flex-row">
        {/* Multiple rows for frontend, backend & style, libraries etc? */}
        <div className="flex-1">Most used</div>
        <div className="flex-1">Interested in pursuing</div>
      </section>

      {/* Max-width */}
      <section></section>
    </>
  );
};
