import React from "react";
import "./index.css"
export default function Footer() {
  return (
    <>
    <footer className="mt-[80px]">
    <div className="container">
        <div className="icon flex justify-center gap-[25px]">
        <box-icon type="logo" size="32px" color="silver" name="instagram-alt"></box-icon>
        <box-icon type="logo" size="32px" color="silver" name="facebook-circle"></box-icon>
        <box-icon name="twitter" size="32px" color="silver" type="logo"></box-icon>
        <box-icon name="linkedin" size="32px" color="silver" type="logo"></box-icon>
        </div>
        <p className="text-center text-[22px] font-medium">Copyright ©2020 All rights reserved </p>
      </div>
    </footer>
    </>
  );
}
