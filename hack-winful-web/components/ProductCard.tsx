import { useEffect, useState } from "react";

interface ProductCardProps {
  photo: string;
  id: string;
  name: string;
  brand: string;
  quantity: number;
  cartOrderQuantity: number;
  price: number;
  onQuantityChange: (id: string, newQuantity: number) => void;
}

export function ProductCard(props: ProductCardProps) {
  const {
    photo,
    id,
    name,
    brand,
    quantity,
    price,
    cartOrderQuantity,
    onQuantityChange,
  } = props;
  const [orderQuantity, setOrderQuantity] = useState<number>(cartOrderQuantity);
  // Toggle between Add to cart button and order quantity input
  const [isAddToCartActive, setIsAddToCartActive] = useState<boolean>(true);

  // Update the order quantity from the UI once the data is retrieved from the localstorage
  useEffect(() => {
    setOrderQuantity(cartOrderQuantity);
    if (cartOrderQuantity > 0) {
      setIsAddToCartActive(false);
    } else {
      setIsAddToCartActive(true);
    }
  }, [cartOrderQuantity]);

  // Automatic toggle between Add to Cart button and order quantity input
  useEffect(() => {
    if (orderQuantity > 0) {
      setIsAddToCartActive(false);
    } else {
      setIsAddToCartActive(true);
    }
  }, [orderQuantity]);

  // Change order quantity state when the input quantity is larger or equal to 0
  function onChangeQuantity(quantity: number) {
    if (quantity >= 0) {
      setOrderQuantity(quantity);
      onQuantityChange(id, quantity);
    }
  }

  return (
    <div className='flex flex-col items-center px-8 py-6 gap-4 sm:px-12 md:px-18'>
      <div className='flex flex-col'>
        <img
          className='object-contain sm: max-w-xs md: max-w-sm lg: max-w-md'
          src={photo}
          alt={name}
        />
      </div>
      <div className='flex gap-4 flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row'>
        <div className='flex items-start flex-col col-span-3'>
          <div className='flex flex-row gap-4'>
            <p>ID:</p>
            <p>{id}</p>
          </div>
          <div className='flex flex-row gap-4'>
            <p>Name:</p>
            <p>{name}</p>
          </div>
          <div className='flex flex-row gap-4'>
            <p>Brand:</p>
            <p>{brand}</p>
          </div>
          <div className='flex flex-row gap-4'>
            <p>Quantity:</p>
            <p>{quantity}</p>
          </div>
          <div className='flex flex-row gap-4'>
            <p>Price:</p>
            <p>${price}</p>
          </div>
          {/* Add to cart button and order quantity */}
          <div className='mt-4 self-start'>
            {isAddToCartActive ? (
              <button
                className='btn btn-blue'
                onClick={() => {
                  setIsAddToCartActive(false);
                  onChangeQuantity(1);
                }}
              >
                Add to cart
              </button>
            ) : (
              <></>
            )}
            {isAddToCartActive ? (
              <></>
            ) : (
              <input
                type='number'
                name='quantity'
                id='quantity'
                value={orderQuantity}
                className='w-20'
                onChange={(e) => {
                  onChangeQuantity(Number(e.currentTarget.value));
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
