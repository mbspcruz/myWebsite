import { Skills, Hero, Projects, ContactForm } from ".";

export default function Overlay() {
  return (
    <div className="m-10 md:m-20">
      <Hero />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}
