import { AfterHoursSection } from "@/src/components/AfterHoursSection/AfterHoursSection";
import { InfoSection } from "@/src/components/InfoSection/InfoSection";
import { NavBarSection } from "@/src/components/NavBarSection/NavBarSection";
import { SkillsSection } from "@/src/components/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <div>   
      <NavBarSection />
      <InfoSection />
      <SkillsSection />
      <AfterHoursSection />
    </div>
  );
}
