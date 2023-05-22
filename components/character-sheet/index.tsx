export const BioCharacterSheet: React.FC = () => {
  return (
    <div className="">
      <div className="intro">
        <div>Name</div>
        <div>
          <p>Class & level (dev front/fullstack lvl 2)</p>
          <p>Experience (70%)</p>
          <p>Background (polyvalent?)</p>
          <p>Location (St-Etienne, but looking to move out)</p>
        </div>
      </div>

      <div className="grid">
        {/* 3 columns */}

        {/* col 1 */}
        <div>Stats</div>

        <div>
          <div>Inspiration + Proficiency bonus</div>
          <div>Stat bonuses</div>
          <div>Proficiencies + details (interests)</div>
        </div>

        <div className="grid">
          <div>Armor class, initiative, speed</div>
          <div>Hit points</div>
        </div>

        <div>
          <div>Personality traits</div>
          <div>Ideals</div>
          <div>Bonds</div>
          <div>Flaws</div>
        </div>
      </div>

      <div>Attacks & spellcasting (skills & tools)</div>

      <div>Features & traits (interests)</div>

      <div>Equipement (laptop, car, nothing?)</div>

      <div>Other proficiencies & languages</div>
    </div>
  );
};
