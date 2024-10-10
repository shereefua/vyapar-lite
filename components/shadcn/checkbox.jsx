import React from "react";
// import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/shadcn/ui/radio-group";

const CheckBox = () => {
    return (
        <>
            <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-1">
                    <RadioGroupItem value="default" id="r1" className="h-4 w-4 accent-green-500 border border-green-500" />
                    <label htmlFor="r1" className="text-green-500">
                        fullday
                    </label>
                </div>
                <div className="flex items-center space-x-1">
                    <RadioGroupItem value="comfortable" id="r2" className="h-4 w-4 accent-orange-500 border border-orange-500" />
                    <label htmlFor="r2 " className="text-orange-500">
                        Halfday
                    </label>
                </div>
                <div className="flex items-center space-x-1">
                    <RadioGroupItem value="compact" id="r3" className="h-4 w-4 accent-red-500 border border-red-500" />
                    <label htmlFor="r3" className="text-red-500">
                        Absent
                    </label>
                </div>
            </RadioGroup>
        </>
    );
};

export default CheckBox;
