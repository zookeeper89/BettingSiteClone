import React from "react";
import Top from "components/Navbar/Top"
import Middle from "components/Navbar/Middle";
import Nav from "components/Navbar/Nav";

export default function Navbar() {
  return (
    <div>
        <Top />
        <Middle/>
        <Nav/>
    </div>
  );
}
