"use client";
import React from "react";
import InvoiceTrnsctionTable from "@/components/InvoiceTrnsctionTable";
import { DatePickerWithRange } from "@/components/shadcn/DatePickerWithRange";
import { ChartNoAxesColumn, Sheet, Printer } from "lucide-react";
import { PaymentInSelector } from "@/components/shadcn/PaymentInSelector";
import SearchBar from "@/components/shadcn/SearchBar";
// import TransactionTable from "@/components/TransactionTable";

const InvoicePage = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                {/* first heder container holds 160px hieght */}
                <header className="h-40 m-2 mx-4 petti p-2">
                    <div className="flex flex-row items-center mb-2">
                        {/* first dropdownselector */}
                        <section>
                            <span className="w-52 h-10  flex items-center justify-center">
                                <PaymentInSelector />
                            </span>
                        </section>

                        {/* date picker component */}
                        <section className="flex-grow ">
                            <DatePickerWithRange />
                        </section>

                        {/* icons section */}
                        <section className="flex space-x-2">
                            <div className="flex flex-col items-center">
                                <span className="w-8 h-8 flex items-center justify-center">
                                    <ChartNoAxesColumn />
                                </span>
                                <span className="text-xs text-center">graph</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="w-8 h-8 flex items-center justify-center">
                                    <Sheet />
                                </span>
                                <span className="text-xs text-center">excel report</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="w-8 h-8 flex items-center justify-center">
                                    <Printer />
                                </span>
                                <span className="text-xs text-center">printer</span>
                            </div>
                        </section>
                    </div>

                    {/* header section second row starts here */}
                    <div className="flex flex-row gap-4">
                        <span className="w-44 h-16 bg-green-200 flex items-center justify-center">paid</span>

                        <span className="w-44 h-16 bg-blue-300 flex items-center justify-center">unpaid</span>

                        <span className="w-44 h-16 bg-orange-300 flex items-center justify-center">total</span>
                    </div>
                </header>

                {/*second main part*/}
                <main className="petti h-4/6 mx-4 ">
                    <h5 className="text-lg capitalize p-2">transactions</h5>

                    <section className="flex justify-between mt-1 p-2">
                       < SearchBar/>
                        <button className="bg-orange-400 hover:bg-orange-500 text-white rounded-md px-4 py-2 ml-2">Add sale</button>
                    </section>

                    {/*tablecomponent*/}

                    {/* <section className="mt-4 flex-1 overflow-y-auto">
                        <TransactionTable />
                    </section> */}
                    <section className="  mt-4">
                        <InvoiceTrnsctionTable />
                    </section>
                </main>
            </div>
        </>
    );
};

export default InvoicePage;
