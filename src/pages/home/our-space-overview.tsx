import BhiveSpaceCard from "@/components/base/cards/bhive-space-card";
import Typography from "@/components/ui/typography";
import { useBhiveSpaces } from "@/hooks";

export default function OurSpaceOverview() {
  const { spaces } = useBhiveSpaces();
  console.log(spaces);
  return (
    <section className="px-5 md:px-[120px] container">
      <Typography variant="h2" className="mt-12 text-[#263238]">
        Our Spaces Overview
      </Typography>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] place-items-center mt-[85px] gap-12 md:gap-8">
        {spaces.map((space) => (
          <BhiveSpaceCard key={space.id} space={space} />
        ))}
      </div>
    </section>
  );
}
