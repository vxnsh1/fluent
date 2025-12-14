import { Button } from "@/components/ui/button";
import Link from "next/link";
import { quests } from "../../constants/constant";
import Image from "next/image";
import { Progress } from "./ui/progress";

type Props = {
  points: number,
}

export const Quests = async ({points}: Props) => {
  return (
    <div className="border-2 rounded-xl p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg w-full space-y-2">
          Quests
        </h3>
        <Link href="/quest">
          <Button size="sm" variant="primaryOutline">
              View All
          </Button>
        </Link>
      </div>
      <ul>
        {quests.slice(0,2).map((item, idx) => {
              const progress = (points / item.value) * 100;
              return (
                <div
                  key={idx}
                  className="flex items-center w-full p-4 mb-5 border-2 rounded-xl"
                >
                  <Image
                    src="/points.svg"
                    alt="Points"
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col gap-y-2 w-full">
                    <p className="text-neutral-700 font-semibold">
                      {item.title}
                    </p>
                  </div>
                  <Progress value={progress} className="h-3" />
                </div>
              );
            })}
      </ul>
    </div>
  );
};
