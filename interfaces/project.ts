export interface Project {
  _id: string;
  title: string;
  img: string;
  imgSrc: string;
  description: string;
  slug: string;
  demo_url: string;
  repo_url: string;
  language: "es" | "en";
  type: "frontend" | "backend" | "fullstack";
  technologies: string[];
  features: string[];
  translations?: Translation[];
  content: string;
}

interface Translation {
  language: string;
  link: string;
}
