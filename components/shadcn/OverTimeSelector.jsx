import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/shadcn/ui/select";



const OverTimeSelector = () => {
    return (
        <>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Overtime Hours" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Select Hours</SelectLabel>
                        {Array.from(Array(12), (_, i) => (
                            <SelectItem key={i} value={`${i.toString().padStart(2, "0")}:00`}>
                                {`${i.toString().padStart(2, "0")}:00`}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    );
};

export default OverTimeSelector;
