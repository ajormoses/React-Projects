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
      <div className="pt-14 md:pt-28">
        <div className="section container !max-w-[1120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
            {/* Item Cart */}
            <ItemCart carts={carts} />

            {/* Order Summary */}
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
