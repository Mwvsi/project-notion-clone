"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="ma-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:-6xl font-bold">
                 Welcome to <span
                className ="underline">
                    Mindly
                </span> <br />
                For your Ideas, Plans and Files.
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
               The workspace where minds meet and <br />
               better, faster work happens. 
            </h3>
            <Button>
                Join Mindly
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
    )
}