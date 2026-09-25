import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Reveal } from "@/components/site/reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
