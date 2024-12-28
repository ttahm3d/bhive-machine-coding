import HeroVideo from "@/assets/hero-video.mp4";
import Typography from "@/components/ui/typography";

export default function Hero() {
  return (
    <section>
      <div className="grid grid-cols-12 px-5 md:px-[120px] bg-[url(./assets/background-vector-desktop.svg)] h-96 container bg-no-repeat bg-right md:bg-center  bg-cover">
        <div className="col-span-12 md:col-span-8 self-center order-2">
          <Typography
            variant="h1"
            className="text-brand-primary tracking-[-1px] hidden md:block">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="text-brand-yellow">₹199/-!</span>
          </Typography>
          <Typography
            variant="h4"
            className="text-brand-primary tracking-[-1px] block md:hidden">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="text-brand-yellow">₹199/-!</span>
          </Typography>
        </div>
        <div className="col-span-12 md:col-span-4 pt-1">
          <video src={HeroVideo} autoPlay></video>
        </div>
      </div>
    </section>
  );
}
