import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { TfiClose } from "react-icons/tfi";
import { IoIosAddCircle } from "react-icons/io";
import InputField from "../../Ui/InputField";
import Btn from "../../Ui/Btn";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "../../Ui/DialogModal";
import location from "../.../../../../assets/img/steps-icon/location.svg";
import shipping from "../.../../../../assets/img/steps-icon/shipping.svg";

const checkoutSteps = () => {
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
  const checkoutStepOne: boolean = true;
  const checkoutStepTwo: boolean = false;
  const checkoutStepThree: boolean = false;

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
  const handleFormData = (data: any) => console.log(data);

  function removeAddress(index: number) {
    setAddress((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="pt-16">
        <div className="section">
          {/* Steps */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-2.5 items-center">
              <img src={location} alt="Location" />
              <div className="flex flex-col font-medium">
                <p className=" text-sm capitalize">step 1</p>
                <p className="text-lg">Address</p>
              </div>
            </div>

            <div className="flex gap-2.5 items-center">
              <img className="opacity-20" src={shipping} alt="Shipping" />
              <div className="flex flex-col font-medium text-[#B2B2B2]">
                <p className=" text-sm capitalize">step 2</p>
                <p className="text-lg">Shipping</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="pt-10" onSubmit={handleSubmit(handleFormData)}>
            {checkoutStepOne && (
              <div className=" flex flex-col gap-5">
                <p className="font-semibold text-xl leading-6 text-[#17183B] pb-3">
                  Select Address
                </p>
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
                      onChange={(e) => console.log(e.target.value)}
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
              </div>
            )}

            <div className="grid grid-cols-2 gap-5  items-center mt-10">
              <Btn
                label="Back"
                customClass="!bg-white !text-primary !border !border-primary"
              />
              <Btn label="Next" />
            </div>
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
