'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api` }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => `get_all_articles`
        }),
        getPaginatedPosts: builder.query({
            query: () => `get_paginated_articles`
        }),
        getPostBySlug: builder.query({
            query: (slug) => `article/${slug}`
        })
    })
});

export const { useGetPostBySlugQuery, useGetPostsQuery, useGetPaginatedPostsQuery } = postApi;
