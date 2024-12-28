import HeroVideo from "@/assets/hero-video.mp4";
import Typography from "@/components/ui/typography";

export default function Hero() {
  return (
    <section className="">
      <div className="grid grid-cols-12 px-[120px] bg-[url(./assets/background-vector-desktop.svg)] h-96 container bg-no-repeat bg-center bg-cover">
        <div className="col-span-8 self-center">
          <Typography
            variant="h1"
            className="text-brand-primary tracking-[-1px]">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="text-brand-yellow">₹199/-!</span>
          </Typography>
        </div>
        <div className="col-span-4 pt-1">
          <video src={HeroVideo} autoPlay></video>
        </div>
      </div>
    </section>
  );
}
