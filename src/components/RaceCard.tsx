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

  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md hover:border-blue-700 dark:border-gray-700 dark:bg-gray-800">
      <Link href={hrefLink}>
        <Image
          className="h-60 w-60 rounded-lg"
          src={raceImgSrc}
          alt={raceName + "-race-logo"}
          width={240}
          height={240}
        />
      </Link>
    </div>
  );
};

export default RaceCard;
