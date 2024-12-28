import Typography from "@/components/ui/typography";
import MobileFrameDesktop from "@/assets/mobile-frame.svg";

export default function Download() {
  return (
    // <section className="px-[120px] container bg-[url(./assets/mobile-frame.svg)] bg-[length:60vw_100vh] bg-no-repeat">
    <section className="px-[120px] container">
      <Typography variant="h2" className="mt-12 pl-12 text-[#605F5F]">
        Download our app now
      </Typography>
      <div className=""></div>
      {/* <img src={MobileFrameDesktop} alt="mobile-desktop" /> */}
    </section>
  );
}
