import { BhiveSpacesContext } from ".";
// import { BhiveSpace } from "./types";
import { data } from "./data";

// const spaces: BhiveSpace[] = [
//   {
//     id: "39ab7642-8de3-4e95-aa5d-34089bc67b90",
//     name: "Platinum, Indiranagar",
//     address:
//       "271, 6th Main Rd, HAL 2nd Stage, Motappapalya, Indiranagar, Bengaluru, Karnataka 560038, India",
//     latitude: 12.9732196,
//     longitude: 77.6406548,
//     google_maps_url:
//       "https://www.google.com/maps/place/BHIVE+Workspace+Platinum+Indiranagar/@12.9732196,77.6406548,15z/data=!4m2!3m1!1s0x0:0x310e3359eaf1ee4f?sa=X&ved=2ahUKEwjO3L_JgJ6BAxWzZWwGHSwRDXAQ_BJ6BAg9EAA&hl=en-US&ved=2ahUKEwjO3L_JgJ6BAxWzZWwGHSwRDXAQ_BJ6BAhNEAgm/maps/place/BHIVE+Workspace+Indiranagar/@12.9789187,77.6404881,17z/data=!4m6!3m5!1s0x3bae141e007a849d:0xbff26c814318fc77!8m2!3d12.9789187!4d77.643063!16s%2Fg%2F11bxf3zpnf?entry=ttu",
//     city: "Bengaluru",
//     state: "Karnataka",
//     country: "India",
//     postal_code: "560038",
//     description: null,
//     rules: null,
//     amenities: ["Conferencing facilities", "Parking"],
//     images: ["static_assets/5934c0fd9d574bddbde8175d86a2d2da.jpg"],
//     working_hours_start: "00:00",
//     working_hours_end: "23:59",
//     contact_person_name: "Lavena",
//     facilities: null,
//     is_active: true,
//     is_day_pass_enabled: true,
//     day_pass_price: 499,
//     day_pass_discounts_percentage: {
//       "1": {
//         value: 0,
//         message: "",
//       },
//       "10": {
//         value: 20,
//         message: "Pay for 8 Days, Get 2 Days Complimentary",
//       },
//     },
//     manager_id: null,
//   },
// ];

export const BhiveSpacesProvder = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <BhiveSpacesContext.Provider value={{ spaces: data }}>
      {children}
    </BhiveSpacesContext.Provider>
  );
};
