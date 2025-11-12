import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import InputField from "../Ui/InputField";
import Btn from "../Ui/Btn";
import { AiTwotoneMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // ✅ Local state to track typing and button status
  const [isDisabled, setIsDisabled] = useState(false);

  const email = watch("email");
  const password = watch("password");

  // ✅ useEffect triggers only when user types
  useEffect(() => {
    if (email || password) {
      // if any field has a value, recheck
      setIsDisabled(!email || !password);
    } else {
      // all empty initially
      setIsDisabled(false);
    }
  }, [email, password]);

  const handleFormData = (data: any) => {
    console.log(data);
  };

  const navigate = useNavigate();

  const googleSignin = async () => {
    try {
      setIsLoading(true);
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      console.error("Google sign-in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
            <h1 className="font-bold text-[32px]">Login</h1>
            <p className="text-grey mb-4">
              Add your details below to get back into the app
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
              label="Password"
              placeholder="Enter your password"
              register={register("password", {
                required: true,
              })}
              required
              error={errors?.password?.message}
            />

            <Btn disabled={isDisabled} type="submit" label="Login" />
            <Btn
              onClick={googleSignin}
              prependIcon={<FcGoogle />}
              isLoading={isLoading}
              customClass="bg-white !text-grey border !border-grey"
              type="button"
              label="Sign in with Google"
            />

            <p className="text-center mt-2.5">
              Don’t have an account?{" "}
              <span
                className="text-primary cursor-pointer"
                onClick={() => navigate("/auth/create-account")}
              >
                Create account
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
