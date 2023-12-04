"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (args) => {
        const { category, pageNumber } = args;
        return {
          url: !category
            ? `get_all_articles?page=${pageNumber}`
            : `get_all_articles?page=${pageNumber}&category=${category}`,
        };
      },
    }),
    getPostBySlug: builder.query({
      query: (slug) => `article/${slug}`,
    }),
  }),
});

export const { useGetPostBySlugQuery, useGetPostsQuery } = postApi;
