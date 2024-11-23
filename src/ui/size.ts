type MultiplayerType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 13 | 15 | 18 | 20 | 25;

export const BASE_SPACING_TOKEN = 2;

export const size = (spacingType?: MultiplayerType): number | undefined =>
  !!Number(spacingType) ? BASE_SPACING_TOKEN * (spacingType ?? 0) : undefined;
