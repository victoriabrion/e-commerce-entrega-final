import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://react-native-9d378-default-rtdb.firebaseio.com/"}),
    tagTypes: ['userImage'],
    endpoints: (builder) => ({
       putImage: builder.mutation({
        query:({image, localId}) => ({
            url:`/profile/${localId}.json`,
            method: 'PUT',
            body: {image}
        }),
        invalidatesTags: ['userImage']
    }),
    getImage: builder.query ({
        query:(localId) => `/profile/${localId}.json`,
        providesTags: ['userImage']
    })
})
})       

export const { usePutImageMutation, useGetImageQuery } = profileApi