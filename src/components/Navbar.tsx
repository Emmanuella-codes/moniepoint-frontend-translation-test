import { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { LuKey } from "react-icons/lu";
import { BiChevronDown } from "react-icons/bi";
import { navigation } from "./types";

const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Disclosure as="nav" className="navbar text-white">
      {({ open }) => (
        <>
          <div className=" px-6 sm:px-6 lg:px-8 flex-grow">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiOutlineXMark
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <HiOutlineBars3
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo Section */}
              <div className="flex-shrink-0 items-center">
                <img className="h-9 w-auto" src="/logo.png" alt="logo" />
              </div>

              {/* Navigation List Section */}
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white flex items-center"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium flex items-center"
                      )}
                    >
                      <a
                        href={item.href}
                        className=""
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => item.hasDropdown && toggleDropdown()}
                      >
                        {item.name}
                      </a>
                      {item.hasDropdown && (
                        <span className="pt-1 pl-1">
                          <BiChevronDown />
                        </span>
                      )}
                      {item.hasDropdown && (
                        <Disclosure.Panel
                          static
                          className={`${
                            isDropdownOpen ? "block" : "hidden"
                          } absolute z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg`}
                        >
                          {/* ... (existing code) */}
                        </Disclosure.Panel>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons Section */}
              <div className="hidden sm:flex space-x-4">
                <button
                  type="button"
                  className="relative rounded-full bg-light-blue px-12 py-2 text-black font-semibold hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Contact Us
                </button>
                <button
                  type="button"
                  className="relative flex flex-row items-center gap-2 p-1 text-gray-200 hover:text-white"
                >
                  <LuKey />
                  <span>Login</span>
                </button>
              </div>

              {/* ... (rest of your original code) */}
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <div className="flex justify-center space-x-4">
                  <button
                    type="button"
                    className="relative rounded-full bg-light-blue px-4 py-2 text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Contact Us
                  </button>
                  <button
                    type="button"
                    className="relative flex flex-row items-center gap-2 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <LuKey />
                    <span>Login</span>
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
