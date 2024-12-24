import { AfterHoursSection } from "@/src/components/AfterHoursSection/AfterHoursSection";
import { FooterSection } from "@/src/components/FooterSection/FooterSection";
import { InfoSection } from "@/src/components/InfoSection/InfoSection";
import { NavBarSection } from "@/src/components/NavBarSection/NavBarSection";
import { SkillsSection } from "@/src/components/SkillsSection/SkillsSection";
import { ProjectsSection } from "@/src/components/ProjectsSection/ProjectsSection";


export default function Home() {
  return (
    <div>   
      <NavBarSection />
      <InfoSection />
      <SkillsSection />
      <ProjectsSection />
      <AfterHoursSection />
      <FooterSection />
    </div>
  );
}
