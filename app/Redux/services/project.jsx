'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const projectApi = createApi({
    reducerPath: 'projectApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api` }),
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => `get_all_projects`
        }),

    })
});

export const { useGetProjectsQuery } = projectApi;

