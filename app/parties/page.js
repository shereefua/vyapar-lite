"use client";

import React from "react";
// import Layout from "@/components/HomNav";
import PartiesTrnsctionTables from "@/components/PartiesTrnsctionTables";
import { Filter, ArrowDown, MessageSquareMore, BellRing, Search } from "lucide-react";
import { Input } from "postcss";

const PartyPage = () => {
    return (
        <>
            <div className="flex h-screen ">
                {/* Left-side container starts hold 33.3% width h-custom 90%*/}
                <aside className="flex flex-col w-3/12 m-2 h-9/10">
                    <div className="h-full flex flex-col petti">
                        {/*main div*/}

                        <section className=" truncate p-1">
                            {/* <div className="petti ">import parties</div> */}

                            <div className="flex justify-around mb-12">
                                <input
                                    type="search"
                                    placeholder="Search"
                                    className="w-full max-w-md px-2 py-1 border border-gray-300 rounded-md"
                                />
                                <button className="bg-orange-400 hover:bg-orange-500 text-white rounded-md px-4 py-2 ml-2">Add Party</button>
                            </div>

                            <div className="flex justify-between  ">
                                <div className="flex items-center">
                                    <span>
                                        <Filter />
                                    </span>
                                    <span>Party</span>
                                    <span>
                                        <ArrowDown />
                                    </span>
                                </div>
                                <button>Amount</button>
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
                    <section className="h-1/4 petti mb-4 truncate p-2">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row items-center">
                                <span>name</span>
                            </div>
                            <div className="flex flex-row items-center justify-end">
                                <ul className="flex flex-row gap-2">
                                    <li>
                                        <MessageSquareMore color="red" />
                                    </li>

                                    <li>
                                        <BellRing color="orange" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between mt-12">
                            <ul className="">
                                <li className="mb-2">add ph no</li>
                                <li className="mb-2">add email id</li>
                                <li className="mb-2">set credit limit</li>
                            </ul>

                            <ul>
                                <li>adress</li>
                            </ul>
                        </div>
                    </section>
                    
                    {/* 2nd rectangle-box upto 75% of height*/}
                    <section className="h-3/4 petti">
                        <div className="flex justify-between p-2 items-center">
                            <div className="text-2xl font-normal ">Transactions</div>
                            <div className=" md:hidden relative w-1/3 ">
                                {/* Icon Component */}
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Search className="h-5 w-5 text-gray-500" />
                                </span>
                                {/* Input Field */}
                                <input
                                    type="search"
                                    aria-label="Search transactions"
                                    className="border pl-10 py-2 px-3 w-full rounded-md focus:outline-none focus:ring focus:border-blue-200"
                                    placeholder="Search transactions"
                                />
                            </div>
                        </div>

                        <div className="mt-5  ">
                            <PartiesTrnsctionTables />
                        </div>
                    </section>
                </aside>
            </div>
        </>
    );
};

export default PartyPage;
