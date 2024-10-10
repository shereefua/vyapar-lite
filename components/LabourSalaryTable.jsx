import React, { useMemo } from "react";
import MOCK_DATA_Labour from "@/MOCK_DATA_Labour.json";
import { Printer, EllipsisVertical, Forward } from "lucide-react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/shadcn/ui/table";
import { LabourSalaryColumn } from "@/components/shadcn/columns";
import { useTable } from "react-table";
import {WidthAdjustrSalary} from "@/lib/utils"


const LabourSalaryTable = () => {
    const columns = useMemo(() => LabourSalaryColumn, []);
    const data = useMemo(() => MOCK_DATA_Labour, []);

    const tableInstance = useTable({
        columns: columns,
        data: data,
    });
    //    console.log(useTable());

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

    return (
        <div className="w-full max-w-full">
            {/* section-1 Header Table */}
            <section className="overflow-hidden">
                <Table {...getTableProps()} style={{ tableLayout: "fixed" }}>
                    <TableHeader>
                        {headerGroups.map((e) => {
                            return (
                                <TableRow {...e.getHeaderGroupProps()}>
                                    {e.headers.map((col, indexOfCol) => (
                                        <TableHead {...col.getHeaderProps()} className={`${WidthAdjustrSalary(indexOfCol)}`}>
                                            {col.render("header")}
                                        </TableHead>
                                    ))}
                                    <TableHead className="w-[50px]" style={{ paddingRight: "56px" }}>
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
                <Table {...getTableProps()} style={{ tableLayout: "fixed" }}>
                    <TableBody {...getTableBodyProps()}>
                        {rows.map((row, rowIndex) => {
                            prepareRow(row);
                            return (
                                <TableRow {...row.getRowProps()} className={`${rowIndex % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-300`}>
                                    {row.cells.map((cell, indexOfCell) => {
                                        return (
                                            <TableCell {...cell.getCellProps()} className={`${WidthAdjustrSalary(indexOfCell)}`}>
                                                {cell.render("Cell")}
                                            </TableCell>
                                        );
                                    })}

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
    );
};

export default LabourSalaryTable;
