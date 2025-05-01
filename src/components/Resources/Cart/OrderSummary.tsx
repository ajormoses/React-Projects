import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import * as yup from "yup";
import InputField from "../../Ui/InputField";
import Btn from "../../Ui/Btn";
import useCurrencyFormatter from "../../../composables/useCurrencyFormatter";

const OrderSummary = () => {
  const { formatCurrency } = useCurrencyFormatter();
  const navigate = useNavigate();

  const schema = yup
    .object({
      promo_code: yup.number().required(),
      card_number: yup.number().required(),
    })
    .required();
  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleFormData = () => navigate("/checkout");

  const summary: {
    label: string;
    value: number;
  }[] = [
    {
      label: "Subtotal",
      value: 2347,
    },
    {
      label: "Estimated Tax",
      value: 50,
    },
    {
      label: "Estimated shipping & Handling",
      value: 29,
    },
    {
      label: "Total",
      value: 2426,
    },
  ];
  return (
    <>
      <div className="border border-[#EBEBEB] py-14 px-4 md:px-16 flex flex-col gap-4">
        <h1 className="font-bold text-xl text-[#111111]">Order Summary</h1>

        <form
          className="pt-5 flex flex-col gap-5"
          onSubmit={handleSubmit(handleFormData)}
        >
          <InputField
            label="Discount code / Promo code"
            type="number"
            placeholder="Code"
            register={register("promo_code", { required: true })}
            error={errors.promo_code?.message}
            required
          />

          <InputField
            label="Your bonus card number"
            showBtn
            btnLabel="Apply"
            handleBtnClick={() => console.log("Apply")}
            type="number"
            placeholder="Enter Card Number"
            register={register("card_number", { required: true })}
            error={errors.card_number?.message}
            required
          />

          <div className="flex flex-col gap-4">
            {summary.map((item, index) => (
              <div
                className={`flex justify-between ${
                  (index === 0 || index === 3) && `py-2`
                }`}
                key={index}
              >
                <p
                  className={
                    index === 0 || index === 3
                      ? "font-medium"
                      : "text-[#545454]"
                  }
                >
                  {item.label}
                </p>
                <p>{formatCurrency(item.value)}</p>
              </div>
            ))}
          </div>

          <Btn customClass="mt-5" type="submit" label="Checkout" />
        </form>
      </div>
    </>
  );
};

export default OrderSummary;
