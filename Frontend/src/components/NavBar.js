import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  TwitterIcon,
  DribbbleIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }
        dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }
      dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-4 font-medium flex items-center justify-between
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8 border-b border-gray-300"
    >
      <div className="flex items-center justify-start">
        <div className="mr-4">
          <h1 className="text-2xl text-black dark:text-white font-fancy">
            OCR
          </h1>
        </div>
        <nav>
          <CustomLink href="/products" title="PRODUCTS" className="mx-4" />
          <CustomLink href="/solutions" title="SOLUTIONS" className="mx-4" />
          <CustomLink href="/blog" title="BLOG" className="ml-4" />
        </nav>
      </div>

      <div className="flex items-center justify-end">
        <a href="/login" className="mr-5 text-black dark:text-white">
          LOG IN
        </a>
        <button
          className={`px-3 py-1 mr-3 rounded-lg border-2 border-blue-500 text-blue-500 font-normal ${
            mode === "light" ? "bg-white" : "bg-dark"
          } hover:bg-blue-500 hover:text-white`}
        >
          Get Started for Free
        </button>
        <button
          className={`ml-2 px-3 py-1 rounded-lg bg-blue-500 text-white font-normal ${
            mode === "light" ? "border-2 border-blue-500" : "border-none"
          }`}
        >
          Request a Demo
        </button>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-4 flex items-center justify-center rounded-full p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-16"
        >
          <nav className="flex items-center flex-col justify-center ">
            <CustomMobileLink
              href="/products"
              title="PRODUCTS"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/solutions"
              title="SOLUTIONS"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/blog"
              title="BLOG"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
            <button
              className={`ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
              style={{
                fontSize: "16px",
                padding: "10px 20px",
                borderRadius: "10px",
                backgroundColor: "#007FFF",
              }}
            >
              +Upgrade to Pro
            </button>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default NavBar;
