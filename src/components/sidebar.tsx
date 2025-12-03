import { cn } from "@/lib/utils";

type Props = {
    className? : string
};

export const Sidebar = ({className}: Props) => {
  return (
    <div className={cn("bg-black h-full lg:w-64 lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col",
        className,
    )}>
        
    </div>
  )
}