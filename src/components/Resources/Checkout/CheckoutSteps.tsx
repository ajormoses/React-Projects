import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { TfiClose } from "react-icons/tfi";
import { IoIosAddCircle } from "react-icons/io";
import InputField from "../../Ui/InputField";
import Btn from "../../Ui/Btn";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";
import Modal from "../../Ui/DialogModal";
import location from "../.../../../../assets/img/steps-icon/location.svg";
import shipping from "../.../../../../assets/img/steps-icon/shipping.svg";
import payment from "../../../assets/img/steps-icon/payment.svg";
import creditcard from "../../../assets/img/creditcard.svg";
import TabSwitcher from "../../Ui/TabSwitcher";
import { useMediaQuery } from "../../../composables/useMediaQuery";
import CheckoutSummary from "./Summary";

const checkoutSteps = () => {
  const navigate = useNavigate();
  // Date Picker
  const [startDate, setStartDate] = useState<Date | null>(null);

  // Modal
  const [openModal, setOpenModal] = useState(false);

  // Validation to add new address
  const schema = yup
    .object({
      title: yup.string().required(),
      name: yup.string().required(),
      address: yup.string().required(),
      tel: yup
        .string()
        .required("Phone number is required")
        .matches(
          /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)?\d{3}(-|\s)?\d{3}$|^\d{11,}$/,
          "Phone number is not valid"
        ),
    })
    .required();

  type FormData = {
    title: string;
    name: string;
    address: string;
    tel: string; // Make 'tel' required
  };

  const [selectedAddress, setSelectedAddress] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  function addFormData(data: any) {
    if (selectedAddress) {
      // If we are editing an address, find the index of the selected address
      const updatedAddresses = address.map((item) =>
        item.tel === selectedAddress.tel ? { ...item, ...data } : item
      );

      setAddress(updatedAddresses);

      setOpenModal(false);
    } else {
      setAddress((prev) => [...prev, data]);
      setOpenModal(false);
    }
  }

  // Steps
  const [checkoutStepOne, setCheckoutStepOne] = useState<boolean>(false);
  const [checkoutStepTwo, setCheckoutStepTwo] = useState<boolean>(true);
  const [checkoutStepThree, setCheckoutStepThree] = useState<boolean>(false);
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);
  const [radioError, setRadioError] = useState<string | null>(null);

  // Addresses
  const addresses: {
    title: string;
    name: string;
    address: string;
    tel: string;
  }[] = [
    {
      title: "2118 Thornridge",
      name: "Home",
      address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      tel: "(209) 555-0104",
    },
    {
      title: "Headoffice",
      name: "Office",
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      tel: "(704) 555-0127",
    },
  ];

  useEffect(() => {
    if (selectedAddress) {
      // Set values in the form
      setValue("title", selectedAddress.title);
      setValue("name", selectedAddress.name);
      setValue("address", selectedAddress.address);
      setValue("tel", selectedAddress.tel);
    }
  }, [selectedAddress, setValue]);

  const [address, setAddress] = useState(addresses);

  function removeAddress(index: number) {
    setAddress((prev) => prev.filter((_, i) => i !== index));
  }

  // Shipping method
  const shippingMethods: {
    grade: string;
    desc: string;
    date?: string;
  }[] = [
    {
      grade: "Free",
      desc: "Regular shipment",
      date: "17 Oct, 2023",
    },
    {
      grade: "$8.50",
      desc: "Get your delivery as soon as possible",
      date: "1 Oct, 2023",
    },
    {
      grade: "Schedule",
      desc: "Pick a date when you want to get your delivery",
    },
  ];

  // Tabs
  const tabs = [
    { title: "Credit Card", isActive: true },
    { title: "PayPal", isActive: false },
    { title: "PayPal Credit", isActive: false },
  ];

  const [expiryDate, setExpiryDate] = useState<Date | null>(null);
  const handleFormData = (data: any) => console.log(data);

  // Validation to add new address
  const paymentSchema = yup
    .object({
      card_name: yup.string().required(),
      card_number: yup.string().required(),
      expiry_date: yup
        .date()
        .required("Expiry date is required")
        .typeError("Please select a valid date"),
      cvv: yup.string().required(),
    })
    .required();

  type FormPaymentData = {
    card_name: string;
    card_number: string;
    expiry_date: Date;
    cvv: string;
  };

  const {
    register: paymentRegister,
    handleSubmit: paymentHandleSubmit,
    formState: { errors: paymentErrors },
    control,
  } = useForm<FormPaymentData>({
    resolver: yupResolver(paymentSchema),
  });

  // Back and Next buttons
  const back = () => {
    if (checkoutStepOne) {
      navigate(-1);
    } else if (checkoutStepTwo) {
      setCheckoutStepOne(true);
      setCheckoutStepTwo(false);
    } else if (checkoutStepThree) {
      setCheckoutStepTwo(true);
      setCheckoutStepThree(false);
    }
  };

  const next = () => {
    if (checkoutStepOne) {
      if (!selectedRadio) {
        setRadioError("Please select an address");
        return;
      }
      setCheckoutStepOne(false);
      setCheckoutStepTwo(true);
    } else if (checkoutStepTwo) {
      if (!selectedRadio) {
        setRadioError("Please select shipping method");
        return;
      } else {
        setCheckoutStepTwo(false);
        setCheckoutStepThree(true);
      }
    } else if (checkoutStepThree) {
      paymentHandleSubmit(handleFormData)();
    }
  };

  // Media Query for large screen
  const mediaLg = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <div className="pt-16">
        <div className="section container !max-w-[1120px]">
          {/* Steps */}
          <div className="grid grid-cols-2 gap-4 lg:flex lg:justify-between lg:items-center">
            <div className="flex gap-2.5 items-center">
              <img
                className={`${
                  mediaLg
                    ? (checkoutStepTwo || checkoutStepThree) && "opacity-20"
                    : checkoutStepThree && "opacity-20"
                }`}
                src={mediaLg ? location : checkoutStepOne ? location : shipping}
                alt="Location"
              />
              <div
                className={`flex flex-col font-medium ${
                  !checkoutStepThree ? "text-primary" : "text-[#B2B2B2]"
                }`}
              >
                <p className=" text-sm capitalize">
                  step {mediaLg ? 1 : checkoutStepOne ? 1 : 2}
                </p>
                <p className="text-lg">
                  {mediaLg
                    ? "Address"
                    : checkoutStepOne
                    ? "Address"
                    : "Shipping"}
                </p>
              </div>
            </div>

            <div className="flex gap-2.5 items-center">
              <img
                className={`${
                  mediaLg
                    ? !checkoutStepTwo && "opacity-20"
                    : !checkoutStepThree && "opacity-20"
                }`}
                src={mediaLg ? shipping : checkoutStepTwo ? payment : shipping}
                alt="Shipping"
              />
              <div
                className={`flex flex-col font-medium text-[#B2B2B2] ${
                  mediaLg
                    ? checkoutStepTwo && "text-primary"
                    : checkoutStepThree && "text-primary"
                }`}
              >
                <p className=" text-sm capitalize">
                  step {mediaLg ? 2 : checkoutStepOne ? 2 : 3}
                </p>
                <p className="text-lg">
                  {mediaLg
                    ? "Shipping"
                    : checkoutStepOne
                    ? "Shipping"
                    : "Payment"}
                </p>
              </div>
            </div>

            <div className="lg:flex gap-2.5 items-center hidden">
              <img
                className={`${!checkoutStepThree && "opacity-20"}`}
                src={payment}
                alt="Shipping"
              />
              <div
                className={`flex flex-col font-medium ${
                  checkoutStepThree ? "text-primary" : "text-[#B2B2B2]"
                }`}
              >
                <p className=" text-sm capitalize">step 3</p>
                <p className="text-lg">Payment</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            className="pt-10"
            onSubmit={paymentHandleSubmit(handleFormData)}
          >
            <div className=" flex flex-col gap-5">
              {/* Error Message */}
              {radioError && (
                <p className="text-red-500 text-sm -mt-2 transition-all duration-300 ease-in-out animate-slideFadeIn">
                  {radioError}
                </p>
              )}
              <p className="font-semibold text-xl leading-6 text-[#17183B] pb-3">
                {checkoutStepOne
                  ? "Select Address"
                  : checkoutStepTwo
                  ? "Shipping Method"
                  : mediaLg
                  ? ""
                  : "Payment"}
              </p>

              {/* Step 1 */}
              {checkoutStepOne && (
                <>
                  {address.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 rounded-lg p-4 bg-[#F6F6F6] group/edit"
                    >
                      <input
                        type="radio"
                        name="address"
                        className="mt-1.5 w-4 h-4 accent-primary"
                        value={item.title}
                        onChange={(e) => {
                          setSelectedRadio(e.target.value);
                          setRadioError(null); // clear error on selection
                        }}
                      />
                      <div className="flex flex-col gap-2.5 basis-full">
                        <div className="flex gap-5 items-center">
                          <p className="text-darkBlue text-lg">{item.title}</p>
                          <div className="text-white text-xs rounded bg-black py-1 px-2 w-fit uppercase">
                            {item.name}
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center w-[200px]">
                            <p className="text-darkBlue group-hover/edit:mr-1.5">
                              {item.address}
                            </p>
                            <BiSolidPencil
                              onClick={() => {
                                setSelectedAddress(item);
                                setOpenModal(true);
                              }}
                              className="cursor-pointer invisible opacity-0 group-hover/edit:visible group-hover/edit:opacity-100 transition-all duration-150 w-6 h-6"
                            />
                          </div>
                          <TfiClose onClick={() => removeAddress(index)} />
                        </div>
                        <p className="text-darkBlue">{item.tel}</p>
                      </div>
                    </div>
                  ))}

                  {/* Add address */}
                  <div className="flex flex-col gap-3">
                    <div className="relative">
                      <div
                        style={{
                          border: "0.5px dashed black",
                          background:
                            "linear-gradient(270deg, #000000 -1.3%, #E6E6E6 100%)",
                          WebkitMask:
                            "linear-gradient(270deg, #000000 -1.3%, #E6E6E6 100%)",
                          mask: "linear-gradient(270deg, #000000 -1.3%, #E6E6E6 100%)",
                        }}
                      ></div>
                      <IoIosAddCircle
                        onClick={() => {
                          setSelectedAddress(null);
                          setOpenModal(true);
                        }}
                        className="absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6"
                      />
                    </div>
                    <p className="text-sm text-center">Add New Address</p>
                  </div>
                </>
              )}

              {/* Step 2 */}
              {checkoutStepTwo && (
                <>
                  {shippingMethods.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center overflow-hidden gap-4 rounded-lg p-4 border border-[#F6F6F6] w-full"
                    >
                      <div className="flex flex-col gap-2.5 lg:flex-row lg:items-center basis-1/2">
                        <input
                          type="radio"
                          name="shipping"
                          className="mt-1.5 w-4 h-4 accent-primary lg:mt-0"
                          value={item.grade}
                          onChange={(e) => {
                            setSelectedRadio(e.target.value);
                            setRadioError(null); // clear error on selection
                          }}
                        />
                        <div
                          className={`flex flex-col gap-2.5 lg:flex-row lg:items-center ${
                            item.grade === selectedRadio
                              ? "text-black"
                              : "text-[#A2A3B1]"
                          }`}
                        >
                          <p>{item.grade}</p>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                      {index !== 2 ? (
                        <p
                          className={` ${
                            item.grade === selectedRadio
                              ? "text-black"
                              : "text-[#A2A3B1]"
                          }`}
                        >
                          {item.date}
                        </p>
                      ) : (
                        <div className="!w-[120px]">
                          <DatePicker
                            className="date-picker  !border-none focus:outline-none"
                            placeholderText="Select Date"
                            selected={startDate}
                            onChange={(date) => {
                              if (date) setStartDate(date);
                            }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </>
              )}

              {/* Step 3 */}
              {checkoutStepThree && (
                <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                  <div className="hidden lg:block">
                    <CheckoutSummary />
                  </div>
                  <div className="flex flex-col ">
                    <p className="font-semibold text-xl leading-6 text-[#17183B] pb-3 hidden lg:block">
                      {checkoutStepOne
                        ? "Select Address"
                        : checkoutStepTwo
                        ? "Shipping Method"
                        : "Payment"}
                    </p>

                    <TabSwitcher items={tabs} />
                    <img
                      className="mt-8 mb-4 lg:mb-10 max-w-[337px]"
                      src={creditcard}
                      alt="Credit Card"
                    />

                    <InputField
                      type="text"
                      placeholder="Cardholder Name"
                      register={paymentRegister("card_name", {
                        required: true,
                      })}
                      error={paymentErrors.card_name?.message}
                    />
                    <InputField
                      type="number"
                      placeholder="Card Number"
                      register={paymentRegister("card_number", {
                        required: true,
                      })}
                      error={paymentErrors.card_number?.message}
                    />
                    <div className="grid grid-cols-2 items-center gap-4">
                      <div className="flex flex-col gap-2">
                        <Controller
                          control={control}
                          name="expiry_date"
                          render={({ field }) => (
                            <DatePicker
                              className={`date-picker ${
                                paymentErrors.expiry_date?.message &&
                                "!border !border-red-500 placeholder-red-200 mt-2"
                              }`}
                              placeholderText="Expiry Date"
                              selected={
                                field.value ? new Date(field.value) : null
                              }
                              onChange={field.onChange}
                            />
                          )}
                        />

                        {paymentErrors.expiry_date?.message && (
                          <p className="text-red-500 text-xs">
                            {paymentErrors.expiry_date?.message}
                          </p>
                        )}
                      </div>
                      <InputField
                        type="number"
                        placeholder="CVV"
                        register={paymentRegister("cvv", { required: true })}
                        error={paymentErrors.cvv?.message}
                      />
                    </div>

                    <div className="flex items-center gap-2.5 mt-5">
                      <input
                        type="checkbox"
                        name="address"
                        className=" w-4 h-4 rounded-[3px] accent-primary"
                      />
                      <p className="font-medium text-[15px]">
                        Same as billing address
                      </p>
                    </div>

                    {mediaLg && checkoutStepThree && (
                      <div className="grid grid-cols-2 gap-4 items-center mt-10">
                        <Btn
                          onClick={() => back()}
                          label="Back"
                          customClass="!bg-white !text-primary !border !border-primary"
                        />
                        <Btn
                          onClick={() => next()}
                          label={checkoutStepThree ? "Pay" : "Next"}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {!checkoutStepThree && (
              <div className="grid grid-cols-2 gap-5  items-center mt-10 lg:w-[500px] lg:ml-auto">
                <Btn
                  onClick={() => back()}
                  label="Back"
                  customClass="!bg-white !text-primary !border !border-primary"
                />
                <Btn
                  onClick={() => next()}
                  label={checkoutStepThree ? "Pay" : "Next"}
                />
              </div>
            )}
          </form>

          {/* Modal */}
          <Modal
            isOpen={openModal}
            onClose={() => {
              setOpenModal(false);
            }}
            headerContent={`${
              selectedAddress === null ? "Add New" : "Edit"
            } Address`}
          >
            <form
              className="flex flex-col gap-2.5 py-2.5"
              onSubmit={handleSubmit(addFormData)}
            >
              <InputField
                label="Title"
                type="text"
                placeholder="Title"
                register={register("title", { required: true })}
                error={errors.title?.message}
                required
              />

              <InputField
                label="Name"
                type="text"
                placeholder="Name"
                register={register("name", { required: true })}
                error={errors.name?.message}
                required
              />

              <InputField
                label="Address"
                type="text"
                placeholder="Address"
                register={register("address", { required: true })}
                error={errors.address?.message}
                required
              />

              <InputField
                label="Phone Number"
                type="tel"
                placeholder="Tel"
                register={register("tel")}
                error={errors.tel?.message}
                required
              />

              <Btn
                type="submit"
                label={`${selectedAddress === null ? "Add" : "Edit"} Address`}
                customClass="mt-2.5 text-sm"
              />
            </form>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default checkoutSteps;
