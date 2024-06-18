import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./url";

export const authApi = createApi({
    reducerPath:'authApi',
    baseQuery : fetchBaseQuery({baseUrl : BASE_URL}),
    endpoints : (builder) => ({
        addOrganization : builder.mutation({
            query : (organization) => ({
                url : 'auth/organization',
                method: 'POST',
                body : organization
            })
        }),
        login : builder.mutation({
            query : (user) =>({
                url: 'auth/login',
                method :'POST',
                body : user
            })
        }),
        signup : builder.mutation({
            query : (user) => ({
                url : 'auth/signup',
                method : 'POST',
                body : user
            })
        })
    })

})

export const { useAddOrganizationMutation, useLoginMutation, useSignupMutation } = authApi;