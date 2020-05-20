import { getRandomIntBetween } from "./random";

import { BlobLocation } from "../resources/enums";

export function generateRandomBlob(location?: BlobLocation) {
  const plusPercentages: number[] = [];
  const minusPercentages: number[] = [];

  for (let i = 0; i < 4; i++) plusPercentages.push(getRandomIntBetween(25, 75));
  for (let j = 0; j < 4; j++) minusPercentages.push(100 - plusPercentages[j]);

  switch (location) {
    case BlobLocation.topLeft:
      plusPercentages[0] = 0;
      minusPercentages[0] = 10;
      minusPercentages[2] = 10;
      break;

    case BlobLocation.top:
      plusPercentages[0] = 10;
      minusPercentages[0] = 10;
      plusPercentages[1] =
        plusPercentages[1] > 40 ? plusPercentages[1] - 30 : plusPercentages[1];
      minusPercentages[1] =
        minusPercentages[1] > 40
          ? minusPercentages[1] - 30
          : minusPercentages[1];
      break;

    case BlobLocation.topRight:
      plusPercentages[0] = 10;
      minusPercentages[0] = 0;
      minusPercentages[3] = 10;
      break;
  }

  var borderRadius = `${plusPercentages[0]}% ${minusPercentages[0]}% ${minusPercentages[1]}% ${plusPercentages[1]}% / ${plusPercentages[2]}% ${plusPercentages[3]}% ${minusPercentages[3]}% ${minusPercentages[2]}%`;
  return borderRadius;
}
