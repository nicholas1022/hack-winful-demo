import React, { useState, useEffect } from "react";
import { PageWrapper } from "../../components/Layout/PageWrapper";

export default function Page() {
  const [itemName, setItemName] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [newBrand, setNewBrand] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [photo, setPhoto] = useState<File>();
  const [brandList, setBrandList] = useState<string[]>([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  async function fetchInfo() {
    try {
      const result = await fetch("http://localhost:8080/api/product/page", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!result.ok) {
        throw new Error("Failed to fetch data");
      }
      const resultJson = await result.json();
      const brandsSet = new Set<string>();
      resultJson.forEach((product: { brand: string }) => {
        brandsSet.add(product.brand);
      });
      const brands = Array.from(brandsSet);
      setBrandList(["--Please choose an option--", ...brands, "Other"]);
    } catch (err) {
      console.log("error", err);
    }
  }

  async function uploadImg() {
    try {
      if (!photo) {
        throw new Error("Photo is undefined");
      }

      const formData = new FormData();
      formData.append("img", photo);

      const result = await fetch(
        "http://localhost:8080/api/product/uploadImg",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!result.ok) {
        throw new Error("Failed to upload photo");
      }

      return result;
    } catch (err) {
      console.log("error", err);
    }
  }

  async function createItem() {
    try {
      const imgUploadRes = await uploadImg();
      const imgUploadJson = await imgUploadRes?.json();
      var imgUrl;
      if (imgUploadJson) {
        imgUrl = imgUploadJson.imgUrl;
      }
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: itemName,
          brand: brand === "Other" ? newBrand : brand,
          defaultPrice: price,
          qty: quantity,
          imgUrl: imgUrl
        }),
      };

      const result = await fetch(
        "http://localhost:8080/api/product",
        requestOptions
      );

      console.log(result);
      if (!result.ok) {
        throw new Error("Failed to create item");
      }

      // Clear form fields after successful creation
      setItemName("");
      setBrand("");
      setNewBrand("");
      setQuantity(0);
      setPrice(0);
      setPhoto(undefined);

      // Refresh brand list after successful creation
      fetchInfo();
    } catch (err) {
      console.log("error", err);
    }
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault(); // Prevent the default form submission
    createItem(); // Call createItem function to send the data to the API
  }

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

  // function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
  //   e.preventDefault();
  //   console.log("submit");
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ name: itemName,
  //                            brand: newBrand === "" ? newBrand : brand,
  //                            defaultPrice: price,
  //                            qty: quantity,
  //                            imgUrl: photo
  //                          })
  //   };
  //   fetch('http://localhost:8080/api/product', requestOptions)
  //       .then(response => response.json());
  // }

  return (
    <PageWrapper>
      <form
        className='flex justify-centre py-14 bg-white md:px-16 lg:px-20 xl:px-25 rounded'
        onSubmit={handleSubmit}
      >
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
                  return <option key={brand}>{brand}</option>;
                })}
              </select>
            </div>
            {brand === "Other" ? (
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
          <button type='submit' className='btn btn-blue'>
            Create
          </button>

          {/* <button className='btn btn-blue' type="submit">Create</button> */}
        </div>
      </form>
    </PageWrapper>
  );
}
