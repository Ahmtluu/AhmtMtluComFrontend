'use client'

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postApi } from './services/post'
import { projectApi } from './services/project'

export const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
        [projectApi.reducerPath]: projectApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware).concat(projectApi.middleware),
})


setupListeners(store.dispatch)
