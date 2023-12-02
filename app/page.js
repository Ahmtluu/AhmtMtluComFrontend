"use client";
import "dotenv/config";

import EntryBanner from "@/components/main/EntryBanner";
import Hero from "@/components/main/Hero";
import Project from "@/components/main/Project";
import Blog from "@/components/main/Blog";

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
