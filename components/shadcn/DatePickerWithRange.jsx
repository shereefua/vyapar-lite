"use client";

import * as React from "react";
import { addDays, format, startOfMonth, endOfMonth } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "../../lib/utils";

import { Button } from "@/components/shadcn/ui/button";
import { Calendar } from "@/components/shadcn/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/shadcn/ui/popover";

export function DatePickerWithRange({ className }) {
 

    const [date, setDate] = React.useState({
        from: startOfMonth(new Date()),
        to: endOfMonth(new Date()),
    });

    return (
        <div className={cn("grid gap-2 ", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn("w-[320px] justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                        <span className=" from-accent-foreground  mr-3 ">Between -</span>
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} to {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}

                        <CalendarIcon className="ml-2 h-4 w-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2} />
                </PopoverContent>
            </Popover>
        </div>
    );
}
