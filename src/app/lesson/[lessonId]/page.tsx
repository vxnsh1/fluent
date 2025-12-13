import { redirect } from "next/navigation";
import { getLesson, getUserProgress } from "../../../../db/queries";
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

    const [
        lesson,
        userProgress,
    ] = await Promise.all([
        lessonData,
        userProgressData,
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
                userSubscription = {null}
            />

        </div>
    )
}

export default LessonIdPage;