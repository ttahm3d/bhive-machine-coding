import Typography from "@/components/ui/typography";
import MobileFrameDesktop from "@/assets/mobile-frame.svg";
import GooglePlay from "@/assets/google-play.png";
import AppStore from "@/assets/apple-store.png";

export default function Download() {
  return (
    // <section className="px-[120px] container bg-[url(./assets/mobile-frame.svg)] bg-[length:60vw_100vh] bg-no-repeat">
    <section className="px-5 md:px-[120px] container  overflow-hidden">
      <Typography
        variant="h2"
        className="mt-12 md:pl-12 text-[#263238] md:text-[#605F5F]">
        Download our app now
      </Typography>
      <div className="flex md:hidden bg-white flex-col px-3 pt-8 mt-12 rounded-md border-[0.5] border-[#eee7e7] shadow-[0px_0.86px_6.92px_0px_#0000000F]">
        <div>
          <img src={MobileFrameDesktop} alt="mobile-frame-mobile" />
        </div>
        <div className="flex items-center justify-center border-t p-3">
          <a
            href="https://play.google.com/store/apps"
            className="flex-1 w-full flex items-center justify-center"
            target="_blank"
            role="link">
            <img src={GooglePlay} alt="google-play" />
          </a>
          <a
            href="https://www.apple.com/in/store"
            className="flex-1 w-full flex items-center justify-center"
            target="_blank"
            role="link">
            <img src={AppStore} alt="app-store" />
          </a>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-12 bg-white mt-32 pb-8 pr-8 border rounded-lg shadow-[0px_2px_4px_0px_#0000000F] relative">
        <div className="absolute -top-24 left-24">
          <img
            src={MobileFrameDesktop}
            alt="mobile-desktop"
            className="object-contain"
          />
        </div>

        <Typography
          variant="h4"
          className="mt-12 pl-12 col-start-7 col-span-6 self-center text-[#605F5F]">
          Boost your productivity with the BHIVE Workspace app. Elevate your
          workspace, collaborate efficiently, and unlock exclusive perks.
        </Typography>
        <div className="pl-12 col-start-7 col-span-6 self-center flex gap-3 mt-8">
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            role="link">
            <img src={GooglePlay} alt="google-play" />
          </a>
          <a href="https://www.apple.com/in/store" target="_blank" role="link">
            <img src={AppStore} alt="app-store" />
          </a>
        </div>
      </div>
    </section>
  );
}
