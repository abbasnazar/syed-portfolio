import { AchievementsSection } from "@/components/AchievementsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { PrintResumeSection } from "@/components/PrintResumeSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { TechStrip } from "@/components/TechStrip";

export default function Home() {
  return (
    <>
      <div className="print:hidden">
        <SiteNav />
        <main>
          <HeroSection />
          <TechStrip />
          <AboutSection />
          <AchievementsSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
      <PrintResumeSection />
    </>
  );
}
