"use client";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Framer from "@/components/main/PageFramer";

config.autoAddCss = false;

export default function Template({ children }) {
  return (
    <>
      <Framer>{children}</Framer>
    </>
  );
}
