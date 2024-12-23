"use client"

import { useConvexAuth } from "convex/react";

import { ModeToggle } from "@/components/mode-toggle";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/spinner";

import { Logo } from "./logo";
import { SignInButton } from "@clerk/clerk-react";




export const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrollTop();
    return (
        <div className={cn(
            "z-50 bg-background dark:bg-[#121212] fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm"
            )}>
            <Logo />
            <div className="md:ml-auto md:justify-end
            justify-beteween w-full flex items-center gap-x-2">
              {isLoading && (
                <Spinner />
              )}
              {!isAuthenticated && !isLoading && (
                <>
                    <SignInButton mode="modal">
                        <Button variant="ghost" size="sm">
                          Log in  
                        </Button>
                    </SignInButton>
                    <SignInButton mode="modal">
                        <Button size="sm">
                          Get Mindly free  
                        </Button>
                    </SignInButton>
                </>
              )}
              <ModeToggle /> 
            </div>
        </div>
    )
}