import React from "react";

export const NewsletterBox = () => {
  // in order to make sure that entire webpage is not reloaded when submit button is clicked
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Sign Up for Style – Get Fresh Finds & Insider Deals!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 "
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};
