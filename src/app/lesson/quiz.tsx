"use client"

import { useState } from "react";
import { challengeOptions, challenges } from "../../../db/schema"
import { Header } from "./header";
import { QuestionBubble } from "./questionbubble";
import { Challenge } from "./challenge";

type Props = {
  initialPercentage: number,
  initialHearts: number,
  initialLessonId: number,
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean,
    challengeOptions: typeof challengeOptions.$inferSelect[];
  })[];
  userSubscription: any;
  initialPoints: number,
}

export const Quiz = ({initialPercentage, initialHearts, initialLessonId, initialLessonChallenges, userSubscription}: Props) => {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);
  const [challenges] = useState(initialLessonChallenges)
  const [activeIndex, setActiveIndex] = useState((() => {
    const incompletedIndex = challenges.findIndex((challenge) => !challenge.completed);
    return incompletedIndex === -1 ? 0 :  incompletedIndex;
  }))

  const challenge = challenges[activeIndex];
  const title = challenge.type === "ASSIST" ? "Select the correct meaning" : challenge.question;
  const options = challenge?.challengeOptions ?? [];
  
  return (
    <>
      <Header 
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
      <div className="flex-1 max-md:h-[94vh]">
          <div className="h-full flex items-center justify-center">
              <div className="lg:min-h-87 lg:w-150 w-full px-10 lg:px-0 flex flex-col gap-y-12 md:mt-10 lg:mt-0">
                  <h1 className="text-lg lg:text-3xl lg:text-start font-bold text-center text-neutral-700">
                    {title}
                  </h1>
                  <div>
                      {challenge.type === "ASSIST" && (
                        <QuestionBubble question={challenge.question} />
                      )}
                      <Challenge 
                        options={options}
                        onSelect={() => {}}
                        status="none"
                        selectedOption={undefined}
                        disabled={false}
                        type={challenge.type}
                      />
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};
