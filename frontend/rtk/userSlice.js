import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:5000/'}),
  endpoints : (builder) =>({
    fetchUser : builder.query({
      query: () => `user`
    }),
    fetchUserById : builder.query({
      query: (id) => `user/${id}`
    }),
    createUser : builder.mutation({
      query: (user) => ({
        url : 'user',
        method : 'POST',
        body : user
      })
    })
  })
});

export const { useFetchUserQuery, useCreateUserMutation } = usersApi;

// export default usersApi;