import React, { useEffect } from "react";
import { toast } from "react-toastify";

const Popup = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.info("Welcome to Petroler!");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return null; // Popup is handled by Toastify
};

export default Popup;