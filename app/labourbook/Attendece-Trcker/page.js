"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import LabourAttendenceTable from "@/components/LabourAttendenceTable";
import { DatePickerWithRange } from "@/components/shadcn/DatePickerWithRange";
import { Textarea } from "@/components/shadcn/ui/textarea";
import { ComboboxPopover } from "@/components/shadcn/comboboxpopover";
import OverTimeSelector from "@/components/shadcn/OverTimeSelector";
import CheckBox from "@/components/shadcn/checkbox";
import { Button } from "@/components/shadcn/ui/button";
import SearchBar from "@/components/shadcn/SearchBar"
const Attendece_Trcker = () => {
    const [isHeaderOpen, setIsHeaderOpen] = useState(true); // State to toggle header visibility

    const toggleHeader = () => {
        setIsHeaderOpen(!isHeaderOpen); // Toggle header open/close
    };

    return (
        <>
            <div className="flex flex-col h-screen">
                {/* HEADER */}
                <header
                    className={`relative   m-2 overflow-hidden transition-all duration-300 rounded-lg shadow-lg ${
                        isHeaderOpen ? "h-36 petti" : "h-9"
                    }`}
                >
                    {/* Content of the header */}
                    {isHeaderOpen && (
                        <>
                            <section className="flex  flex-row justify-between m-2 ">
                                {/* Header title */}
                                <div className="flex flex-col  justify-between">
                                    <span className="text-gray-700 font-semibold ">NAME:</span>
                                    <span>
                                        <CheckBox />
                                    </span>
                                </div>

                                {/* Container to align Select and Textarea */}
                                <div className=" flex items-center space-x-4 ">
                                    {/* OverTime Selection */}
                                    <span className="pb-8">
                                        <OverTimeSelector />
                                    </span>

                                    {/* Textarea for additional information */}
                                    <Textarea placeholder="Add details here..." />
                                </div>
                            </section>
                            <section className="flex justify-between  m-2">
                                <div className="mt-3">
                                    <ComboboxPopover />
                                </div>

                                <div className="">
                                    <Button size="lgW" variant="">
                                        Save
                                    </Button>
                                </div>
                            </section>
                        </>
                    )}

                    {/* Toggle button */}
                    <div onClick={toggleHeader} className="absolute bottom-1 right-0 cursor-pointer  text-black  transition-colors duration-200">
                        {isHeaderOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                    </div>
                </header>

                <main className="petti border border-red-800  m-2  h-[500px]">
                    <section className="px-5 py-2 flex justify-between">
                        <h2 className="text-2xl font-bold ">Attendance Marker</h2>
                        <div className=" hidden md:flex items-center  space-x-2">
                            <span className=" flex-shrink-0 ">
                                <DatePickerWithRange />
                            </span>


                            <span className="flex-shrink-0">
                                <SearchBar />
                            </span>

                          
                        </div>
                    </section>

                    {/* TABLE COMPONENT */}
                    <section className=" mt-4">
                        <LabourAttendenceTable />
                    </section>
                </main>
            </div>
        </>
    );
};

export default Attendece_Trcker;
