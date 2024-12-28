import Typography from "@/components/ui/typography";

export default function WhyChooseUsCard({
  iconUrl,
  title,
}: {
  iconUrl: string;
  title: string;
}) {
  return (
    <div className="flex gap-4 p-6 border-b border-r">
      <div className="flexx items-center justify-center">
        <img src={iconUrl} alt={title} />
      </div>
      <Typography variant="h5" className="text-[#263238]">
        {title}
      </Typography>
    </div>
  );
}
