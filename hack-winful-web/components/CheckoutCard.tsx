import { useState } from "react";

interface CheckoutCardProps {
  photo: string;
  id: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  orderQuantity: number;
  newPrice?: number;
  onQuantityChange: (id: string, newQuantity: number) => void;
  onPriceChange: (id: string, newPrice: number) => void;
}

export function CheckoutCard(props: CheckoutCardProps) {
  const {
    photo,
    id,
    name,
    brand,
    quantity,
    price,
    newPrice,
    orderQuantity: fetchedOrderQuantity,
    onQuantityChange,
    onPriceChange,
  } = props;
  const [sellPrice, setSellPrice] = useState<number>(
    // Set the modified price as the sell price if there is record in the localstorage
    newPrice ? newPrice : price || 0
  );
  const [orderQuantity, setOrderQuantity] = useState<number>(
    fetchedOrderQuantity || 1
  );
  const [isShowQuantityWarning, setIsShowQuantityWarning] = useState<boolean>(
    false
  );
  const [isShowPriceWarning, setIsShowPriceWarning] = useState<boolean>(false);

  // Make sure the price is more than 0
  function onChangePrice(newPrice: number) {
    setSellPrice(newPrice);
    onPriceChange(id, newPrice);
    if (newPrice < 0) {
      setIsShowPriceWarning(true);
    } else {
      setIsShowPriceWarning(false);
    }
  }

  // Check if the quantity is positive
  function onChangeQuantity(newQuantity: number) {
    setOrderQuantity(newQuantity);
    onQuantityChange(id, newQuantity);
    if (newQuantity <= 0) {
      setIsShowQuantityWarning(true);
    } else {
      setIsShowQuantityWarning(false);
    }
  }

  return (
    <div className='flex items-center px-14 py-6 gap-20 border-2 rounded sm: flex-col md:flex-row '>
      <img
        className='object-contain sm: max-w-xs md: max-w-sm lg: max-w-md'
        src={photo}
        alt={name}
      />

      <div className='sm: flex flex-col justify-start gap-2 w-full'>
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
        <div className='flex flex-row gap-4 items-center'>
          <p>Order Quantity:</p>
          <input
            type='number'
            className='placeholder:text-gray-400 w-20'
            placeholder='1'
            value={orderQuantity}
            onChange={(e) => {
              onChangeQuantity(parseInt(e.currentTarget.value)); // Cannot input dot character into the text field
            }}
          />
          {isShowQuantityWarning ? <QuantityWarningMessage /> : <></>}
        </div>
        <div className='flex flex-row gap-4 items-center'>
          <p>Price:</p>
          <div className='relative rounded-md'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <span className=' sm:text-sm'>$</span>
            </div>
            <input
              type='number'
              name='price'
              id='price'
              className='block w-24 rounded-md border-0 py-2 pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6'
              placeholder='0.00'
              aria-describedby='price-currency'
              value={sellPrice}
              onChange={(e) => {
                if (e.currentTarget.value !== null) {
                  onChangePrice(parseFloat(e.currentTarget.value)); // Cannot input dot character into the text field
                }
              }}
            />
          </div>
        </div>
        {isShowPriceWarning ? <PriceWarningMessage /> : <></>}
        <p
          className='underline cursor-pointer'
          onClick={() => onChangeQuantity(0)}
        >
          Remove
        </p>
      </div>
    </div>
  );
}

function QuantityWarningMessage() {
  return <p>Order quantity must be positive.</p>;
}

function PriceWarningMessage() {
  return <p>Price must be non-negative.</p>;
}
