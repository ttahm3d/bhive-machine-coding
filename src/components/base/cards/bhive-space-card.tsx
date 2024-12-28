import Typography from "@/components/ui/typography";
import { BhiveSpace } from "@/context/BhiveSpaces/types";
import DirectionIcon from "@/assets/icons/direction.svg";
import ArrowsOutlinedIcon from "@/assets/icons/arrows-outlined.svg";

import { Button } from "@/components/ui/button";
import { useMemo } from "react";

export default function BhiveSpaceCard({ space }: { space: BhiveSpace }) {
  const bulkPrice = useMemo(() => {
    const discountDays = Object.keys(space.day_pass_discounts_percentage)
      .filter((days) => days !== "1")
      .map(parseInt);
    const discountOfferedForDays = discountDays[0];
    const discountPercentage =
      space.day_pass_discounts_percentage[discountOfferedForDays]?.value;

    return { discountOfferedForDays, discountPercentage };
  }, [space.day_pass_discounts_percentage]);

  return (
    <div className="border-[1.08px] border-[#eee7e7] p-2 flex flex-col justify-between gap-4 w-[370px] rounded-md">
      <div className="grid grid-cols-12 items-center">
        <Typography
          variant="h4"
          className="text-[#263238] text-lg md:text-xl col-span-8">
          {space.name}
        </Typography>
        <div className="col-span-4 bg-[#f9f9f9] justify-self-end border-[0.47px] border-[#eee7e7] py-2 px-4 rounded-md">
          <div className="flex items-center justify-center">
            <img src={DirectionIcon} alt="direction" width={18} height={18} />
          </div>
          <small className="text-[8px] font-medium">6 Kms</small>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-xl relative">
        <img
          src={space.images[0]}
          alt={space.name}
          className="rounded-xl h-48 w-full"
        />
      </div>
      <div className="flex gap-4 mt-4">
        <Button
          variant="outline"
          className="w-full flex justify-between p-3 min-h-[66px]">
          <div className="flex flex-col items-start">
            <p className="text-sm font-medium text-brand-secondary">Day Pass</p>
            <Typography variant="h4" className="text-[#263238]">
              &#8377;{space.day_pass_price}
              <span className="text-xs font-medium text-[#263238]/80">
                / Day
              </span>
            </Typography>
          </div>
          <div>
            <img src={ArrowsOutlinedIcon} alt="arrows-outlined" />
          </div>
        </Button>
        <Button className="w-full flex justify-between p-3 min-h-[66px] relative">
          <div className="flex flex-col items-start">
            <p className="text-sm font-medium text-brand-secondary">
              Bulk Pass
            </p>
            <Typography variant="h4" className="text-[#263238]">
              &#8377;{bulkPrice.discountOfferedForDays * space.day_pass_price}
              <span className="text-xs font-medium text-[#263238]/80">
                / {bulkPrice.discountOfferedForDays} Days
              </span>
            </Typography>
          </div>
          <div>
            <img src={ArrowsOutlinedIcon} alt="arrows-outlined" />
          </div>
          <div className="absolute top-[-10px] left-[50%] translate-x-[-50%] bg-[#263238] px-2 rounded-[3px] leadinng-[9.8px] text-[8px] text-[#FFFDF7]">
            {bulkPrice.discountPercentage}% Discount
          </div>
        </Button>
      </div>
    </div>
  );
}
