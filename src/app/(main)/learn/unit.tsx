import { lessons, units } from "../../../../db/schema"
import { UnitBanner } from "./unitbanner";
import { LessonButton } from "./lessonbutton";

type Props = {
    id: number,
    order: number,
    description: string,
    title: string,
    lessons: (typeof lessons.$inferSelect & {
        completed: boolean,
    })[],
    activeLesson: typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
    } | undefined,
    activeLessonPercentage: number,
}

export const Unit = ({ id, order, description, title, lessons, activeLesson, activeLessonPercentage }: Props) => {
    return (
        <>
            <UnitBanner title={title} description={description} />
            <div className="flex items-center flex-col relative">
                {lessons.map((lesson, idx) => {
                    const isCurrent = lesson.id === activeLesson?.id;
                    const isLocked = !lesson.completed && !isCurrent;

                    return (
                        <LessonButton 
                            key={lesson.id}
                            id={lesson.id}
                            index={idx}
                            totalCount={lessons.length - 1}
                            current={isCurrent}
                            locked={isLocked}
                            percentage={activeLessonPercentage}
                        />
                    );
                })}
            </div>
        </>
    );
};
