"use client";
import React from "react";
import Head from "next/head";
import DOMPurify from "dompurify";
import { useGetPostBySlugQuery } from "@/app/Redux/services/post";
import { useGetPostsQuery } from "@/app/Redux/services/post";

export async function getStaticPaths() {
  const { data, error, isLoading } = useGetPostsQuery();

  const paths = data.posts.data.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { data, error, isLoading } = useGetPostBySlugQuery(params.slug);

  return {
    props: {
      blog: data,
    },
  };
}

export default function Page({ blog }) {
  console.log(blog);

  return <></>;
}
