import dictionary from "./dictionary.json";

export type Languages = "en" | "es";

interface Phrases {
  [key: string]: string;
}

type Dictionary = {
  // eslint-disable-next-line no-unused-vars
  [key in Languages]: Phrases;
};

const translate = (phrase: string, lang: Languages) => {
  return ((dictionary as Dictionary)[lang][phrase] as string) || phrase;
};

export default translate;
