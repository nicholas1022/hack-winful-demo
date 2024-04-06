import { PageWrapper } from "../../components/Layout/PageWrapper";
import { useEffect, useState } from "react";

// const data: Order[] = [
//   {
//     id: "1",
//     date: "2024-03-01",
//     status: "placed",
//     customerInfo: {
//       id: "101",
//       name: "John Doe",
//       companyName: "Doe Seafood Inc.",
//       email: "john.doe@example.com",
//       address: "123 Ocean Avenue, Seaside, CA",
//     },
//     details: [
//       {
//         id: "101",
//         name: "Salmon",
//         orderQuantity: 100,
//       },
//       {
//         id: "102",
//         name: "Shrimp",
//         orderQuantity: 200,
//       },
//     ],
//   },
//   {
//     id: "2",
//     date: "2024-03-05",
//     status: "delivered",
//     customerInfo: {
//       id: "102",
//       name: "Jane Smith",
//       companyName: "Ocean Delights Ltd.",
//       email: "jane.smith@example.com",
//       address: "456 Beach Boulevard, Coastal City, FL",
//     },
//     details: [
//       {
//         id: "103",
//         name: "Lobster",
//         orderQuantity: 50,
//       },
//       {
//         id: "104",
//         name: "Tuna",
//         orderQuantity: 150,
//       },
//     ],
//   },
//   {
//     id: "3",
//     date: "2024-03-10",
//     status: "placed",
//     customerInfo: {
//       id: "103",
//       name: "Michael Johnson",
//       companyName: "Johnson Seafoods LLC",
//       email: "michael.johnson@example.com",
//       address: "789 Pier Street, Harbor Town, WA",
//     },
//     details: [
//       {
//         id: "105",
//         name: "Crab",
//         orderQuantity: 75,
//       },
//       {
//         id: "106",
//         name: "Calamari",
//         orderQuantity: 100,
//       },
//     ],
//   },
//   {
//     id: "4",
//     date: "2024-03-15",
//     status: "delivered",
//     customerInfo: {
//       id: "104",
//       name: "Emily Rodriguez",
//       companyName: "Rodriguez Seafood Supplies",
//       email: "emily.rodriguez@example.com",
//       address: "321 Bay Street, Fisher's Haven, TX",
//     },
//     details: [
//       {
//         id: "107",
//         name: "Oysters",
//         orderQuantity: 200,
//       },
//       {
//         id: "108",
//         name: "Squid",
//         orderQuantity: 80,
//       },
//     ],
//   },
//   {
//     id: "5",
//     date: "2024-03-20",
//     status: "placed",
//     customerInfo: {
//       id: "105",
//       name: "David Kim",
//       companyName: "Pacific Seafood Co.",
//       email: "david.kim@example.com",
//       address: "567 Cove Drive, Coastal City, CA",
//     },
//     details: [
//       {
//         id: "109",
//         name: "Scallops",
//         orderQuantity: 120,
//       },
//       {
//         id: "110",
//         name: "Mussels",
//         orderQuantity: 90,
//       },
//     ],
//   },
//   {
//     id: "6",
//     date: "2024-03-25",
//     status: "delivered",
//     customerInfo: {
//       id: "106",
//       name: "Sophia Lee",
//       companyName: "Lee's Seafood Emporium",
//       email: "sophia.lee@example.com",
//       address: "876 Dockside Lane, Harbor Town, WA",
//     },
//     details: [
//       {
//         id: "111",
//         name: "Clams",
//         orderQuantity: 60,
//       },
//       {
//         id: "112",
//         name: "Octopus",
//         orderQuantity: 70,
//       },
//     ],
//   },
//   {
//     id: "7",
//     date: "2024-03-28",
//     status: "placed",
//     customerInfo: {
//       id: "107",
//       name: "William Brown",
//       companyName: "Brown's Seafood Supply",
//       email: "william.brown@example.com",
//       address: "987 Pier Street, Coastal City, FL",
//     },
//     details: [
//       {
//         id: "113",
//         name: "Sardines",
//         orderQuantity: 150,
//       },
//       {
//         id: "114",
//         name: "Anchovies",
//         orderQuantity: 100,
//       },
//     ],
//   },
//   {
//     id: "8",
//     date: "2024-03-30",
//     status: "delivered",
//     customerInfo: {
//       id: "108",
//       name: "Olivia Nguyen",
//       companyName: "Nguyen's Fresh Seafood",
//       email: "olivia.nguyen@example.com",
//       address: "654 Beach Boulevard, Seaside, CA",
//     },
//     details: [
//       {
//         id: "115",
//         name: "Haddock",
//         orderQuantity: 80,
//       },
//       {
//         id: "116",
//         name: "Trout",
//         orderQuantity: 70,
//       },
//     ],
//   },
//   {
//     id: "9",
//     date: "2024-04-02",
//     status: "placed",
//     customerInfo: {
//       id: "109",
//       name: "Ethan Martinez",
//       companyName: "Martinez Seafood Distributors",
//       email: "ethan.martinez@example.com",
//       address: "543 Cove Drive, Coastal City, CA",
//     },
//     details: [
//       {
//         id: "117",
//         name: "Halibut",
//         orderQuantity: 100,
//       },
//       {
//         id: "118",
//         name: "Cod",
//         orderQuantity: 120,
//       },
//     ],
//   },
//   {
//     id: "10",
//     date: "2024-04-05",
//     status: "placed",
//     customerInfo: {
//       id: "110",
//       name: "Ava Garcia",
//       companyName: "Garcia's Ocean Fresh",
//       email: "ava.garcia@example.com",
//       address: "432 Bay Street, Fisher's Haven, TX",
//     },
//     details: [
//       {
//         id: "119",
//         name: "Mahi Mahi",
//         orderQuantity: 90,
//       },
//     ],
//   },
// ];

export default function Page() {
  const [orders, setOrders] = useState<Array<Order>>([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  async function fetchInfo() {
    try {
      const result = await fetch("http://localhost:8080/api/order/page", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!result.ok) {
        throw new Error("Failed to fetch data");
      }
      const resultJson = await result.json();
      console.log(resultJson);
      setOrders(resultJson);
    } catch (err) {
      console.log("error", err);
    }
  }

  function onDone(id: string) {
    const indexToRemove = orders.findIndex((order) => order.orderId === id);

    // If the order is found, remove it from the list
    if (indexToRemove !== -1) {
      // Create a new array without the order to be removed
      const updatedOrders = [
        ...orders.slice(0, indexToRemove),
        ...orders.slice(indexToRemove + 1),
      ];
      setOrders(updatedOrders);
    }

    // call api to change the status
  }

  return (
    <PageWrapper>
      <table className='my-10 table-auto w-full border-collapse '>
        <thead>
          <tr>
            <th className='border border-slate-600'>Order ID</th>
            <th className='border border-slate-600'>Company Name</th>
            <th className='border border-slate-600'>Delivery Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr>
                <td className='border border-slate-700 p-2'>{order.orderId}</td>
                <td className='border border-slate-700 p-2'>
                  {order.companyName}
                </td>
                <td className='border border-slate-700 p-2'>{order.date}</td>
                <td className='p-2'>
                  <a
                    className='underline cursor-pointer'
                    href='/single-order/{}'
                  >
                    Details
                  </a>
                  <button
                    className='btn btn-blue rounded'
                    onClick={() => {
                      onDone(order.orderId);
                    }}
                  >
                    Done
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </PageWrapper>
  );
}
