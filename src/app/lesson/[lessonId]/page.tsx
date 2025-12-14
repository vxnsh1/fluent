import { redirect } from "next/navigation";
import { getLesson, getUserProgress, getUserSubscription } from "../../../../db/queries";
import { Quiz } from "../quiz";

type Props = {
    params: {
        lessonId: number,
    };
};

const LessonIdPage = async ({
    params,
}: Props) => {
    const id = await params;
    const lessonData = getLesson(id.lessonId);
    const userProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();

    const [
        lesson,
        userProgress,
        userSubscription,
    ] = await Promise.all([
        lessonData,
        userProgressData,
        userSubscriptionData,
    ]);

    if (!lesson || !userProgress) redirect("/learn");

    const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;
    return (
        <div className="h-full">
            <Quiz 
                initialLessonId = {lesson.id}
                initialLessonChallenges = {lesson.challenges}
                initialHearts = {userProgress.hearts}
                initialPoints = {userProgress.points}
                initialPercentage = {initialPercentage}
                userSubscription = {userSubscription}
            />
        </div>
    )
}

export default LessonIdPage;