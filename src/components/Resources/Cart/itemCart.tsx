import { TfiClose } from "react-icons/tfi";
import { useState, useEffect } from "react";
import useCurrencyFormatter from "../../../composables/useCurrencyFormatter";
import Btn from "../../Ui/Btn";
import { motion } from "framer-motion";

interface CartItem {
  item: string;
  price: number;
  title: string;
  ref: string;
}

interface Props {
  carts: CartItem[];
}

const ItemCart: React.FC<Props> = ({ carts: initialCarts }) => {
  const [carts, setCarts] = useState<CartItem[]>(initialCarts);
  const [count, setCount] = useState<number[]>(initialCarts.map(() => 1));
  const { formatCurrency } = useCurrencyFormatter();

  // Update count state when carts change
  useEffect(() => {
    setCount(initialCarts.map(() => 1));
  }, [initialCarts]);

  // Function to update count while ensuring it doesn't go below 1
  const handleCount = (index: number, value: number) => {
    setCount((prevCount) =>
      prevCount.map((c, i) => (i === index ? Math.max(1, value) : c))
    );
  };

  // Function to remove an item from the cart
  const RemoveCart = (index: number) => {
    setCarts((prevCarts) => prevCarts.filter((_, i) => i !== index));
    setCount((prevCount) => prevCount.filter((_, i) => i !== index)); // Ensure count updates correctly
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Cart Title */}
      <h1 className="text-black font-semibold text-2xl leading-6">
        Shopping Cart
      </h1>

      {carts?.length > 0 &&
        carts.map((cart, index) => (
          <div
            className={`flex items-center gap-4 relative pb-12 ${
              index !== carts.length - 1
                ? "border-b-[0.5px] border-[#A3A3A3]"
                : ""
            }`}
            key={index}
          >
            <motion.img
              className="h-[90px] w-[90px]"
              src={cart.item}
              alt={cart.title}
              animate={{ rotateY: [0, 15, -10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            <div className="flex flex-col gap-2.5 basis-full">
              <p className="font-medium max-w-[200px]">{cart.title}</p>
              <p className="text-sm">{cart.ref}</p>
              <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-0.5">
                  <Btn
                    customClass="!w-6 !h-6 !p-4 !bg-transparent !text-black !text-xl"
                    onClick={() => handleCount(index, count[index] - 1)}
                    label="-"
                  />
                  <p className="text-black py-2 px-4 border-[0.5px] w-[40px] h-[32px] flex justify-center items-center border-[#D9D9D9] rounded">
                    {count[index]}
                  </p>
                  <Btn
                    customClass="!w-6 !h-6 !p-4 !bg-transparent !text-black !text-xl"
                    onClick={() => handleCount(index, count[index] + 1)}
                    label="+"
                  />
                  <p className="text-black font-medium text-xl pl-1">
                    {formatCurrency(cart.price * count[index])}
                  </p>
                </div>

                <TfiClose
                  onClick={() => RemoveCart(index)}
                  className="text-xl cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}

      {carts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-10 gap-2">
          <h1 className="text-black font-semibold text-2xl leading-6">
            Your cart is empty
          </h1>
          <p className="text-sm text-[#545454]">
            Add items to your cart to see them here.
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemCart;
