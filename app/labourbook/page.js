"use client";
import { useState } from "react";
import Attendece_Trcker from "./Attendece-Trcker/page";
import Employee_Detail from "./Employee-Detail/page";

const Labour_book = () => {
    const [activePage, setActivePage] = useState("Attendance Marker");

    return (
        <div className="">
            {/* Navbar */}
            <nav className=" bg-[rgb(250,250,250)] shadow-md w-full flex justify-evenly border-b border-gray-200">
                <a
                    href="#"
                    onClick={() => setActivePage("Attendance Marker")}
                    className={`text-lg font-medium flex-1 text-center transition-colors duration-300 ${
                        activePage === "Attendance Marker" ? "border-b-4 border-blue-200 text-black" : "text-gray-500 hover:text-blue-500"
                    }`}
                >
                    Attendance Marker
                </a>
                <a
                    href="#"
                    onClick={() => setActivePage("Employee Detail")}
                    className={`text-lg font-medium flex-1 text-center transition-colors duration-300 ${
                        activePage === "Employee Detail" ? "border-b-4 border-blue-200 text-black" : "text-gray-500 hover:text-blue-500"
                    }`}
                >
                    Employee Detail
                </a>
            </nav>

            {/* Render components based on the selected page */}
            <div className="">
                {activePage === "Attendance Marker" && <Attendece_Trcker />}
                {activePage === "Employee Detail" && <Employee_Detail />}
            </div>
        </div>
    );
};

export default Labour_book;
