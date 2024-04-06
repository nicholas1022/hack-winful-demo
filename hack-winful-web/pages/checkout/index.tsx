import { useEffect, useState } from "react";
import { PageWrapper } from "../../components/Layout/PageWrapper";
import { CheckoutCard } from "../../components/CheckoutCard";
import ConfirmationModal from "../../components/ConfirmationModal";
// import { DatePicker } from "@mui/x-date-pickers";
// const data: Item[] = [
//   {
//     plu: "AS001",
//     name: "crab",
//     brand: "Sunny Seafood",
//     qty: 97,
//     photo: "/crab.jpeg",
//     price: 23,
//     onHoldQty: 0,
//   },
//   {
//     plu: "MND1239",
//     name: "fish",
//     brand: "Happy seafood",
//     qty: 74,
//     photo: "/fish.jpg",
//     price: 15,
//     onHoldQty: 0,
//   },
//   {
//     plu: "DHWI19",
//     name: "lobster",
//     brand: "Under The Sea",
//     qty: 62,
//     photo: "/lobster.jpeg",
//     price: 47,
//     onHoldQty: 0,
//   },
//   {
//     plu: "MKL239",
//     name: "octopus",
//     brand: "Happy seafood",
//     qty: 213,
//     photo: "/octopus.jpeg",
//     price: 30,
//     onHoldQty: 0,
//   },
//   {
//     plu: "DKW119",
//     name: "oyster",
//     brand: "Sunny seafood",
//     qty: 99,
//     photo: "/oyster.jpeg",
//     price: 31,
//     onHoldQty: 0,
//   },
//   {
//     plu: "SS023",
//     name: "shrimp",
//     brand: "Elton seafood",
//     qty: 47,
//     photo: "/shrimp.jpeg",
//     price: 20,
//     onHoldQty: 0,
//   },
//   {
//     plu: "SQ333",
//     name: "squid",
//     brand: "Under The Sea",
//     qty: 5,
//     photo: "/squid.jpeg",
//     price: 25,
//     onHoldQty: 0,
//   },
// ];

export default function Page() {
  // Contains items added to the shopping cart
  const [data, setData] = useState<Item[]>([]);
  const [cart, setCart] = useState<
    Array<{ product: { plu: string }; qty: number; price?: number }>
  >([]);
  // Total price of all items
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [companyName, setCompanyName] = useState<string>("");
  const [contactName, setContactName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  // const [deliveryDate, setDeliveryDate] = useState<Date>(new Date());

  // Retrieve shopping cart information from localstorage
  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartLocalStorage);
    console.log(cartLocalStorage);
  }, []);

  // useEffect(() => {
  //   setDeliveryDate(new Date());
  // }, []);

  // Save order into localstorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("cart", cart);
  }, [cart]);

  useEffect(() => {
    // Define a function to update cart with default prices
    const updateCartWithDefaultPrices = () => {
      // Loop through each item in the cart
      const updatedCart = cart.map((cartItem) => {
        // Check if the item's price is missing
        if (cartItem.price === undefined) {
          // Find the corresponding item in the items list (assuming it's called 'items')
          const defaultItem = data.find(
            (item) => item.plu == cartItem.product.plu
          );

          // If the item is found, update its price in the cart
          if (defaultItem) {
            return { ...cartItem, price: defaultItem.defaultPrice };
          }
        }
        // If the item already has a price or if the default item is not found, return the original item
        return cartItem;
      });
      console.log(updatedCart);
      // Update the cart state with the updatedCart
      // setCart(updatedCart);
    };

    // Call the function to update cart with default prices when the component mounts
    updateCartWithDefaultPrices();
  }, [cart, data]); // Make sure to include all dependencies of the effect

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
      setData(resultJson);
    } catch (err) {
      console.log("error", err);
    }
  }

  useEffect(() => {
    fetchInfo();
    console.log(data);
  }, []);

  // Calculate final price
  useEffect(() => {
    let sum = 0;
    cart.forEach((cartItem) => {
      if (cartItem.price) {
        sum = sum + cartItem.qty * cartItem.price;
      } else {
        const matchedItem = data.find(
          (item) => item.plu === cartItem.product.plu
        );
        if (matchedItem) {
          sum = sum + cartItem.qty * matchedItem.defaultPrice;
        }
      }
    });
    setTotalPrice(sum);
  }, [cart]);

  // Remove an item from the cart
  function removeCartItem(plu: string) {
    setCart((prevCart) => prevCart.filter((item) => item.product.plu !== plu));
  }

  // Update the quantity of an item to the cart
  function updateCartItemQuantity(plu: string, newQuantity: number) {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.product.plu === plu ? { ...item, qty: newQuantity } : item
      )
    );
  }

  function onQuantityChange(plu: string, newQuantity: number) {
    // Remove the item if the new quantity turns to zero
    if (newQuantity == 0) {
      removeCartItem(plu);
    }
    // Update the quantity of the item if the item is in the cart
    if (cart.find((item) => item.product.plu == plu)) {
      updateCartItemQuantity(plu, newQuantity);
    }
  }

  // Update the order price of the item if the item is in the cart
  function onPriceChange(plu: string, newPrice: number) {
    if (cart.find((item) => item.product.plu == plu)) {
      updateCartItemPrice(plu, newPrice);
    }
  }

  // Update the price for the items in the order if custom price applied
  function updateCartItemPrice(plu: string, newPrice: number) {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.product.plu === plu ? { ...item, price: newPrice } : item
      )
    );
  }

  async function makeOrder() {
    try {
      const result = await fetch("http://localhost:8080/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contactName: contactName,
          companyName: companyName,
          email: email,
          address: address,
          orderDetails: cart,
        }),
      });
      const resultJson = await result.json();
      console.log(resultJson);
    } catch (err) {
      console.log("error", err);
    }
  }

  function onConfirm() {
    makeOrder();
    localStorage.removeItem("cart");
    setCompanyName("");
    setContactName("");
    setEmail("");
    setAddress("");
    setCart([]);
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
              const matchedItem = data.find(
                (item) => item.plu == cartItem.product.plu
              );

              if (matchedItem) {
                return (
                  <CheckoutCard
                    key={cartItem.product.plu} // Ensure each child in a list has a unique "key" prop
                    plu={cartItem.product.plu}
                    name={matchedItem.name}
                    brand={matchedItem.brand}
                    quantity={matchedItem.qty}
                    orderQuantity={cartItem.qty}
                    photo={matchedItem.imgUrl}
                    price={matchedItem.defaultPrice}
                    newPrice={cartItem.price} // Pass the new price if the price is amended
                    onQuantityChange={(plu: string, quantity: number) => {
                      onQuantityChange(plu, quantity);
                    }}
                    onPriceChange={(plu: string, newPrice: number) => {
                      onPriceChange(plu, newPrice);
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
              </div>{" "}
              {/* <div className='inputGroup'>
                <p className='font-bold'>Delivery Date</p>
                <DatePicker
                  label='Controlled picker'
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.currentTarget.value)}
                />
              </div> */}
            </form>
            <ConfirmationModal
              buttonText={"Order"}
              topic='Confirm Order'
              description='Do you confirm the order?'
              onClickConfirm={() => {
                onConfirm();
              }}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
