import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import Image from "next/image";

const userList = ["user1", "user2", "user3", " user4"];
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
  const [cart, setCart] = useState<Array<{ id: string; quantity: number }>>([]);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [user, setUser] = useState<string>("");
  // Update the local storage when the cart changes
  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartLocalStorage);
  }, []);

  useEffect(() => {
    // Sum up the quantity of the ordered items and make changes to the number at the shopping cart
    setTotalQuantity(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  // Save order into localstorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function onQuantityChange(id: string, newQuantity: number) {
    // Remove the item if the new quantity turns to zero
    if (newQuantity == 0) {
      removeCartItem(id);
    }
    // Update the quantity of the item if the item is in the cart
    if (cart.find((item) => item.id == id)) {
      updateCartItemQuantity(id, newQuantity);
    } else {
      // Create an item in the cart
      addCartItem(id);
    }
  }

  // Add an item to the cart
  function addCartItem(id: string) {
    setCart([...cart, { id: id, quantity: 1 }]);
  }

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

  return (
    <main className={"bg-slate-50 w-full h-full"}>
      <div className={"container py-10"}>
        <div className='flex flex-row my-6 justify-between'>
          <div className='flex flex-row items-center gap-4'>
            <p>User:</p>
            <select
              name='user'
              id='user'
              value={user}
              onChange={(e) => {
                setUser(e.currentTarget.value);
              }}
            >
              {userList.map((user) => {
                return <option>{user}</option>;
              })}
            </select>
          </div>
          <button className='bg-gray-300 hover:bg-gray-400 text-black-800 font-bold py-2 px-4 self-end rounded inline-flex items-center align-center'>
            <Image
              src={"/shopping-cart.svg"}
              width='30'
              height='10'
              alt={"shopping-cart"}
              className={"white"}
            />
            <p>&ensp;({totalQuantity})</p>
          </button>
        </div>
        <div className='grid grid-cols-1 sm: grid-cols-1 md:grid-cols-2 gap-4 col-span-3'>
          {data.map((product) => {
            // Initialize the order quantity to be 0
            let orderQuantity: number = 0;
            // Retrieve order order quanity from localstorage, update the order quantity from the localstorage data
            cart.forEach((cartItem) => {
              if (cartItem.id == product.id) {
                orderQuantity = cartItem.quantity;
              }
            });
            return (
              <div className='flex flex-col border-black border-solid rounded border-2 justify-center'>
                <ProductCard
                  key={product.id}
                  photo={product.photo}
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  quantity={product.quantity}
                  price={product.price}
                  cartOrderQuantity={orderQuantity}
                  onQuantityChange={(id: string, quantity: number) => {
                    onQuantityChange(id, quantity);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
