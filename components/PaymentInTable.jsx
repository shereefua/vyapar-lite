import { useMemo } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/shadcn/ui/table";
import { Printer, EllipsisVertical, Forward } from "lucide-react";
import { useTable } from "react-table";
import MOCK_DATA_PAYMENT_N from "@/MOCK_DATA _PAYMENT_IN.json";
import { PaymentInTransctionColumn } from "@/components/shadcn/columns";
import { WidthAdjustrInvoice } from "@/lib/utils";

const PaymentInTable = () => {
    const PaymentIncolumns = useMemo(() => PaymentInTransctionColumn, []);
    const MockData = useMemo(() => MOCK_DATA_PAYMENT_N, []);

    const tableInstance = useTable({
        columns: PaymentIncolumns,
        data: MockData,
    });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
    return (
        <>
            <div className="w-full max-w-full">
                {/* section-1 Header Table */}
                <section className="overflow-hidden">
                    <Table {...getTableProps()} style={{ tableLayout: "fixed" }}>
                        <TableHeader>
                            {headerGroups.map((e) => {
                                return (
                                    <TableRow {...e.getHeaderGroupProps()} key={e.headers[0].id}>
                                        <TableHead className="w-10"></TableHead>
                                        {e.headers.map((col) => (
                                            <TableHead {...col.getHeaderProps()} className=" w-32" key={col.id}>
                                                {col.render("header")}
                                            </TableHead>
                                        ))}
                                        {/* Adjust pr to the last header cell to account for the scrollbar */}
                                        <th className="border-b w-10" style={{ paddingRight: "47px" }}>
                                            padd adjust
                                        </th>
                                    </TableRow>
                                );
                            })}
                        </TableHeader>
                    </Table>
                </section>
                {/* section-2 Scrollable Body Table */}
                <section className="overflow-y-scroll custom-scrollbar max-h-[345px]">
                    <Table {...getTableProps()} style={{ tableLayout: "fixed" }}>
                        <TableBody {...getTableBodyProps()}>
                            {rows.map((row, rowIndex) => {
                                prepareRow(row);
                                //   console.log(row);
                                return (
                                    //rowIndex: dynamically adds the background color to every second row, mimicking the nth-child(even) behavior.
                                    <TableRow
                                        {...row.getRowProps()}
                                        className={`${rowIndex % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-300`}
                                        key={row.id}
                                    >
                                        <TableCell className=" w-10"></TableCell>

                                        {row.cells.map((cell, cellIndex) => {
                                            return (
                                                <TableCell {...cell.getCellProps()} className=" w-32" key={cellIndex}>
                                                    {cell.render("Cell")}
                                                </TableCell>
                                            );
                                        })}
                                        <td className="w-10">
                                            <EllipsisVertical size={18} color="#284561" />
                                        </td>
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

export default PaymentInTable;
