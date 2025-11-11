import { useForm } from "react-hook-form";
import InputField from "../Ui/InputField";
import { string, object } from "yup";
import Btn from "../Ui/Btn";

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  // Validation to add new address
  const schema = object({
    email: string().email("Invalid email").required("Email is required"),
    password: string().min(6, "Password must be at least 6 characters"),
  });

  const handleFormData = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center ">
        <div className="flex flex-col items-center gap-10 w-full">
          <div className="flex items-center gap-3">
            <img
              src="/img/logo.svg"
              alt="Devlinks Icon"
              className="w-10 h-10"
            />
            <h1 className="font-bold text-4xl">devlinks</h1>
          </div>
          <form
            className="bg-white w-full max-w-[500px] p-10 flex flex-col gap-5 rounded-lg shadow-sm"
            onSubmit={handleSubmit(handleFormData)}
          >
            <h1 className="font-bold text-[32px]">Login</h1>
            <p className="text-grey">
              Add your details below to get back into the app
            </p>

            <InputField
              type="text"
              label="Email Address"
              placeholder="Cardholder Name"
              register={register("email", {
                required: true,
              })}
            />

            <Btn type="submit" label="Login" />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
