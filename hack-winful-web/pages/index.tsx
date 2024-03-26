const brandList = [
  "--Please choose an option--",
  "brand1",
  "brand2",
  "brand3",
  "brand4",
  "brand5",
];

export default function Page() {
  return (
    <main>
      <div className={"container bg-slate-50 w-full"}>
        <div className='p-4 md:p-6 lg:p-8 xl:p-10'>
          <form className='flex justify-centre bg-white p-4 md:p-6 lg:p-8 xl:p-10 rounded'>
            <div className='py-5 w-full flex justify-start flex-col'>
              <p className='text-3xl font-bold'>Create Items</p>
              <section className='py-5 w-full flex justify-start flex-col gap-8'>
                <div className='inputGroup'>
                  <p className='font-bold'>Item Name</p>
                  <input type='text' name='item name' id='item name' />
                </div>
                <div className='inputGroup'>
                  <p className='font-bold'>Brand</p>
                  <select name='brand' id='brand'>
                    {brandList.map((brand) => {
                      return <option>{brand}</option>;
                    })}
                  </select>
                </div>
                <div className='inputGroup'>
                  <p className='font-bold'>Quantity</p>
                  <input type='number' name='quantity' id='quantity' />
                </div>
                <div className='inputGroup'>
                  <p className='font-bold'>Photo</p>
                  <input id='item photo' type='file' name='item photo' />
                </div>
              </section>
              <button className='btn btn-blue'>Create</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
