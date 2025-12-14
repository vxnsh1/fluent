"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { startTransition, useTransition } from "react";
import { refillHearts } from "../../../../actions/userprogress";
import { toast } from "sonner";
import { createStripeUrl } from "../../../../actions/usersubscription";

type Props = {
  hearts: number;
  points: number;
  hasActiveSUbscription: boolean;
};

export const Items = ({ hearts, points, hasActiveSUbscription }: Props) => {
  const pointsToRefill: number = 20;

  const [pending, setTransaction] = useTransition();

  const onRefillHearts = () => {
    if (pending || hearts === 5 || points < pointsToRefill) {
      return;
    }

    startTransition(() => {
      refillHearts().catch(() => toast.error("Something went wrong"));
    });
  };

  const onUpgrade = () => {
    startTransition(() => {
      createStripeUrl().then((response) => {
        if(response.data){
          window.location.href = response.data;
        }
      })
      .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <ul className="w-full">
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image src="hearts.svg" alt="hearts" width={40} height={40} />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Refill hearts
          </p>
        </div>
        <Button
          className=""
          disabled={pending || hearts === 5 || points < pointsToRefill}
          onClick={onRefillHearts}
        >
          {hearts === 5 ? (
            "Full"
          ) : (
            <div className="flex items-center">
              <Image src="/points.svg" alt="Points" width={20} height={20} />
              <p>{pointsToRefill}</p>
            </div>
          )}
        </Button>
      </div>
      <div className="flex items-center w-full p-4 pt-6 gap-x-4 border-t-2">
        <Image src="/unlimited.svg" alt="Unlimited" width={40} height={40} />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Unlimited Hearts
          </p>
        </div>
        <Button onClick={onUpgrade} disabled={pending}>
          {hasActiveSUbscription ? "Settings" : "upgrade"}
        </Button>
      </div>
    </ul>
  );
};
