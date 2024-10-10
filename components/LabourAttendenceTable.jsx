import React from "react";
import { TableHeader, Table, TableRow, TableHead, TableBody, TableCell } from "@/components/shadcn/ui/table";
import MOCK_DATA_LABOUR from "@/MOCK_DATA _LABOUR.json";
import { useMemo } from "react";
import { useTable } from "react-table";
import { LabourAttendenceColumn } from "@/components/shadcn/columns";
import { WidthAdjustrLabour } from "@/lib/utils";
import { Trash2, ExternalLink, EllipsisVertical } from "lucide-react";
import CheckBox from "./shadcn/checkbox";
<CheckBox />;
const LabourAttendenceTable = () => {
    //inserting data into  memo hook
    const columns = useMemo(() => LabourAttendenceColumn, []);
    const data = useMemo(() => MOCK_DATA_LABOUR, []);

    //you can use shorthand prpty in es6,
    const tableInstance = useTable({
        columns: columns,
        data: data,
    });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

    return (
        <>
            <div className="w-full max-w-full">
                <section className="overflow-hidden">
                    {/* Ensure consistent column widths */}
                    <Table {...getTableProps()} style={{ tableLayout: "fixed" }}>
                        <TableHeader>
                            {headerGroups.map((e) => {
                                return (
                                    <TableRow {...e.getHeaderGroupProps()}>
                                        {e.headers.map((col, index) => {
                                            return (
                                                <TableHead {...col.getHeaderProps()} className={`${WidthAdjustrLabour(index)}`}>
                                                    {col.render("header")}
                                                </TableHead>
                                            );
                                        })}
                                        {/* <TableHead className=" w-[100px] ">attendece</TableHead> */}
                                        {/* paddingRightproblm */}
                                        <TableHead className=" w-[100px] " style={{ paddingRight: "109px" }}>
                                            paddi
                                        </TableHead>
                                    </TableRow>
                                );
                            })}
                        </TableHeader>
                    </Table>
                </section>

                <section className="overflow-y-scroll custom-scrollbar max-h-[380px]">
                    <Table {...getTableProps()} style={{ tableLayout: "fixed" }}>
                        <TableBody {...getTableBodyProps()}>
                            {rows.map((row, rowIndex) => {
                                prepareRow(row);
                                return (
                                    <TableRow {...row.getRowProps()} className={`${rowIndex % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-300`}>
                                        {row.cells.map((cell, index) => {
                                            return (
                                                <TableCell {...cell.getCellProps()} className={`${WidthAdjustrLabour(index)} `}>
                                                    {index < 2 ? (
                                                        // Render regular cell content for first two columns
                                                        cell.render("Cell")
                                                    ) : (
                                                        // Render select element and CheckBox components for other columns
                                                        <div className="space-y-2 w-full">
                                                            <select className="w-full px-2 py-1 border rounded" defaultValue="">
                                                                <option value="" disabled>
                                                                    sites
                                                                </option>
                                                                <option>{cell.render("Cell")}</option>
                                                            </select>
                                                            <div className="flex items-center space-x-2">{/* <CheckBox /> */}</div>
                                                        </div>
                                                    )}
                                                </TableCell>
                                            );
                                        })}

                                        <TableCell className="w-[100px] ">
                                            <span className="flex justify-between gap-x-2">
                                                <Trash2 />
                                                <ExternalLink />
                                                <EllipsisVertical />
                                            </span>
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

export default LabourAttendenceTable;
