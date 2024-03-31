import { useEffect, useState } from "react";
import { CheckoutCard } from "../../components/CheckoutCard";
import ConfirmationModal from "../../components/ConfirmationModal";
const data: Item[] = [
  {
    id: "AS001",
    name: "crab",
    brand: "Sunny Seafood",
    quantity: 97,
    photo: "/crab.jpeg",
    price: 23,
  },
  {
    id: "MND1239",
    name: "fish",
    brand: "Happy seafood",
    quantity: 74,
    photo: "/fish.jpg",
    price: 15,
  },
  {
    id: "DHWI19",
    name: "lobster",
    brand: "Under The Sea",
    quantity: 62,
    photo: "/lobster.jpeg",
    price: 47,
  },
  {
    id: "MKL239",
    name: "octopus",
    brand: "Happy seafood",
    quantity: 213,
    photo: "/octopus.jpeg",
    price: 30,
  },
  {
    id: "DKW119",
    name: "oyster",
    brand: "Sunny seafood",
    quantity: 99,
    photo: "/oyster.jpeg",
    price: 31,
  },
  {
    id: "SS023",
    name: "shrimp",
    brand: "Elton seafood",
    quantity: 47,
    photo: "/shrimp.jpeg",
    price: 20,
  },
  {
    id: "SQ333",
    name: "squid",
    brand: "Under The Sea",
    quantity: 5,
    photo: "/squid.jpeg",
    price: 25,
  },
];

export default function Page() {
  const [cart, setCart] = useState<
    Array<{ id: string; quantity: number; price?: number }>
  >([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Retrieve shopping cart information from localstorage
  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartLocalStorage);
  }, []);

  // Save order into localstorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Calculate final price
  useEffect(() => {
    let sum = 0;
    cart.forEach((cartItem) => {
      if (cartItem.price) {
        sum = sum + cartItem.quantity * cartItem.price;
      } else {
        const matchedItem = data.find((item) => item.id === cartItem.id);
        if (matchedItem) {
          sum = sum + cartItem.quantity * matchedItem.price;
        }
      }
    });
    setTotalPrice(sum);
  }, [cart]);

  // Remove an item from the cart
  function removeCartItem(id: string) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  // Update the quantity of an item to the cart
  function updateCartItemQuantity(id: string, newQuantity: number) {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  function onQuantityChange(id: string, newQuantity: number) {
    // Remove the item if the new quantity turns to zero
    if (newQuantity == 0) {
      removeCartItem(id);
    }
    // Update the quantity of the item if the item is in the cart
    if (cart.find((item) => item.id == id)) {
      updateCartItemQuantity(id, newQuantity);
    }
  }
  function onPriceChange(id: string, newPrice: number) {
    // Update the order price of the item if the item is in the cart
    if (cart.find((item) => item.id == id)) {
      updateCartItemPrice(id, newPrice);
    }
  }

  function updateCartItemPrice(id: string, newPrice: number) {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, price: newPrice } : item
      )
    );
  }
  return (
    <main className={"bg-slate-50 w-full h-full"}>
      <div className={"container py-10 "}>
        <div className='grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            {cart.map((cartItem) => {
              const matchedItem = data.find((item) => item.id === cartItem.id);
              if (matchedItem) {
                return (
                  <CheckoutCard
                    key={cartItem.id} // Ensure each child in a list has a unique "key" prop
                    id={cartItem.id}
                    name={matchedItem.name}
                    brand={matchedItem.brand}
                    quantity={matchedItem.quantity}
                    orderQuantity={cartItem.quantity}
                    photo={matchedItem.photo}
                    price={matchedItem.price}
                    newPrice={cartItem.price} // Pass the new price if the price is amended
                    onQuantityChange={(id: string, quantity: number) => {
                      onQuantityChange(id, quantity);
                    }}
                    onPriceChange={(id: string, newPrice: number) => {
                      onPriceChange(id, newPrice);
                    }}
                  />
                );
              } else {
                return null; // If the item is not found, you may choose to handle it differently (e.g., show a message)
              }
            })}
          </div>

          <div className='flex flex-col border-2 w-full h-40 py-8 px-4'>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-row gap-4'>
                <p className='font-bold'>Subtotal:</p>
                <p>${totalPrice}</p>
              </div>
              <form className='flex justify-centre bg-white rounded'>
                <div className='inputGroup'>
                  <p className='font-bold'>Item Name</p>
                  {/* <input
                    type='text'
                    name='item name'
                    id='item name'
                    value={itemName}
                    onChange={(e) => {
                      setItemName(e.currentTarget.value);
                    }}
                    className='placeholder:text-gray-400'
                    placeholder='e.g. 24 packs Lobster'
                  /> */}
                </div>
              </form>
              <ConfirmationModal
                topic='Confirm Order'
                description='Do you confirm the order?'
                onClickConfirm={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
