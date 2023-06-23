import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 font-medium text-gray-700 dark:text-gray-300 sm:text-sm">
      <Layout className="py-4 flex items-center justify-between lg:flex-col lg:py-2">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center lg:py-2">
          By&nbsp;<p>OCR Developers</p>
        </div>
        <Link href="mailto:omacherenox@gmail.com" target={"_blank"}>
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
