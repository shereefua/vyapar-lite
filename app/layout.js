"use client";
import "@/global.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


import {
    Home,
    AlignRight,
    Users,
    ChartNoAxesCombined,
    ShoppingCart,
    Search,
    NotebookText,
    ChevronsLeft,
    Printer,
    Bell,
    Settings,
    icons,
} from "lucide-react";

// export const metadata = {
//     title: "Create Next App",
//     description: "Generated by create next app",
// };

const navLinks = [
    { label: "HOME", href: "/", icons: <Home /> },
    { label: "LABOUR BOOK", href: "/labourbook", icons: <NotebookText /> },
    { label: "WORK SITES", href: "/worksite", icons: <NotebookText /> },
    { label: "PARTIES", href: "/parties", icons: <Users /> },
];

const navDropdowns = [
    {
        label: "SALES+",
        icons: <ChartNoAxesCombined />,
        links: [
            { label: "Invoice List", href: "/sales/invoice", icons: <Users /> },

            {
                label: "Payment-IN",
                href: "/sales/payment-in",
                icons: <Users />,
            },
            {
                label: "Recievables",
                href: "/sales/recievables",
                icons: <Users />,
            },
        ],
    },
];

export default function RootLayout({ children }) {
    // const navbarHidden = !document.querySelector("nav").classList.contains("lg:block");
    return (
        <html lang="en">
           
            <body className="antialiased  bg-gray-100 ">
                <div className="h-screen grid grid-cols-6 ">
                    {/*navaside starting point \ */}
                    <aside className={`col-span-1   bg-navbar text-red-100 p-3 `}>
                        <div className="flex justify-between">
                            <span className="text-2xl">logo</span>
                        </div>

                        {/*nav items*/}
                        <ul className="mt-10">
                            {navLinks.map((e) => (
                                <li key={e.label} className="mt-2">
                                    <Link href={e.href} className="flex justify-normal py-2 hover:bg-zinc-500 rounded-md">
                                        <span className="mt-2">{e.icons}</span>
                                        <span className="mt-2 lg:block hidden">{e.label}</span>
                                    </Link>
                                </li>
                            ))}
                            <hr className=" mt-2 w-auto border-b-1 border-red-200 shadow-md" />
                            {navDropdowns.map((e) => (
                                <details key={e.label} className="mt-2">
                                    <summary className="mt-2">{e.label}</summary>
                                    <ul className="mt-2">
                                        {e.links.map((e) => (
                                            <li key={e.href} className="mt-2">
                                                <Link href={e.href} className="flex justify-normal py-2 hover:bg-zinc-500 rounded-md">
                                                    <span className="lg:block hidden">{e.label}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            ))}
                        </ul>
                    </aside>

                    {/*layout main in grid layout */}
                    <header className="col-span-5 border-l ">
                        <div className="lg:flex-grow">
                            {/*used this div to use the rest of the space after the nav*/}
                            <header className={`flex justify-between items-center h-16 py-2 bg-header shadow-md`}>
                                <div className="ml-9 flex justify-normal flex-grow">
                                    <Search color="gray" size={24} className="inline-block w-9" />
                                    <input type="search" placeholder="Search..." className="w-64 text-lg text-gray-700 outline-none" />
                                </div>

                                <div className="flex justify-end">
                                    {/* flex-shrink-0 to prevent the button from shrinking and losing its shape*/}
                                    <button className="btn_header flex-shrink-0 mx-2">button 1</button>
                                    <button className="btn_header flex-shrink-0 mx-2">button 2</button>
                                    <button className="btn_header flex-shrink-0 mx-2">button 3</button>
                                </div>

                                <div className="h-8 border-l border-r-0 border-t-0 border-b-0 bg-navbar"></div>

                                <div className="m-3 flex justify-end">
                                    <button className="mx-2 ">
                                        <Bell color="grey" />
                                    </button>

                                    <button className="mx-2 ">
                                        <Settings color="grey" />
                                    </button>

                                    <button className="mx-2 ">
                                        <Printer color="grey" />
                                    </button>
                                </div>
                            </header>
                        </div>
                        <div className="">{children}</div>
                    </header>
                </div>
            </body>
        </html>
    );
}
