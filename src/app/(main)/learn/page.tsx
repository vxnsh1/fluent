import FeedWrapper from "@/components/feedwrapper"
import { StickyWrapper } from "@/components/stickywrapper"
import { Header } from "./header";
import { UserProgress } from "@/components/userprogress";
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from "../../../../db/queries";
import { redirect } from "next/navigation";
import { Unit } from "./unit";

const LearnPage = async () => {
  const userProgressData = getUserProgress();
  const courseProgressData = getCourseProgress();
  const lessonPercentageData = getLessonPercentage();
  const unitsData = getUnits();
  const [
    userProgress,
    units,
    courseProgress,
    lessonPercentage,
  ] = await Promise.all([
    userProgressData,
    unitsData,
    courseProgressData,
    lessonPercentageData,
  ]);

  if(!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  if(!courseProgress){
    redirect("/courses");
  }

  return ( // removed flex-row-reverse idk why it was there
    <div className="flex gap-12 px-6">
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div key={unit.id} className="mb-10">
              <Unit 
                id={unit.id}
                order={unit.order}
                description={unit.description}
                title={unit.title}
                lessons={unit.lessons}
                activeLesson={courseProgress  .activeLesson}
                activeLessonPercentage={lessonPercentage}
              />
          </div>
        ))}
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