import React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const SearchBar = ({ className }) => {
    return (
        <div className={cn("relative ", className)}>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-500" />
            </span>
            <input
                type="search"
                aria-label="Search"
                className={cn("border pl-10 py-2 px-3 indent-5  rounded-md focus:outline-none focus:ring focus:border-blue-200 ",className)}
                placeholder="Search"
            />
        </div>

        // <div className="relative">
        //     <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        //         <Search className="h-5 w-5 text-gray-500" />
        //     </span>
        //     <input
        //         type="search"
        //         aria-label="Search"
        //         className={"border pl-10 py-2  px-3  rounded-md focus:outline-none focus:ring focus:border-blue-200"}
        //         placeholder="Search"
        //     />
        // </div>
    );
};

export default SearchBar;
