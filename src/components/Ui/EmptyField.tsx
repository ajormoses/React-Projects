const EmptyField = () => {
  return (
    <>
      <div className="p-5 rounded-xl flex justify-center items-center bg-lightGray h-full">
        <div className="flex flex-col gap-6 items-center justify-center">
          <img
            src="/img/emptyField.svg"
            alt="Empty Field"
            className="w-[250px] h-40 mb-4"
          />
          <h1 className="text-[32px] font-bold">Let’s get you started</h1>
          <p className="text-center max-w-[488px]">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </p>
        </div>
      </div>
    </>
  );
};

export default EmptyField;
