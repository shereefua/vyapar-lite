"use client";

import * as React from "react";
import { CheckCircle2, Circle, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/shadcn/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/shadcn/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/shadcn/ui/popover";

// Assume this is the common array that you cannot modify or recreate
const EmployeeList = [
    {
        value: "none",
        label: "None",
        icon: Circle,
    },
];

export function ComboboxPopover({ className }) {
    const [open, setOpen] = React.useState(false);
    const [selectedStatus, setSelectedStatus] = React.useState(null); // For selecting a status
    const [newStatus, setNewStatus] = React.useState(""); // To hold new status input

    // Function to handle adding a new status
    const handleAddNewStatus = () => {
        if (newStatus.trim() !== "") {
            // Add new status to the common EmployeeList array directly
            EmployeeList.push({
                value: newStatus.toLowerCase().replace(/\s+/g, "-"), // Create a value from the label
                label: newStatus,
                icon: CheckCircle2, // Default icon for new workers
            });
            setNewStatus(""); // Clear input after adding
        }
    };

    return (
        <div className={cn("flex flex-col ", className)}>
            {/* Status Selection */}
            <div className="flex items-center space-x-4">
                {/* <p className="text-sm text-muted-foreground">list</p> */}
                <Popover open={open} onOpenChange={setOpen} className={cn(className)}>
                    <PopoverTrigger asChild>
                        <Button variant="outline" size="sm" className="w-[150px] justify-start">
                            {selectedStatus ? (
                                <>
                                    <selectedStatus.icon className="mr-2 h-4 w-4 shrink-0" />
                                    {selectedStatus.label}
                                </>
                            ) : (
                                <>+ Add Worker</>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0" side="right" align="start">
                        <Command>
                            <CommandInput placeholder="Change status..." />
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>

                                {/* Custom items */}
                                <CommandItem>
                                    <div className="flex items-center space-x-1">
                                        <input
                                            type="text"
                                            placeholder="Add new worker..."
                                            value={newStatus}
                                            onChange={(e) => setNewStatus(e.target.value)}
                                            className="border p-2 rounded w-[222px]"
                                        />

                                        <Button variant="outline" size="sm" onClick={handleAddNewStatus}>
                                            <Check size={20} />
                                        </Button>
                                    </div>
                                </CommandItem>

                                <CommandGroup>
                                    {EmployeeList.map((status) => (
                                        <CommandItem
                                            key={status.value}
                                            value={status.value}
                                            onSelect={(value) => {
                                                setSelectedStatus(EmployeeList.find((status) => status.value === value) || null);
                                                setOpen(false);
                                            }}
                                        >
                                            <status.icon
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    status.value === selectedStatus?.value ? "opacity-100" : "opacity-40"
                                                )}
                                            />
                                            <span>{status.label}</span>
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>

            {/* Input for adding new status */}
            {/* <div className="flex items-center space-x-2">
                <input
                    type="text"
                    placeholder="Add new worker..."
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="border p-2 rounded w-[100px]"
                />
                <Button variant="primary" size="sm" onClick={handleAddNewStatus}>
                    Add Status
                </Button>
            </div> */}
        </div>
    );
}
