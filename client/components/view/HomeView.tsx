
import HeroSection from "../sections/home/HeroSection";
import AboutSection from "../sections/home/AboutSection";
import MenuSection from "../sections/home/MenuSection";
import TeamSection from "../sections/home/TeanSection";
import BlogSection from "../sections/home/BlogSection";
import ContactSection from "../sections/home/ContactSection";

export default function HomeView() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <BlogSection />
      <TeamSection />

      <ContactSection />
    </>
  );
}
