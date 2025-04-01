import ItemCart from "./ItemCart";
import OrderSummary from "./OrderSummary";
import img1 from "../../../assets/img/newArrivals/img1.svg";
import img3 from "../../../assets/img/newArrivals/img3.svg";
import img4 from "../../../assets/img/newArrivals/img4.svg";

const ShoppingCart = () => {
  const carts = [
    {
      item: img1,
      price: 1099,
      title: "iPhone 14",
      ref: "SKU: 987654321",
    },
    {
      item: img4,
      price: 699,
      title: "OnePlus 9",
      ref: "SKU: 789123456",
    },
    {
      item: img3,
      price: 799,
      title: "Google Pixel 6",
      ref: "SKU: 456789123",
    },
  ];
  return (
    <>
      <div className="section">
        <div className="flex flex-col gap-10 pt-14">
          {/* Cart Title */}
          <h1 className="text-black font-semibold text-2xl leading-6">
            Shopping Cart
          </h1>

          {/* Item Cart */}
          <ItemCart carts={carts} />

          {/* Order Summary */}
          <OrderSummary />
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
