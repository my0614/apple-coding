import { Contact } from "@/components/sections/contact";
import { Courses } from "@/components/sections/courses";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/components/sections/testimonials";
import { Reveal } from "@/components/site/reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <Courses />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
