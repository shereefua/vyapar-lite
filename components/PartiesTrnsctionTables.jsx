
import { useMemo } from "react";
import { useTable } from "react-table";
import { TableHeader, Table, TableRow, TableHead, TableBody, TableCell } from "@/components/shadcn/ui/table";
import { EllipsisVertical } from "lucide-react";
import MOCK_DATA_PARTY from "@/MOCK_DATA_PARTY.json";
import { PartiesTableColumn } from "@/components/shadcn/columns";


const PartiesTrnsctionTables = () => {
    //inserting data into  memo hook
    const PartyColumn = useMemo(() => PartiesTableColumn, []);
    const mockdata = useMemo(() => MOCK_DATA_PARTY, []);

    //you can use shorthand prpty in es6,
    const tableInstance = useTable({
        columns: PartyColumn,
        data: mockdata,
    });

    //destructuring tableinstance
    //theese are basically func and arrays of useTablehook from react table that we can make hlp with ui
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
    //destructure all functions at jsx

    return (
        <>
            <div className="w-full max-w-full ">
                {/* section-1 Header Table */}
                <section className="overflow-hidden">
                    <Table
                        {...getTableProps()}
                        style={{ tableLayout: "fixed" }} // Ensure consistent column widths
                    >
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
                <section className="overflow-y-scroll custom-scrollbar max-h-[436px]">
                    <Table
                        {...getTableProps()}
                        style={{ tableLayout: "fixed" }} // Ensure consistent column widths
                    >
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

export default PartiesTrnsctionTables;
