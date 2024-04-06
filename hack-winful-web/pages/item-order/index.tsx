import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { PageWrapper } from "../../components/Layout/PageWrapper";
import Image from "next/image";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

const userList = ["user1", "user2", "user3", "user4"];

export default function Page() {
  const [cart, setCart] = useState<Array<{ id: string; quantity: number; price?: number }>>([]);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [user, setUser] = useState<string>("");
  const [brandList, setBrandList] = useState<string[]>([]);
  const [tab, setTab] = useState<string>("");
  const [data, setData] = useState<Item[]>([]);
  const [displayItem, setDisplayItem] = useState<Item[]>([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  async function fetchInfo() {
    try {
      const result = await fetch('http://localhost:8080/api/product/page', {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!result.ok) {
        throw new Error('Failed to fetch data');
      }
      const resultJson = await result.json();
      setData(resultJson);

      const brandsSet: Set<string> = new Set();
      resultJson.forEach((item: Item) => {
        brandsSet.add(item.brand);
      });
      const brandArr = Array.from(brandsSet);
      setBrandList(brandArr);
      setTab(brandArr[0]);
    } catch (err) {
      console.log('error', err)
    }
  }

  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartLocalStorage);
  }, []);

  useEffect(() => {
    setTotalQuantity(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const filteredItems: Item[] = data.filter((item) => item.brand === tab);
    setDisplayItem(filteredItems);
  }, [tab, data]);

  function onQuantityChange(id: string, newQuantity: number) {
    if (newQuantity === 0) {
      removeCartItem(id);
    }
    if (cart.find((item) => item.id === id)) {
      updateCartItemQuantity(id, newQuantity);
    } else {
      addCartItem(id);
    }
  }

  function addCartItem(id: string) {
    setCart([...cart, { id: id, quantity: 1 }]);
  }

  function removeCartItem(id: string) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function updateCartItemQuantity(id: string, newQuantity: number) {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  return (
    <PageWrapper>
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
              return <option key={user}>{user}</option>;
            })}
          </select>
        </div>
        <a
          href='checkout'
          className='block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-6'
        >
          <button className='rounded py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 inline-flex items-center align-center'>
            <Image
              src={"/shopping-cart.svg"}
              width='30'
              height='10'
              alt={"shopping cart"}
            />
            <p>&ensp;({totalQuantity})</p>
          </button>
        </a>
      </div>

      <Tabs
        value={tab}
        onChange={(e: React.SyntheticEvent, newValue: string) => {
          setTab(newValue);
        }}
        variant='scrollable'
        scrollButtons='auto'
        className='pb-6'
      >
        {brandList.map((brand) => {
          return (
            <Tab
              key={brand}
              value={brand}
              label={brand}
              wrapped
              onClick={() => setTab(brand)}
            />
          );
        })}
      </Tabs>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 col-span-3'>
        {displayItem.map((product, index) => (
          <div className='flex flex-col rounded border-2 justify-center' key={index}>
            <ProductCard
              key={product.plu}
              photo={product.imgUrl}
              id={product.plu.toString()}
              name={product.name}
              brand={product.brand}
              quantity={product.qty}
              price={product.defaultPrice}
              cartOrderQuantity={product.onHoldQty}
              onQuantityChange={(id: string, quantity: number) => {
                onQuantityChange(id, quantity);
              }}
            />
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
