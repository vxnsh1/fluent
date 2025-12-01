import { Loader } from "lucide-react"
import Image from "next/image"
import { 
  ClerkLoaded, 
  ClerkLoading, 
  SignedIn, 
  SignedOut, 
  SignInButton,
  UserButton, 
} from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

export const Header = () => {
  return (
    <div>
      <header className="h-20 w-full px-4">
        <div className="lg:max-w-screen-5xl mx-auto flex items-center justify-between h-full">
          <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
            <Image src="/logo.svg" width="50" height="50" alt="logo"></Image>
            <h1 className="text-2xl tracking-tighter font-bold ">Fluent</h1>
          </div>
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal" forceRedirectUrl="/learn">
                  <Button size="lg" variant="ghost">
                    Login
                  </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </header>
    </div>
  )
}