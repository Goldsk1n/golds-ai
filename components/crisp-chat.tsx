"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("de39d3a4-16ad-404a-ab29-d473bc406b94");
  }, []);

  return null;
};
