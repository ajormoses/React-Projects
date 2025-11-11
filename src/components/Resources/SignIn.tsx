const SignIn = () => {
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
          <div className="bg-white w-full max-w-[476px] px-8 py-10 flex flex-col gap-5 rounded-lg">
            <h1 className="font-bold text-[32px]">Login</h1>
            <p className="text-grey">
              Add your details below to get back into the app
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
