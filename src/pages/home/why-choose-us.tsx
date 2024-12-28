import CommunityEvents from "@/assets/icons/community-events.svg";
import GymFacilities from "@/assets/icons/gym-facilities.svg";
import HighSpeedWifi from "@/assets/icons/high-speed-wifi.svg";
import CoffeeAndTeaBar from "@/assets/icons/cafe-and-tea-bar.svg";
import Affordable from "@/assets/icons/affordable.svg";
import ComfortLounges from "@/assets/icons/comfort-lounges.svg";
import QuickBooking from "@/assets/icons/quick-booking.svg";
import SportsArea from "@/assets/icons/sports-area.svg";
import Typography from "@/components/ui/typography";
import WhyChooseUsCard from "@/components/base/cards/why-choose-us-card";

export default function WhyChooseUs() {
  const options = [
    {
      icon: CommunityEvents,
      title: "Community Events",
    },
    {
      icon: GymFacilities,
      title: "Gym Facilities",
    },
    {
      icon: HighSpeedWifi,
      title: "High Speed Wifi",
    },
    {
      icon: CoffeeAndTeaBar,
      title: "Coffee And Tea Bar",
    },
    {
      icon: Affordable,
      title: "Affordable",
    },
    {
      icon: ComfortLounges,
      title: "Comfort Lounges",
    },
    {
      icon: QuickBooking,
      title: "Quick Booking",
    },
    {
      icon: SportsArea,
      title: "Sports Area",
    },
  ];

  return (
    <section className="px-5 md:px-[120px] container">
      <Typography variant="h2" className="mt-20 md:mt-12 text-[#263238]">
        Why Choose us?
      </Typography>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[85px]">
        {options.map((option, index) => (
          <WhyChooseUsCard
            key={index}
            iconUrl={option.icon}
            title={option.title}
          />
        ))}
      </div>
    </section>
  );
}
