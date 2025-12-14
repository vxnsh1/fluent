import { StickyWrapper } from "@/components/stickywrapper";
import { UserProgress } from "@/components/userprogress";
import {
  getTopUsers,
  getUserProgress,
  getUserSubscription,
} from "../../../../db/queries";
import { redirect } from "next/navigation";
import FeedWrapper from "@/components/feedwrapper";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Promo } from "../learn/promo";
import { quests } from "../../../../constants/constant";
import { Quests } from "@/components/quests";

const QuestPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();
  const [userProgress, userSubscription] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-12 px-10">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={!!userSubscription?.isActive}
        />
        {!!!userSubscription?.isActive && <Promo />}
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/quest.svg" alt="Quest" width={90} height={90} />
          <h1 className="text-center font-bold text-neutral-800 text-2xl mt-4">
            Quest
          </h1>
          <p className="text-muted-foreground text-center mb-6">
            Complete quests by earning points
          </p>
          <ul className="w-full">
            {quests.map((item, idx) => {
              const progress = (userProgress.points / item.value) * 100;

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
      </FeedWrapper>
    </div>
  );
};

export default QuestPage;
