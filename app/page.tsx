import Boot from '@/components/ui/Boot';
import Cursor from '@/components/ui/Cursor';
import Konami from '@/components/ui/Konami';
import Nav from '@/components/ui/Nav';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Stack from '@/components/sections/Stack';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Boot />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Konami />
    </>
  );
}
