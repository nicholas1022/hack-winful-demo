import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_ColumnDef,
} from "material-react-table";
import { useMemo, useState, useEffect } from "react";

//must be memoized or stable (useState, useMemo, defined outside of the component, etc.)

interface Item {
  id: string;
  name: string;
  brand: string;
  quantity: number;
}

const data: Item[] = [
  {
    id: "AA123", // key "name" matches `accessorKey` in ColumnDef down below
    name: "Fish A",
    brand: "Master Yip", // key "age" matches `accessorKey` in ColumnDef down below
    quantity: 103,
  },
  {
    id: "AB231", // key "name" matches `accessorKey` in ColumnDef down below
    name: "Fish B",
    brand: "Chans Seafood", // key "age" matches `accessorKey` in ColumnDef down below
    quantity: 23,
  },
  {
    id: "ZC345", // key "name" matches `accessorKey` in ColumnDef down below
    name: "Lobster",
    brand: "Big Big Searfood", // key "age" matches `accessorKey` in ColumnDef down below
    quantity: 43,
  },
  {
    id: "JF023", // key "name" matches `accessorKey` in ColumnDef down below
    name: "Potato Chips",
    brand: "Ka Lok B", // key "age" matches `accessorKey` in ColumnDef down below
    quantity: 203,
  },
  {
    id: "KL209", // key "name" matches `accessorKey` in ColumnDef down below
    name: "King Crabs",
    brand: "Sunny Fisher", // key "age" matches `accessorKey` in ColumnDef down below
    quantity: 12,
  },
  {
    id: "AA123", // key "name" matches `accessorKey` in ColumnDef down below
    name: "Fish A",
    brand: "Master Yip", // key "age" matches `accessorKey` in ColumnDef down below
    quantity: 103,
  },
  {
    id: "AB231", // key "name" matches `accessorKey` in ColumnDef down below
    name: "Fish B",
    brand: "Chans Seafood", // key "age" matches `accessorKey` in ColumnDef down below
    quantity: 23,
  },
  {
    id: "ZC345", // key "name" matches `accessorKey` in ColumnDef down below
    name: "Lobster",
    brand: "Big Big Searfood", // key "age" matches `accessorKey` in ColumnDef down below
    quantity: 43,
  },
  {
    id: "JF023", // key "name" matches `accessorKey` in ColumnDef down below
    name: "Potato Chips",
    brand: "Ka Lok B", // key "age" matches `accessorKey` in ColumnDef down below
    quantity: 203,
  },
  {
    id: "KL209", // key "name" matches `accessorKey` in ColumnDef down below
    name: "King Crabs",
    brand: "Sunny Fisher", // key "age" matches `accessorKey` in ColumnDef down below
    quantity: 12,
  },
  {
    id: "AA123", // key "name" matches `accessorKey` in ColumnDef down below
    name: "Fish A",
    brand: "Master Yip", // key "age" matches `accessorKey` in ColumnDef down below
    quantity: 103,
  },
  {
    id: "AB231", // key "name" matches `accessorKey` in ColumnDef down below
    name: "Fish B",
    brand: "Chans Seafood", // key "age" matches `accessorKey` in ColumnDef down below
    quantity: 23,
  },
  {
    id: "ZC345", // key "name" matches `accessorKey` in ColumnDef down below
    name: "Lobster",
    brand: "Big Big Searfood", // key "age" matches `accessorKey` in ColumnDef down below
    quantity: 43,
  },
  {
    id: "JF023", // key "name" matches `accessorKey` in ColumnDef down below
    name: "Potato Chips",
    brand: "Ka Lok B", // key "age" matches `accessorKey` in ColumnDef down below
    quantity: 203,
  },
  {
    id: "KL209", // key "name" matches `accessorKey` in ColumnDef down below
    name: "King Crabs",
    brand: "Sunny Fisher", // key "age" matches `accessorKey` in ColumnDef down below
    quantity: 12,
  },
];

export default function Page() {
  //column definitions - strongly typed if you are using TypeScript (optional, but recommended)
  const columns = useMemo<MRT_ColumnDef<Item>[]>(
    () => [
      {
        accessorKey: "id", //simple recommended way to define a column
        header: "ID",
        enableHiding: false,
        filterVariant: "text",
      },
      {
        accessorKey: "name", //simple recommended way to define a column
        header: "Name",
        enableHiding: false,
        filterVariant: "text",
      },
      {
        //accessorKey: "brand", //simple recommended way to define a column
        accessorFn: (originalRow) => originalRow.brand, // Alternative way to define accessorkey, the framework do not recognize 'brand' with simple method, use accessorFn instead
        header: "Brand",
        enableHiding: false,
        filterVariant: "text", // 'Select maybe a better format, but there is a weird bug for this variant, so use text instead'
      },
      {
        accessorKey: "quantity", //simple recommended way to define a column
        header: "Quantity",
        enableHiding: false,
        enableColumnFilter: false,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnOrdering: true, //enable a feature for all columns
    enableEditing: true,
    editDisplayMode: "row",
    initialState: { showColumnFilters: true },
    onEditingRowSave: ({ table, values }) => {
      //validate data
      console.log(values);
      //save data to api
      table.setEditingRow(null); //exit editing mode
    },
  });

  return (
    <main className={"bg-slate-50 w-screen h-screen"}>
      <div
        className={
          "container py-10"
          // "container py-10 sm:py-15 px-10 md:py-20 px-20 lg:py-30 px-40 xl:px-60"
        }
      >
        <MaterialReactTable table={table} />
      </div>
    </main>
  );
}
