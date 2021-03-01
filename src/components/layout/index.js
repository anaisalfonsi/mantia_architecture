import React from "react";
import Nav from "./nav";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    )
  }