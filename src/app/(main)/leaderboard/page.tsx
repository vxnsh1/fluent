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
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Promo } from "../learn/promo";
import { Quests } from "@/components/quests";

const LeaderboardPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();
  const topUsersData = getTopUsers();
  const [userProgress, userSubscription, topUsers] = await Promise.all([
    userProgressData,
    userSubscriptionData,
    topUsersData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }
  return (
    <div className="flex flex-row-reverse gap-12 px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={!!userSubscription?.isActive}
        />
        {!!!userSubscription?.isActive && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image
            src="/leaderboard.svg"
            alt="Leaderboard"
            width={90}
            height={90}
          />
          <h1 className="text-center font-bold text-neutral-800 text-2xl mt-4">
            Leaderboard
          </h1>
          <p className="text-muted-foreground text-center mb-6">
            Rise to the top!
          </p>
          <Separator className="mb-4" />
          {topUsers.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-300/50 transition-all duration-200"
            >
              <p className="font-bold mr-4">
                {idx + 1 === 1 ? (
                  <Image src="/crown.svg" alt="crown" width={22} height={22} />
                ) : (
                  `${idx + 1}.`
                )}
              </p>
              <Avatar className="w-10 h-10 mr-4">
                <AvatarImage src={userProgress.userImgSrc} className="" />
              </Avatar>
              <p className="font-semibold text-neutral-800 flex-1">
                {item.userName}
              </p>
              <p className="text-muted-foreground">{item.points} XP</p>
            </div>
          ))}
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LeaderboardPage;
