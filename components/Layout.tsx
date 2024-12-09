import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
// import Newsletter from "./Newsletter";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="py-14">{children}</main>
      {/* <Newsletter /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;
