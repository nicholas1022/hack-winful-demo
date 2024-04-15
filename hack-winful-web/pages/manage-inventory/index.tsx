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
  onHoldQty: number;
  defaultPrice: number;
  imgUrl: string;
}

export default function Page() {
  const [products, setProducts] = useState<Item[]>([]);

  // <<<<<<< HEAD
  //   async function fetchProducts() {
  //     try {
  //       const result = await fetch("http://localhost:8080/api/product/page", {
  //         method: "GET",
  //         headers: { "Content-Type": "application/json" },
  //       });
  //       if (!result.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const resultJson = await result.json();
  //       const products = resultJson.map(
  //         (product: {
  //           plu: { toString: () => any };
  //           name: any;
  //           brand: any;
  //           qty: any;
  //         }) => ({
  //           plu: product.plu.toString(),
  //           name: product.name,
  //           brand: product.brand,
  //           qty: product.qty,
  //         })
  //       );
  //       setProducts(products);
  //     } catch (err) {
  //       console.log("error", err);
  // =======
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
          name: string;
          brand: string;
          qty: number;
          defaultPrice: number;
          onHoldQty: number;
          imgUrl: string;
        }) => ({
          id: product.plu.toString(),
          name: product.name,
          brand: product.brand,
          quantity: product.qty,
          defaultPrice: product.defaultPrice,
          onHoldQty: product.onHoldQty,
          imgUrl: product.imgUrl,
        })
      );
      setProducts(products);
    } catch (err) {
      console.log("error", err);
    }
    // >>>>>>> fn-bn/api-integration-manage-item
  }

  // <<<<<<< HEAD
  //   // Not Yet FINISH!
  //   // async function editItem() {
  //   //   try {
  //   //     const result = await fetch("http://localhost:8080/api/product", {
  //   //       method: "PUT",
  //   //       headers: { "Content-Type": "application/json" },
  //   //       body: JSON.stringify({
  //   //         contactName: contactName,
  //   //         companyName: companyName,
  //   //         email: email,
  //   //         address: address,
  //   //         orderDetails: cart,
  //   //       }),
  //   //     });
  //   //     const resultJson = await result.json();
  //   //     console.log(resultJson);
  //   //   } catch (err) {
  //   //     console.log("error", err);
  //   //   }
  //   // }

  //   useEffect(() => {
  //     fetchProducts();
  //   }, []); // fetch products on component mount

  //   const columns = [
  //     {
  //       accessorKey: "plu",
  //       header: "ID",
  //       enableHiding: false,
  //       filterVariant: "text",
  //     },
  //     {
  //       accessorKey: "name",
  //       header: "Name",
  //       enableHiding: false,
  //       filterVariant: "text",
  //     },
  //     {
  //       accessorKey: "brand",
  //       header: "Brand",
  //       enableHiding: false,
  //       filterVariant: "text",
  //     },
  //     {
  //       accessorKey: "qty",
  //       header: "Quantity",
  //       enableHiding: false,
  //       enableColumnFilter: false,
  //     },
  //   ] as MRT_ColumnDef<Item>[];
  // =======
  async function saveProducts(values: any) {
    try {
      const result = await fetch("http://localhost:8080/api/product", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!result.ok) {
        throw new Error("Failed to fetch data");
      }
    } catch (err) {
      console.log("error", err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []); // fetch products on component mount

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
      enableHiding: false,
      enableEditing: false,
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
      accessorKey: "quantity",
      header: "Quantity",
      enableHiding: false,
      enableColumnFilter: false,
    },
    {
      accessorKey: "onHoldQty",
      header: "On Hold Qty",
      enableHiding: false,
      enableColumnFilter: false,
    },
    {
      accessorKey: "defaultPrice",
      header: "Price",
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
      const product = products.find((p) => p.plu === values.plu);
      if (product) {
        product.plu = values.id;
        product.brand = values.brand;
        product.name = values.name;
        product.defaultPrice = values.defaultPrice;
        product.qty = values.quantity;
        product.onHoldQty = values.onHoldQty;
      }
      saveProducts(product);
      table.setEditingRow(null);
    },
  });
  // >>>>>>> fn-bn/api-integration-manage-item

  //   const table = useMaterialReactTable({
  //     columns,
  //     data: products,
  //     enableColumnOrdering: true,
  //     enableEditing: true,
  //     editDisplayMode: "row",
  //     initialState: { showColumnFilters: true },
  //     onEditingRowSave: ({ table, values }) => {
  //       console.log(values);
  //       table.setEditingRow(null);
  //     },
  //   });

  return (
    <PageWrapper>
      <MaterialReactTable table={table} />
    </PageWrapper>
  );
}
