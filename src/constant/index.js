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
  {
    id: "mdacruz",
    title: "My Portefolio",
    paragraph:
      "My personal website, using React, Tailwind CSS and CSS to style it, and React Three Fiber to achieve the 3D interactions.\n The website is composed by three sections. The hero section features my CV, as well as a form to schedule a meeting, while in the company of a cute duck that follows your cursor. The following sections is a way to know me and my work better, and in the end another opportunity to schedule a meeting.\n I am particularly proud of the duck that accompanies you in the hero section. I created it entirely from scratch using Blender, despite the challenges posed by a curious cat and disabled auto-save feature in Blender.",
    srclink: "https://mda-cruz.com",
    hublink: "https://github.com/mbspcruz/myWebsite",
  },
  {
    id: "billing",
    title: "Billing Page",
    paragraph:
      "A billing page. This page was made entirely with HTML, Tailwind, CSS and vanilla JavaScript. It's interactive and the JavaScript was mainly used for the menu components, the opening and closing of the hamburger menu as well as the focus mode when loading. This design came from the website 'icodethis.com' a platform where devs can hone their coding skills with daily challenges.",
    srclink: " https://billingmda.netlify.app/",
    hublink: "https://github.com/mbspcruz/dailyChallenge/tree/main/challenge7",
  },
];

export { projects };
