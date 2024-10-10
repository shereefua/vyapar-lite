import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/shadcn/ui/select";

export function PaymentInSelector() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Last Month" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="ThisMonth">This Month</SelectItem>
                    <SelectItem value="LastMonth">Last Month</SelectItem>
                    <SelectItem value="ThisQuarter">This Quarter</SelectItem>
                    <SelectItem value="ThisYear">This Year</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
