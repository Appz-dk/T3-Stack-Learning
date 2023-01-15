import Image from "next/image";
import Link from "next/link";
import React from "react";

type TProps = {
  raceImgSrc: string;
  raceName: string;
  opponentRace?: String;
};

const RaceCard: React.FC<TProps> = ({ raceImgSrc, raceName, opponentRace }) => {
  const hrefLink = opponentRace
    ? `/races/${raceName}/match-ups/${opponentRace}`
    : `/races/${raceName}/match-ups`;

  const pElementBg = !opponentRace ? "bg-blue-700" : "bg-red-700";
  const displayRaceName = !opponentRace ? raceName : opponentRace;

  return (
    <div className="max-w-sm rounded-lg border border-transparent hover:border-blue-700 ">
      <Link href={hrefLink}>
        <Image
          className="h-60 w-60 rounded-lg"
          src={raceImgSrc}
          alt={raceName + "-race-logo"}
          width={240}
          height={240}
        />
        <p
          className={
            "mx-auto mt-1 w-1/2 rounded-lg border-transparent px-3 py-2 text-center text-sm font-medium text-white outline-none focus:border-none focus:outline-none " +
            pElementBg
          }
        >
          {displayRaceName}
        </p>
      </Link>
    </div>
  );
};

export default RaceCard;
