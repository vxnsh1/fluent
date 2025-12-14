import { StickyWrapper } from "@/components/stickywrapper"
import { UserProgress } from "@/components/userprogress"
import { getUserProgress, getUserSubscription } from "../../../../db/queries"
import { redirect } from "next/navigation";
import FeedWrapper from "@/components/feedwrapper";
import Image from "next/image";
import { Items } from "./items";

const ShopPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();
  const [
    userProgress,
    userSubscription,
  ] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  if(!userProgress || !userProgress.activeCourse){
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
        </StickyWrapper>
        <FeedWrapper>
            <div className="w-full flex flex-col items-center">
                <Image src="/shop.svg" alt="Shop" width={90} height={90}/>
                <h1 className="text-center font-bold text-neutral-800 text-2xl mt-4">
                    Shop
                </h1>
                <p className="text-muted-foreground text-center mb-6">
                    Spend points on cool stuff.
                </p>
                <Items 
                  hearts={userProgress.hearts}
                  points={userProgress.points}
                  hasActiveSUbscription={!!userSubscription?.isActive}
                />
            </div>
        </FeedWrapper>
    </div>
  )
}

export default ShopPage