export interface Dictionary {
  _id: string;
  language: "es" | "en";
  content: Record<string, string>;
}
