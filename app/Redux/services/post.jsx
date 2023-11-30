'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.API_URL}/api` }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => `get_all_articles`
        }),
        getPostBySlug: builder.query({
            query: (slug) => `/api/article/${slug}`
        })
    })
});

export const { useGetPostBySlugQuery, useGetPostsQuery } = postApi;
