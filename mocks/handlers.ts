import { Project } from "@/interfaces";
import { rest } from "msw";

const results: Project[] = [
  {
    _id: "1",
    title: "Lord of the Rings",
    img: "/book-cover.jpg",
    description:
      "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
    slug: "the-lord-of-the-rings",
    demo_url: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
    repo_url: "https://github.com/JohanAltamar",
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
    _id: "3",
    title: "Lord of the Rings 2",
    img: "/book-cover.jpg",
    description:
      "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
    slug: "the-lord-of-the-rings-2",
    demo_url: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
    repo_url: "https://github.com/JohanAltamar",
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
    _id: "4",
    title: "Lord of the Rings 3",
    img: "/book-cover.jpg",
    description:
      "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
    slug: "the-lord-of-the-rings-3",
    demo_url: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
    repo_url: "https://github.com/JohanAltamar",
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
    _id: "2",
    title: "El Señor de los Anillos",
    img: "/book-cover.jpg",
    description:
      "El Señoor de los Anillos is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
    slug: "el-senor-de-los-anillos",
    demo_url: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
    repo_url: "https://github.com/JohanAltamar",
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
