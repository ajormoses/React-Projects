import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import InputField from "../Ui/InputField";
import Btn from "../Ui/Btn";
import { AiTwotoneMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),

    createPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("createPassword")], "Passwords must match")
      .required("Please confirm your password"),
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // ✅ Watch form fields
  const email = watch("email");
  const createPassword = watch("createPassword");
  const confirmPassword = watch("confirmPassword");

  // ✅ Disable button if email or password is empty
  const isDisabled = !email || !createPassword || !confirmPassword;

  const handleFormData = (data: any) => {
    console.log(data);
  };

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="h-screen flex justify-center items-center">
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
            <h1 className="font-bold text-[32px]">Create Account</h1>
            <p className="text-grey mb-4">
              Let’s get you started sharing your links!
            </p>

            <InputField
              type="text"
              label="Email Address"
              placeholder="e.g alex@email.com"
              register={register("email", {
                required: true,
              })}
              error={errors.email?.message}
              required
              prependIcon={<AiTwotoneMail />}
            />

            <InputField
              type="password"
              label="Create password"
              placeholder="At least 8 characters"
              register={register("createPassword", {
                required: true,
              })}
              required
              error={errors?.createPassword?.message}
            />

            <InputField
              type="password"
              label="Confirm Password"
              placeholder="At least 8 characters"
              register={register("confirmPassword", {
                required: true,
              })}
              required
              error={errors?.confirmPassword?.message}
            />

            <Btn
              disabled={isDisabled}
              type="submit"
              label="Create new account"
            />

            <p className="text-center mt-2.5">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/auth/signin")}
                className="text-primary cursor-pointer"
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
