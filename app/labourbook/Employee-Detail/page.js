import React from "react";
import { MessageSquareMore, Search } from "lucide-react";
import LabourSalaryTable from "@/components/LabourSalaryTable"
import {DatePickerWithRange} from "@/components/shadcn/DatePickerWithRange";
import { ComboboxPopover } from "@/components/shadcn/comboboxpopover";
import SearchBar from "@/components/shadcn/SearchBar"
const Employee_Detail = () => {
    return (
        <>
            <div className="flex h-screen ">
                {/* Left-side container starts hold 33.3% width h-custom 90%*/}
                <aside className="flex flex-col w-3/12 m-2 h-9/10 ">
                    <div className="h-full flex flex-col petti p-2">
                        {/*main div*/}
                        <section className=" truncate p-1 ">
                            {/* <div className="petti ">import parties</div> */}

                            <div className="flex justify-between mb-12 ">
                                <input
                                    type="search"
                                    placeholder="Search"
                                    className="w-44 mr-1 max-w-md px-2 py-1 border border-gray-300 rounded-md"
                                />
                                <button className="mr-32">
                                    <ComboboxPopover className={"w-28"} />
                                </button>
                            </div>

                            <div className="flex justify-between  ">
                                <div className="flex items-center">
                                    {/* <span>
                                        <Filter />
                                    </span> */}
                                    <span>Name</span>
                                    {/* <span>
                                        <ArrowDown />
                                    </span> */}
                                </div>
                                <button>Label</button>
                            </div>
                        </section>

                        {/*scrolable list */}
                        <section className="flex-1 h-full custom-scrollbar overflow-y-auto border-t">
                            <div className="flex flex-col p-2 pb-11">
                                <ul className="space-y-2">
                                    <li className="flex justify-between items-center hover:bg-gray-100 hover:text-gray-900 cursor-pointer active:bg-gray-200 ">
                                        <span className="text-left text-gray-800 font-semibold">Item 1</span>
                                        <span className="text-end text-gray-600">$50</span>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </aside>
                {/* Left-side container ends here*/}

                {/* Right section starts holds 66.6% width custom-height-90%*/}
                <aside className="flex flex-col w-9/12 m-2 h-9/10 ">
                    {/* 1st rectangle-box upto 25% of height */}
                    <section className="h-1/4 petti mb-4 truncate p-3">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row items-center">
                                <span>name</span>
                            </div>
                            <div className="flex flex-row items-center justify-end">
                                <ul className="flex flex-row gap-2">
                                    <li>
                                        <MessageSquareMore color="red" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mt-12">
                            <div className="">
                                <ul className="">
                                    <li className="mb-2">total worked days</li>
                                    <li className="mb-2">due amount</li>
                                    <li className="mb-2"></li>
                                </ul>
                            </div>
                            <div className="">
                                <ul>
                                    <li>adress</li>
                                    <li>label workedr</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/* 2nd rectangle-box upto 75% of height*/}
                    <section className="h-3/4 petti">
                        <div className="flex justify-between p-2 items-center ">
                            <h1 className="text-xl font-normal  ">Attendence sheet</h1>

                            <div className=" hidden md:flex items-center">
                                <span className="mr-3 flex-shrink-0">
                                    <DatePickerWithRange />
                                </span>

                                <div className=" flex-shrink-0">
                                    <SearchBar />
                                </div>
                            </div>
                        </div>

                        <div className="mt-5  ">
                            <LabourSalaryTable />
                        </div>
                    </section>
                </aside>
            </div>
        </>
    );
};

export default Employee_Detail;
