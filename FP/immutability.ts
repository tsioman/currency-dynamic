// Задание 1
export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam
): ExpectedTeam => {
  /**
   * const { league } = originalTeam;
   * return {
   *   name: "New York Badgers",
   *   league,
   *   roster: 25,
   * }
   */
  const { size, ...partOriginal } = originalTeam;
  return {
    ...partOriginal,
    ...{
      name: "New York Badgers",
      league: "Minor",
      roster: 25,
    },
  };
};

// Задание 2
type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (
  originalArray: SomeArray
): SomeArray => {
  return ["two", ...originalArray.slice(2, 4), 5];
};

// Задание 3

export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

export const originalTeamToExpectedTeam = (originalTeam: Team): Team => (
  {
    ...originalTeam,
    captain: {
      ...originalTeam.captain,
      age: 28,
    },
  }
);
