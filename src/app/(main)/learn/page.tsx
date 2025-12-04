import FeedWrapper from "@/components/feedwrapper"
import { StickyWrapper } from "@/components/stickywrapper"
import { Header } from "./header";
import { UserProgress } from "@/components/userprogress";
import { getUserProgress } from "../../../../db/queries";
import { redirect } from "next/navigation";

const LearnPage = async () => {
  const userProgressData = getUserProgress();
  const [
    userProgress,
  ] = await Promise.all([
    userProgressData
  ]);

  if(!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return ( // removed flex-row-reverse idk why it was there
    <div className="flex gap-12 px-6">
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress 
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  );
};

export default LearnPage