import React, { useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_ColumnDef,
} from "material-react-table";
import { PageWrapper } from "../../components/Layout/PageWrapper";

interface Item {
  plu: string;
  name: string;
  brand: string;
  qty: number;
}

export default function Page() {
  const [products, setProducts] = useState<Item[]>([]);

  async function fetchProducts() {
    try {
      const result = await fetch("http://localhost:8080/api/product/page", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!result.ok) {
        throw new Error("Failed to fetch data");
      }
      const resultJson = await result.json();
      const products = resultJson.map(
        (product: {
          plu: { toString: () => any };
          name: any;
          brand: any;
          qty: any;
        }) => ({
          plu: product.plu.toString(),
          name: product.name,
          brand: product.brand,
          qty: product.qty,
        })
      );
      setProducts(products);
    } catch (err) {
      console.log("error", err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []); // fetch products on component mount

  const columns = [
    {
      accessorKey: "plu",
      header: "ID",
      enableHiding: false,
      filterVariant: "text",
    },
    {
      accessorKey: "name",
      header: "Name",
      enableHiding: false,
      filterVariant: "text",
    },
    {
      accessorKey: "brand",
      header: "Brand",
      enableHiding: false,
      filterVariant: "text",
    },
    {
      accessorKey: "qty",
      header: "Quantity",
      enableHiding: false,
      enableColumnFilter: false,
    },
  ] as MRT_ColumnDef<Item>[];

  const table = useMaterialReactTable({
    columns,
    data: products,
    enableColumnOrdering: true,
    enableEditing: true,
    editDisplayMode: "row",
    initialState: { showColumnFilters: true },
    onEditingRowSave: ({ table, values }) => {
      console.log(values);
      table.setEditingRow(null);
    },
  });

  return (
    <PageWrapper>
      <MaterialReactTable table={table} />
    </PageWrapper>
  );
}
