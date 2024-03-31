const data: Order = {
  id: "M31001",
  date: new Date("2015-03-25"),
  status: "placed",
  customerInfo: {
    name: "Iden",
    companyName: "Super Supermarket",
    email: "xxx@gmail.com",
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
      id: "DHWI19",
      name: "lobster",
      orderQuantity: 3,
    },
  ],
};

export default function Page() {
  return (
    <main className={"bg-slate-50 w-full h-full"}>
      <div className={"container py-10"}>
        <p className='text-4xl font-bold'>Order {data.id}</p>
      </div>
    </main>
  );
}
