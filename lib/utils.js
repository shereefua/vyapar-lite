import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//taiwind uses
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// helper functions invoiceTrnsctionTable
//usecase:adjusting the width of invoiceTrnsctionTable
export function WidthAdjustrInvoice(index) {
    if (index === 0 || index === 1) {
        return "w-[100px]"; // First two columns
    } else if (index === 2) {
        return "w-[200px]"; // Third column
    } else {
        return "w-[105px]"; // Rest of the columns
    }
}

export function WidthAdjustrLabour(index) {
    if (index === 0) {
        return "w-[50px]"; 
    } else if (index === 1) {
        return "w-[300px]";
    }  else {
        return "w-[250px]"; // Rest of the columns
    }
}


export function WidthAdjustrSalary(index){
   if (index === 0 || index === 2) {
       return "w-[50px]"; 
   } else if (index === 1) {
       return "w-[150px]";
   } else {
       return "w-[100px]"; // Rest of the columns
   }
}
