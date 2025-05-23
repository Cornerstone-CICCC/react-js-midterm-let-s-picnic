import { useCart } from "../contexts/CartContext";
import ConfirmItem from "./ConfirmItem";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef } from "react";

type Props = {
  openCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ openCart }: Props) => {
  const { cartItems, total } = useCart();
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent.current]);

  return (
    <motion.div
      className="fixed h-screen overflow-hidden top-16 right-0 z-1000 flex flex-col w-full xs:w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col gap-2 bg-white rounded-lg px-4 py-2 h-85">
        <h2 className="text-teal-800 font-bold text-xl">Review Items</h2>
        <div
          ref={parent}
          className="flex flex-col gap-3 text-teal-900 font-semibold no-scrollbar overflow-scroll"
        >
          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <ConfirmItem
                key={product.id}
                id={product.id}
                image={product.image}
                productName={product.productName}
                price={product.price}
                quantity={product.quantity}
              />
            ))
          ) : (
            <p className="text-teal-800">Your cart is empty.</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-lg p-4">
        <h3 className="flex justify-between text-teal-800 font-bold text-lg">
          Total: <span className="text-teal-800 font-bold">${total}</span>
        </h3>
        <Link
          to="/order"
          onClick={() => openCart(false)}
          className="w-full bg-lime-300 text-center text-teal-950 tracking-tight font-semibold p-3 rounded-full text-base"
        >
          Check Order
        </Link>
      </div>
    </motion.div>
  );
};

export default Cart;
