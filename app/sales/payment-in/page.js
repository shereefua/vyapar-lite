"use client";

import React from "react";
import { DatePickerWithRange } from "@/components/shadcn/DatePickerWithRange";
import { PaymentInSelector } from "@/components/shadcn/PaymentInSelector";
import { Sheet, Printer } from "lucide-react";
import SearchBar from "@/components/shadcn/SearchBar";
import { Button } from "@/components/shadcn/ui/button";
import PaymentInTable from "@/components/PaymentInTable";

const PaymentInPage = () => {
    return (
        <>
            <div className="flex flex-col h-screen w-full ">
                <header className="petti h-32 m-2 mx-4">
                    <section className="flex justify-between p-3 ">
                        {/* selector components */}
                        <div className="flex space-x-5">
                            <span>
                                <PaymentInSelector />
                            </span>
                            <span className=" ">
                                <DatePickerWithRange />
                            </span>
                        </div>
                        {/* icons sect */}
                        <div className="lg:flex space-x-3 sm:hidden">
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
                        </div>
                    </section>

                    <section className="flex justify-end ">
                        <span className="mr-3">
                            <PaymentInSelector />
                        </span>
                    </section>
                </header>

                {/*second main part*/}
                <main className="petti h-4/6 mx-4  ">
                    <section className=" flex justify-between  border-gray-950 p-3">
                        <span>
                            <SearchBar className={"w-52 h-8"}/>
                        </span>

                        <span>
                            <Button size="lgW" variant="blue">
                                add payment-in
                            </Button>
                        </span>
                    </section>

                    <section className="">
                        <PaymentInTable />
                    </section>
                </main>
            </div>
        </>
    );
};

export default PaymentInPage;
