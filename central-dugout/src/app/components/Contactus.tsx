"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import { CloseCircle } from "iconsax-react";

const Contactusform = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    alert(
      `Name: ${inputValues.input1}, Email-address: ${inputValues.input2}, Message: ${inputValues.input3}`
    );
    setIsOpen(false);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const isDisabled = Object.values(inputValues).some((value) => value === "");

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
        <div className="hidden lg:block">
          <button
            type="button"
            className="justify-end text-sm text-white bg-gray-800 py-1.5 px-3 lg:px-8 navbutton rounded-full hover:bg-blue-800 hover:text-white"
            onClick={openModal}
          >
            Contact Us
          </button>
          
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <Link
                href="/"
                className="text-xl sm:text-2xl text-center font-semibold text-black"
              >
                Central Dugout
              </Link>
              <button onClick={closeModal}>
                <CloseCircle
                  size="24"
                  className="text-gray-600 hover:text-gray-800"
                  color="gray"
                  variant="Outline"
                />
              </button>
            </div>
            <p className="mb-4 text-center text-xs text-gray-500 sm:text-sm">
            Want to send us feedback? Contact us now...
            </p>
            <form action="#" className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Name
                </label>
                <input
                  id="text"
                  name="input1"
                  value={inputValues.input1}
                  onChange={handleChange}
                  type="text"
                  required
                  className="block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Name..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  id="email"
                  name="input2"
                  value={inputValues.input2}
                  onChange={handleChange}
                  type="email"
                  required
                  className="block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="xyz@email.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="input3"
                  value={inputValues.input3}
                  onChange={handleChange}
                  className="block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={handleClick}
                disabled={isDisabled}
                className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contactusform;
