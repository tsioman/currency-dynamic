// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => (
  teams.reduce((prev, current) => (prev.score > current.score) ? prev : current).name
)

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => (
  `?${Object.keys(qsObj).map(key => `${key}=${qsObj[key]}`).join('&')}`
);

// Задание 3

export const parseQs = (qs: string): QsObj => (
  qs
  .slice(1)
  .split("&")
  .reduce(
    (acc: QsObj, el) => {
      const [key,val] = el.split("=");
      acc[key] = val;
      return acc;
    },{}
  )
);
