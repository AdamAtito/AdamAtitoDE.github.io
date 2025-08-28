import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Education from '@/components/sections/education';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Volunteering from '@/components/sections/volunteering';
import Certifications from '@/components/sections/certifications';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Volunteering />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
