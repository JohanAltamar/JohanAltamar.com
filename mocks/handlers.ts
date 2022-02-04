import { Project } from "@/pages/projects";
import { rest } from "msw";

const results: Project[] = [
  {
    id: "1",
    title: "Lord of the Rings",
    imageUrl: "/book-cover.jpg",
    description:
      "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
    slug: "the-lord-of-the-rings",
    link: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
    repository: "https://github.com/JohanAltamar",
    language: "en",
    type: "frontend",
    technologies: ["react", "nextJs", "prisma", "msw"],
    features: ["api Mock", "dark/light modes"],
    translations: [
      {
        language: "es",
        link: "/es/projects/el-senor-de-los-anillos",
      },
    ],
  },
  {
    id: "3",
    title: "Lord of the Rings 2",
    imageUrl: "/book-cover.jpg",
    description:
      "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
    slug: "the-lord-of-the-rings-2",
    link: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
    repository: "https://github.com/JohanAltamar",
    language: "en",
    type: "frontend",
    technologies: ["react", "nextJs", "prisma", "msw"],
    features: ["api Mock", "dark/light modes"],
    translations: [
      {
        language: "es",
        link: "/es/projects/el-senor-de-los-anillos",
      },
    ],
  },
  {
    id: "2",
    title: "El Señor de los Anillos",
    imageUrl: "/book-cover.jpg",
    description:
      "El Señoor de los Anillos is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
    slug: "el-senor-de-los-anillos",
    link: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
    repository: "https://github.com/JohanAltamar",
    language: "es",
    type: "frontend",
    technologies: ["react", "nextJs", "prisma", "msw"],
    features: ["api Mock", "dark/light modes"],
    translations: [
      {
        language: "en",
        link: "/en/projects/the-lord-of-the-rings",
      },
    ],
  },
];

export const handlers = [
  rest.get("https://my.backend/projects", (req, res, ctx) => {
    return res(
      ctx.json({
        results,
      })
    );
  }),
  rest.get("https://my.backend/projects/:language", (req, res, ctx) => {
    const filteredResults = results.filter(
      ({ language }) => language === req.params.language
    );

    return res(
      ctx.json({
        results: filteredResults,
      })
    );
  }),
];
