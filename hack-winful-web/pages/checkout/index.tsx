import { useEffect, useState } from "react";
import { PageWrapper } from "../../components/Layout/PageWrapper";
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
  // Contains items added to the shopping cart
  const [cart, setCart] = useState<
    Array<{ id: string; quantity: number; price?: number }>
  >([]);
  // Total price of all items
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [companyName, setCompanyName] = useState<string>("");
  const [contactName, setContactName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");

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

  // Update the order price of the item if the item is in the cart
  function onPriceChange(id: string, newPrice: number) {
    if (cart.find((item) => item.id == id)) {
      updateCartItemPrice(id, newPrice);
    }
  }

  // Update the price for the items in the order if custom price applied
  function updateCartItemPrice(id: string, newPrice: number) {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, price: newPrice } : item
      )
    );
  }
  return (
    <PageWrapper>
      <div className='flex flex-col sm:flex-col md:flex-col lg:grid grid-cols-3 gap-8'>
        <div className='flex flex-col gap-4 col-span-2'>
          {/* Check if there is anything in the shopping cart */}
          {cart.length === 0 ? (
            // Return 'nothing found' if nothing is inside
            <div className='flex w-full h-full items-center justify-center'>
              <div className='flex flex-col items-center gap-8'>
                <img
                  src={"/empty-shopping-cart.png"}
                  alt={"empty-shopping-cart"}
                  className='2-40 h-40'
                />
                <p className='text-3xl font-bold text-gray-600'>
                  Oh no! Nothing found.{" "}
                </p>
              </div>
            </div>
          ) : (
            // Return the list of items if something is inside
            cart.map((cartItem) => {
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
            })
          )}
        </div>

        <div className='flex flex-col border-2 w-full py-8 px-4 rounded bg-white'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-4 font-bold border-b-2 pb-4'>
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <form className='flex flex-col justify-centre rounded gap-4'>
              <div className='inputGroup'>
                <p className='font-bold'>Company Name</p>
                <input
                  type='text'
                  name='comapany name'
                  id='company name'
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.currentTarget.value);
                  }}
                  className='placeholder:text-gray-400'
                  placeholder='e.g. Sunny Seafood'
                />
              </div>
              <div className='inputGroup'>
                <p className='font-bold'>Contact Name</p>
                <input
                  type='text'
                  name='contact name'
                  id='contact name'
                  value={contactName}
                  onChange={(e) => {
                    setContactName(e.currentTarget.value);
                  }}
                  className='placeholder:text-gray-400'
                  placeholder='e.g. John Doe'
                />
              </div>
              <div className='inputGroup'>
                <p className='font-bold'>Email</p>
                <input
                  type='text'
                  name='email'
                  id='email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }}
                  className='placeholder:text-gray-400'
                  placeholder='e.g. johndoe@gmail.com'
                />
              </div>
              <div className='inputGroup'>
                <p className='font-bold'>Address</p>
                <textarea
                  name='address'
                  id='address'
                  value={address}
                  onChange={(e) => {
                    setAddress(e.currentTarget.value);
                  }}
                  className='placeholder:text-gray-400'
                  placeholder='e.g. 76 Fairway Ave. Georgetown, ON L7G 9L8'
                />
              </div>
            </form>
            <ConfirmationModal
              buttonText={"Order"}
              topic='Confirm Order'
              description='Do you confirm the order?'
              onClickConfirm={() => {}}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
