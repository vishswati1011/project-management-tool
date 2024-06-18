import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./url";

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery : fetchBaseQuery({baseUrl : BASE_URL}),
  endpoints : (builder) =>({
    fetchUser : builder.query({
      query : () =>({
        url : 'user/all',
        method : 'GET',
        headers : {
          'x-access-token' : localStorage.getItem('token')
        }
      })
    }),
    fetchUserById : builder.query({
      query : () =>({
        url : 'user/get',
        method : 'GET',
        headers : {
          'x-access-token' : localStorage.getItem('token')
        }
      })
    }),
    createUser : builder.mutation({
      query: (user) => ({
        url : 'user/add',
        method : 'POST',
        body : user,
        headers : {
          'x-access-token' : localStorage.getItem('token')
        }
      })
    }),
    updateUser : builder.mutation({
      query :(payload) => ({
        url : 'user/update',
        method : 'POST',
        body : payload,
        headers : {
          'x-access-token' : localStorage.getItem('token')
        }
      })
    }),
    deleteUser : builder.query({
      query : () =>({
        url : 'user/delete',
        method : 'GET',
        headers : {
          'x-access-token' : localStorage.getItem('token')
        }
      })
    }),
  })
});

export const { useFetchUserQuery, useCreateUserMutation,useFetchUserByIdQuery,useDeleteUserQuery,useUpdateUserMutation } = usersApi;
