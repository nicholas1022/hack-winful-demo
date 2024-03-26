import { useState } from "react";

export default function Page() {
  const [itemName, setItemName] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [photo, setPhoto] = useState<File>();

  //dummy brands
  const brandList = [
    "--Please choose an option--",
    "brand1",
    "brand2",
    "brand3",
    "brand4",
    "brand5",
  ];

  // Make sure the quantity is larger or equal to 0
  function onChangeQuantity(quantity: number) {
    if (quantity >= 0) {
      setQuantity(quantity);
    }
  }

  // Save photo file into state
  function onChangePhoto(photo: FileList) {
    if (photo && photo.length > 0) {
      setPhoto(photo[0]);
    }
  }
  return (
    <main className={"bg-slate-50 w-screen h-screen"}>
      <div
        className={
          "container py-10 sm:py-15 px-10 md:py-20 px-20 lg:py-30 px-40 xl:px-60"
        }
      >
        <form className='flex justify-centre py-14 bg-white md:px-16 lg:px-20 xl:px-25 rounded'>
          <div className='w-full flex justify-start flex-col'>
            <p className='text-3xl font-bold'>Create Items</p>
            <section className='py-5 w-full flex justify-start flex-col gap-8'>
              <div className='inputGroup'>
                <p className='font-bold'>Item Name</p>
                <input
                  type='text'
                  name='item name'
                  id='item name'
                  value={itemName}
                  onChange={(e) => {
                    setItemName(e.currentTarget.value);
                  }}
                />
              </div>
              <div className='inputGroup'>
                <p className='font-bold'>Brand</p>
                <select
                  name='brand'
                  id='brand'
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.currentTarget.value);
                  }}
                >
                  {brandList.map((brand) => {
                    return <option>{brand}</option>;
                  })}
                </select>
              </div>
              <div className='inputGroup'>
                <p className='font-bold'>Quantity</p>
                <input
                  type='number'
                  name='quantity'
                  id='quantity'
                  value={quantity}
                  onChange={(e) => {
                    onChangeQuantity(Number(e.currentTarget.value));
                  }}
                />
              </div>
              <div className='inputGroup'>
                <p className='font-bold'>Photo</p>
                <input
                  id='item photo'
                  type='file'
                  name='item photo'
                  onChange={(e) => {
                    // Make sure there is File in the FileList
                    if (e.target.files != null) {
                      onChangePhoto(e.target.files);
                    }
                  }}
                />
              </div>
            </section>
            <button className='btn btn-blue'>Create</button>
          </div>
        </form>
      </div>
    </main>
  );
}
