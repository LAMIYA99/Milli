import { CornerOrnament } from "@/components/common/Ornaments";
import FelsefemizSection from "@/components/sections/shared/FelsefemizSection";

export default function AboutSection() {
  return (
    <div className="relative mt-14 overflow-hidden bg-[#FCEAD7] dark:bg-[#1A0E0C]">
      <CornerOrnament className="absolute left-0 top-0 h-32 w-32 text-bronze/30" />
      <CornerOrnament className="absolute bottom-0 right-0 h-32 w-32 -scale-100 text-bronze/30" />
      <FelsefemizSection showLink={true} />
    </div>
  );
}