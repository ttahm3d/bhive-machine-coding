import Download from "./download";
import Hero from "./hero";
import OurSpaceOverview from "./our-space-overview";
import WhyChooseUs from "./why-choose-us";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <OurSpaceOverview />
      <Download />
    </>
  );
}
