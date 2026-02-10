import About from "@/components/About";
import Certificate from "@/components/Certificate";
import Cta from "@/components/Cta";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solution from "@/components/Solution";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <About />
        <Solution />
        <Certificate />
        <Form />
        <Cta/>
      </main>
    </>
  );
}
