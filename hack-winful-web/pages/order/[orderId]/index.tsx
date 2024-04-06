import { useEffect, useState } from "react";
import { PageWrapper } from "../../../components/Layout/PageWrapper";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState<Order>();
  const [orderId, setOrderId] = useState<string>("");
  const date = new Date();

  useEffect(() => {
    if (router.query.orderId) {
      setOrderId(router.query.orderId as string);
    }
  }, [router.query.orderId]);

  useEffect(() => {
    if (orderId) {
      fetchInfo();
    }
  }, [orderId]);

  async function fetchInfo() {
    try {
      const result = await fetch(
        `http://localhost:8080/api/order?id=${orderId}`,
        {
          method: "GET",
        }
      );
      if (!result.ok) {
        throw new Error("Failed to fetch data");
      }
      const resultJson = await result.json();
      setData(resultJson);
      console.log(resultJson);
    } catch (err) {
      console.log("error", err);
    }
  }

  const { contactName, companyName, address, orderDetails, email } = data || {};

  return (
    <PageWrapper>
      <div className='mb-6'>
        <a href='/order'>{"< Back"}</a>
      </div>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
          <p className='text-4xl font-bold pb-4'>Packing Slip</p>
          <p className='font-bold'>Ship to: </p>
          <p>{contactName}</p>
          <p>{companyName}</p>
          <p>{address}</p>
          <p>{email}</p>
        </div>

        <div className='flex flex-col'>
          <p className='font-bold'>Date: {date.toDateString()}</p>
          <p className='font-bold'>Order: #{orderId}</p>
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
          {orderDetails?.map((item: OrderItemInfo) => (
            <tr key={item.product?.plu}>
              <td className='border border-slate-700 p-2'>
                {item.product?.plu}
              </td>
              <td className='border border-slate-700 p-2'>
                {item.product?.name}
              </td>
              <td className='border border-slate-700 p-2 items-center'>
                {item.qty}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageWrapper>
  );
}
