import { Loader } from "lucide-react";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-10">

      <div className="relative w-60 h-40 lg:w-[624px] lg:h-[324px]">
        <Image src="/hero.svg" alt="Hero Image" fill />
      </div>


      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-y-6 w-full max-w-sm">
        
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600">
          Learn, practice and master new languages with Fluent.
        </h1>

        <div className="w-full flex flex-col gap-3">

          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>

          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" forceRedirectUrl="/learn">
                <Button size="lg" variant="secondary" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>

              <SignInButton mode="modal" forceRedirectUrl="/learn">
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
                <Button size="lg" variant="secondary" className="w-full" asChild>
                  <Link href="/learn">
                    Continue Learning
                  </Link>
                </Button>
            </SignedIn>
          </ClerkLoaded>

        </div>
      </div>

    </div>
  );
}
