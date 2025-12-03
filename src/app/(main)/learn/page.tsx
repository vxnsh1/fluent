import FeedWrapper from "@/components/feedwrapper"
import { StickyWrapper } from "@/components/stickywrapper"
import { Header } from "./header";
import { UserProgress } from "@/components/userprogress";

const LearnPage = () => {
  return ( // removed flex-row-reverse idk why it was there
    <div className="flex gap-12 px-6">
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress 
          activeCourse={{ title: "Spanish", imageSrc:"/india.svg"}}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  );
};

export default LearnPage