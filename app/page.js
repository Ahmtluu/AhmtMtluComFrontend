"use client";
import Image from "next/image";
import "dotenv/config";

import EntryBanner from "@/components/EntryBanner";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <EntryBanner />
      <Project />
      <Hero />
      <Blog />
    </>
  );
}
