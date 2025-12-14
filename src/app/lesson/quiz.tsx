"use client";

import { useState, useTransition } from "react";
import { challengeOptions, challenges, userSubscription } from "../../../db/schema";
import { Header } from "./header";
import { QuestionBubble } from "./questionbubble";
import { Challenge } from "./challenge";
import { Footer } from "./footer";
import { upsertChallengeProgress } from "../../../actions/challengeprogress";
import { toast } from "sonner";
import { reduceHearts } from "../../../actions/userprogress";
import { useAudio, useMount } from "react-use";
import Image from "next/image";
import { Result } from "./result";
import { useRouter } from "next/navigation";
import { useHeartsModal } from "../../../store/useheartsmodal";
import { usePracticeModal } from "../../../store/usepracticemodal";

type Props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubscription: typeof userSubscription.$inferSelect & {
    isActive: boolean,
  } | null;
  initialPoints: number;
};

export const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChallenges,
  userSubscription,
}: Props) => {
  const { open: openHeartsModal } = useHeartsModal();
  const { open: openPracticeModal } = usePracticeModal();

  useMount(() => {
    if(initialPercentage === 100){
      openPracticeModal();
    }
  })
  const router = useRouter();
  const [finishAudio] = useAudio({ src: "/finish.mp3", autoPlay: true});
  const [correctAudioElement, correctAudioState, correctControls] = useAudio({
    src: "/correct.mp3",
  });
  const [wrongAudioElement, wrongAudioState, wrongControls] = useAudio({
    src: "/wrong.mp3",
  });

  const [pending, startTransition] = useTransition();
  const [lessonId] = useState(initialLessonId);
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(() => {
    return initialPercentage === 100 ? 0 : initialPercentage;
  });
  const [challenges] = useState(initialLessonChallenges); 
  const [activeIndex, setActiveIndex] = useState(() => {
    const incompletedIndex = challenges.findIndex(
      (challenge) => !challenge.completed
    );
    return incompletedIndex === -1 ? 0 : incompletedIndex;
  });
  const challenge = challenges[activeIndex];
  const [selectedOption, setSelectedOption] = useState<number>();
  const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");

 
  if (!challenge) {
    return (
      <>
        {finishAudio}
        <div className="flex flex-col gap-y-4 lg:gap-y-8 max-w-lg mx-auto text-center items-center justify-center h-[80vh] lg:h-[69vh]">
          <Image
            src="/finish.svg"
            alt="Finish"
            width={100}
            height={100}
            className="block lg:hidden"
          />

          <h1 className="text-xl lg:text-3xl font-bold text-neutral-700">
            Well done! <br />
            This lesson is completed.
          </h1>
          <div className="flex items-center gap-x-4 w-full">
              <Result 
                variant="points"
                value={challenges.length * 10}
              />
              <Result 
                variant="hearts"
                value={hearts}
              />
          </div>
        </div>

        <Footer 
          lessonId={lessonId}
          status="completed"
         onCheck={() => router.push("/learn")} 
        />

      </>
    );
  }

  const title =
    challenge.type === "ASSIST"
      ? "Select the correct meaning"
      : challenge.question;
  const options = challenge?.challengeOptions ?? [];

  const onNext = () => {
    setActiveIndex((current) => current + 1);
  };

  const onSelect = (id: number) => {
    if (status !== "none") return;
    setSelectedOption(id);
  };

  const onContinue = () => {
    if (!selectedOption) return;

    if (status === "wrong") {
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    if (status === "correct") {
      onNext();
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    const correctOption = options.find((option) => option.correct);

    if (!correctOption) return;

    if (correctOption.id === selectedOption) {
      startTransition(() => {
        upsertChallengeProgress(challenge.id)
          .then((response) => {
            if (response?.error === "hearts") {
              openHeartsModal();
              return;
            }

            correctControls.play();
            setStatus("correct");
            setPercentage((prev) => prev + 100 / challenges.length);

            if (initialPercentage === 100) {
              setHearts((prev) => Math.min(prev + 1, 5));
            }
          })
          .catch(() => toast.error("Something went wrong. Please try again."));
      });
    } else {
      startTransition(() => {
        reduceHearts(challenge.id)
          .then((response) => {
            if (response?.error === "hearts") {
              openHeartsModal();
              return;
            }

            wrongControls.play();
            setStatus("wrong");

            if (!response?.error) {
              setHearts((prev) => Math.max(prev - 1, 0));
            }
          })
          .catch(() => toast.error("Something went wrong. Please try again."));
      });
    }
  };

  return (
    <>
      {correctAudioElement}
      {wrongAudioElement}
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
      <div className="flex-1 max-md:h-[70vh] lg:h-[60vh]">
        <div className="h-full flex items-center justify-center">
          <div className="lg:min-h-87 lg:w-150 w-full px-10 lg:px-0 flex flex-col gap-y-12 md:mt-10 lg:mt-0 mb-10">
            <h1 className="text-lg lg:text-3xl lg:text-start font-bold text-center text-neutral-700">
              {title}
            </h1>
            <div>
              {challenge.type === "ASSIST" && (
                <QuestionBubble question={challenge.question} />
              )}
              <Challenge
                options={options}
                onSelect={onSelect}
                status={status}
                selectedOption={selectedOption}
                disabled={pending}
                type={challenge.type}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer
        disabled={pending || !selectedOption}
        status={status}
        onCheck={onContinue}
      />
    </>
  );
};
