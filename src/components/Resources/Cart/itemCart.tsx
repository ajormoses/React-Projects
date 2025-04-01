import { TfiClose } from "react-icons/tfi";
import { useState, useCallback } from "react";
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
  const [count, setCount] = useState(1);
  const { formatCurrency } = useCurrencyFormatter();

  const RemoveCart = useCallback((index: number) => {
    setCarts((prevCarts) => prevCarts.filter((_, i) => i !== index));
  }, []);

  return (
    <>
      {carts.map((cart, index) => (
        <div
          className={`flex items-center gap-4 relative pb-12 ${
            index !== carts.length - 1
              ? "border-b-[0.5px] border-[#A3A3A3]"
              : ""
          }`}
          key={index}
        >
          {/* <img className="h-[90px] w-[90px]" src={cart.item} /> */}
          <motion.img
            className="h-[90px] w-[90px]"
            src={cart.item}
            alt={cart.title}
            animate={{ rotateY: [0, 15, -10, 0] }} // Rotates back and forth
            transition={{
              duration: 1.5, // Smooth transition
              repeat: Infinity, // Loop animation
              repeatType: "reverse", // Moves back and forth
              ease: "easeInOut", // Smooth easing
            }}
          />
          <div className="flex flex-col gap-2.5 basis-full">
            <p className="font-medium max-w-[200px]">{cart.title}</p>
            <p className="text-sm">{cart.ref}</p>
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-0.5">
                <Btn
                  customClass="!w-6 !h-6 !p-4 !bg-transparent !text-black !text-xl"
                  onClick={() => setCount(Math.max(1, count - 1))}
                  label="-"
                />
                <p className="text-black py-2 px-4 border-[0.5px] w-[40px] h-[32px] flex justify-center items-center border-[#D9D9D9] rounded">
                  {count}
                </p>
                <Btn
                  customClass="!w-6 !h-6 !p-4 !bg-transparent !text-black !text-xl"
                  onClick={() => setCount(count + 1)}
                  label="+"
                />
                <p className="text-black font-medium text-xl pl-1">
                  {formatCurrency(cart.price)}
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
    </>
  );
};

export default ItemCart;
