import Typography from "@/components/ui/typography";

export default function WhyChooseUsCard({
  iconUrl,
  title,
}: {
  iconUrl: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 md:p-6 border shadow-[0px_2px_4px_0px_#0000000F] md:shadow-none md:rounded-none rounded-md">
      <div className="flex items-center justify-center">
        <img src={iconUrl} alt={title} />
      </div>
      <Typography variant="h5" className="text-[#263238]">
        {title}
      </Typography>
    </div>
  );
}
