import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiDotnet,
  SiGit,
  SiGithub,
  SiPostman,
  SiAxios,
  SiSwagger
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

export const skills = [
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
    ],
  },

  {
    title: "Backend",
    items: [
      {
        name: "C#",
        icon: SiDotnet,
      },
      {
        name: ".NET",
        icon: SiDotnet,
      },
      {
        name: "Swagger",
        icon: SiSwagger,
      },
      {
        name: "Axios",
        icon: SiAxios,
      },
    ],
  },

  {
    title: "Base de datos",
    items: [
      {
        name: "Oracle",
        icon: FaDatabase,
      },
      {
        name: "SQL",
        icon: FaDatabase,
      },
      {
        name: "TOAD",
        icon: FaDatabase,
      },
    ],
  },

  {
    title: "Herramientas",
    items: [
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
    ],
  },
];