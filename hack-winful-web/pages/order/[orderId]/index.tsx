import { useEffect, useState } from "react";
import { PageWrapper } from "../../../components/Layout/PageWrapper";
import { useRouter } from "next/router";

const data: Order = {
  id: "M31001",
  date: "2015-03-25",
  status: "placed",
  customerInfo: {
    id: "JD001",
    name: "John Doe",
    companyName: "Super Supermarket",
    email: "johndoe@gmail.com",
    address: "9371 Dogwood St.Lavaltrie, QC J5T 3E7",
  },
  details: [
    {
      id: "AS001",
      name: "crab",
      orderQuantity: 7,
    },
    {
      id: "MND1239",
      name: "fish",
      orderQuantity: 9,
    },
    {
      id: "DFEI19",
      name: "Prawns",
      orderQuantity: 3,
    },
    {
      id: "AS121",
      name: "King crab",
      orderQuantity: 100,
    },
    {
      id: "OCT1239",
      name: "Octopus",
      orderQuantity: 9,
    },
    {
      id: "SFI23",
      name: "Shark Fin",
      orderQuantity: 7,
    },
    {
      id: "PPS001",
      name: "King Prawns",
      orderQuantity: 30,
    },
  ],
};

export default function Page() {
  const { id, date, customerInfo, details } = data;
  const router = useRouter();
  const [orderId, setOrderId] = useState<string>("");

  useEffect(() => {
    if (router.query.orderId) {
      setOrderId(router.query.orderId as string);
    }
  }, [router.query.orderId]);

  useEffect(() => {
    // Fetch details of the order
  }, [orderId]);

  return (
    <PageWrapper>
      <div className='mb-6'>
        <a href='/order'>{"< Back"}</a>
      </div>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
          <p className='text-4xl font-bold pb-4'>Packing Slip</p>
          <p className='font-bold'>Ship to: </p>
          <p>{customerInfo.name}</p>
          <p>{customerInfo.companyName}</p>
          <p>{customerInfo.address}</p>
          <p>{customerInfo.email}</p>
        </div>

        <div className='flex flex-col'>
          <p className='font-bold'>Date: {date}</p>
          <p className='font-bold'>Order: #{id}</p>
        </div>
      </div>
      <table className='my-10 table-auto w-full border-collapse border border-slate-500'>
        <thead>
          <tr>
            <th className='border border-slate-600'>Item ID</th>
            <th className='border border-slate-600'>Item Name</th>
            <th className='border border-slate-600'>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {details.map((item) => {
            return (
              <tr key={item.id}>
                <td className='border border-slate-700 p-2'>{item.id}</td>
                <td className='border border-slate-700 p-2'>{item.name}</td>
                <td className='border border-slate-700 p-2 justify-center'>
                  {item.orderQuantity}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </PageWrapper>
  );
}
