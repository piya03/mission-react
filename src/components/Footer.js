import React, { useEffect } from "react";

const Footer = () => {
  console.log("i m footer")
  useEffect(() => {
    console.log("i m footer useEffect")
  }, [])
  return <div>Footer</div>;
};

export default Footer;
