import { Timer } from "lucide-react";

type MonitorHeaderProps = {
  title: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
};

export const MonitorHeader = ({
  title,
  description,
  tag,
  icon,
}: MonitorHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 px-6">
      <div className="flex gap-2 h-10 relative">
        <div className="w-10 h-10 bg-secondary !rounded-md flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col h-full">
          <h1 className="text-xs text-muted-foreground font-bold">
            {tag}
          </h1>
          <p className="text-lg font-semibold">
            {title}
          </p>
        </div>
      </div>
      <p className="text-muted-foreground text-sm text- text-left mr-10">
        {description}
      </p>
    </div>
  );
};
