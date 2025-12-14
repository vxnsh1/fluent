import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Promo = () => {
  return (
    <div className="border-2 rounded-xl p-4 pl-px space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <Image src="/pro.svg" alt="Unlimited" width={68} height={68} />
          <div className="ml-5">
            <h3 className="text-center font-bold text-lg">Upgrade to Pro</h3>
            <p className="text-center text-muted-foreground">
              Get unlimited hearts and more!
            </p>
          </div>
        </div>
        <div className="px-10 mt-5 ml-5">
          <Link href="/shop">
            <Button variant="secondary" className="w-full">
              Upgrade now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
