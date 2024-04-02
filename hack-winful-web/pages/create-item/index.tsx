import { useState } from "react";
import { PageWrapper } from "../../components/Layout/PageWrapper";

export default function Page() {
  const [itemName, setItemName] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [newBrand, setNewBrand] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [photo, setPhoto] = useState<File>();

  //dummy brands
  const brandList = [
    "--Please choose an option--",
    "brand1",
    "brand2",
    "brand3",
    "brand4",
    "brand5",
    "Other",
  ];

  // Make sure the quantity is larger or equal to 0
  function onChangeQuantity(newQuantity: number) {
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    } else {
      setQuantity(0);
    }
  }

  // Make sure the price is more than 0
  function onChangePrice(newPrice: number) {
    if (newPrice > 0) {
      setPrice(newPrice);
    } else {
      setPrice(0);
    }
  }

  // Save photo file into state
  function onChangePhoto(photo: FileList) {
    if (photo && photo.length > 0) {
      setPhoto(photo[0]);
    }
  }
  return (
    // <main className={"bg-slate-50 w-screen h-screen"}>
    //   <div
    //     className={
    //       "container py-10 sm:py-15 px-10 md:py-20 px-20 lg:py-30 px-40 xl:px-60"
    //     }
    //   >
    <PageWrapper>
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
                className='placeholder:text-gray-400'
                placeholder='e.g. 24 packs Lobster'
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
            {brand == "Other" ? (
              <div className='inputGroup'>
                <p className='font-bold'>Please specify</p>
                <input
                  type='text'
                  name='new brand name'
                  id='new brand name'
                  value={newBrand}
                  onChange={(e) => {
                    setNewBrand(e.currentTarget.value);
                  }}
                />
              </div>
            ) : (
              <></>
            )}
            <div className='inputGroup'>
              <p className='font-bold'>Quantity</p>
              <input
                type='number'
                name='quantity'
                id='quantity'
                value={quantity}
                onChange={(e) => {
                  onChangeQuantity(parseInt(e.currentTarget.value, 10));
                }}
              />
            </div>
            <div className='inputGroup'>
              <p className='font-bold'>Price</p>
              <div className='relative mt-2 rounded-md'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                  <span className=' sm:text-sm'>$</span>
                </div>
                <input
                  type='string'
                  name='price'
                  id='price'
                  className='block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6'
                  placeholder='0.00'
                  aria-describedby='price-currency'
                  value={price}
                  onChange={(e) => {
                    onChangePrice(parseFloat(e.currentTarget.value)); // Cannot input dot character into the text field
                  }}
                />
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'></div>
              </div>
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
    </PageWrapper>
  );
}
