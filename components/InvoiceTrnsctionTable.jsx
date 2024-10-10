import React, { useMemo } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/shadcn/ui/table";
import { Printer, EllipsisVertical, Forward } from "lucide-react";
import { useTable } from "react-table";
import MOCK_DATA_PARTY from "@/MOCK_DATA_INVOICE.json";
import { InvocieTableColumn } from "@/components/shadcn/columns";
import { WidthAdjustrInvoice } from "@/lib/utils";
/*WidthAdjustrInvoice: adjusting w of all cells*/

const InvoiceTrnsctionTable = () => {
    //inserting data into  memo hook
    const columns = useMemo(() => InvocieTableColumn, []);
    const data = useMemo(() => MOCK_DATA_PARTY, []);

    //you can also use shorthand prpty in es6,withut defining ":"
    const tableInstance = useTable({
        columns: columns,
        data: data,
    });

    //destructuring tableinstance
    //theese are basically func and arrays of useTablehook from react table that we can make hlp with ui
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
    //destructure all functions at jsx

    return (
        <>
            <div className="w-full max-w-full">
                {/* section-1 Header Table */}
                <section className="overflow-hidden">
                    {/*Ensure consistent column widths */}
                    <Table {...getTableProps()} style={{ tableLayout: "fixed" }}>
                        <TableHeader>
                            {headerGroups.map((e) => {
                                return (
                                    <TableRow {...e.getHeaderGroupProps()}>
                                        {e.headers.map((col, indexOfCol) => (
                                            <TableHead {...col.getHeaderProps()} className={`${WidthAdjustrInvoice(indexOfCol)} `}>
                                                {col.render("header")}
                                            </TableHead>
                                        ))}
                                        <TableHead className=" w-[100px]"></TableHead>
                                        <TableHead className=" w-[50px]" style={{ paddingRight: "58px" }}>
                                            padd adjst
                                        </TableHead>
                                    </TableRow>
                                );
                            })}
                        </TableHeader>
                    </Table>
                </section>

                {/* section-2 Scrollable Body Table */}
                <section className="overflow-y-scroll custom-scrollbar max-h-[420px]">
                    <Table
                        {...getTableProps()}
                        style={{ tableLayout: "fixed" }} // Ensure consistent column widths
                    >
                        <TableBody {...getTableBodyProps()}>
                            {rows.map((row, rowIndex) => {
                                prepareRow(row);
                                return (
                                    //rowIndex: dynamically adds the background color to every second row, mimicking the nth-child(even) behavior.
                                    <TableRow {...row.getRowProps()} className={`${rowIndex % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-300`}>
                                        {row.cells.map((cell, indexOfCell) => {
                                            return (
                                                <TableCell {...cell.getCellProps()} className={`${WidthAdjustrInvoice(indexOfCell)} `}>
                                                    {/*adjusting w of all cells*/}
                                                    {cell.render("Cell")}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell className="text-start w-[100px]">
                                            <span className="flex align-middle gap-3">
                                                <Printer size={20} color="#284561" />
                                                <Forward size={20} color="#284561" />
                                            </span>
                                        </TableCell>
                                        <TableCell className="w-[50px]">
                                            <EllipsisVertical size={20} color="#284561" />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </section>
            </div>
        </>
    );
};

export default InvoiceTrnsctionTable;
