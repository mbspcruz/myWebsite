import {
  blender,
  c,
  css,
  figma,
  git,
  javaScript,
  react,
  shell,
  tailwind,
  threejs,
  html,
  vm,
} from "../assets";

export const skills = [
  {
    id: "web",
    name: "Programming Languages",
    language: ["HTML", "CSS", "JavaScript", "C"],
    icon: [html, css, javaScript, c],
  },
  {
    id: "lib",
    name: "Frameworks and Libraries",
    language: ["React", "TailwindCSS", "React 3 Fiber", "ThreeJS"],
    icon: [react, tailwind, react, threejs],
  },
  {
    id: "design",
    name: "Design and Moddeling",
    language: ["Blender", "Figma"],
    icon: [blender, figma],
  },
  {
    id: "others",
    name: "Others",
    language: ["Git", "Shell", "Virtual Machine"],
    icon: [git, shell, vm],
  },
];

const projects = [
  {
    id: "messagemail",
    title: "MessageMail",
    paragraph:
      "A landing page for a website that consolidates all your social media messages into one single app. \n This website was created with React and TailwindCSS, composed by three sections, and a call to action that will redirect the user to a signup page that is a very simple and intuitive form. It is also responsive which improves the user experience by accomodating all type of devices.",
    srclink: "https://messagemailweb.netlify.app/",
    hublink: "https://github.com/mbspcruz/MessageMail",
  },
];

export { projects };
