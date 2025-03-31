import React, { useEffect } from "react";

const Footer = () => {
  console.log("i m footer")
  useEffect(() => {
    console.log("i m footer useEffect")
  }, [])
  return <div className="text-3xl font-bold bg-amber-800 underline">Footer</div>;
};

export default Footer;
