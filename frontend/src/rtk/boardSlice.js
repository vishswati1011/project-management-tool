import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./url";

export const boardApi = createApi({
    reducerPath:'boardApi',
    baseQuery : fetchBaseQuery({baseUrl : BASE_URL}),
    endpoints : (builder) => ({
        addBoard: builder.mutation({
            query : (payload) => ({
                url : 'board/add',
                method: 'POST',
                body : payload,
                headers :{
                    'x-access-token' : localStorage.getItem('token') 
                }
            })
        }),
        getBoard: builder.query({
            query : () =>({
                url: 'board/all',
                method :'GET',
                headers :{
                    'x-access-token' : localStorage.getItem('token') 
                }
            })
        }),
        updateBoard: builder.mutation({
            query : (payload) => ({
                url : 'board/update',
                method : 'POST',
                body : payload,
                headers :{
                    'x-access-token' : localStorage.getItem('token') 
                }
            })
        }),
        deleteBoard: builder.mutation({
            query : (boardId) => ({
                url : `board/delete/${boardId}`,
                method : 'DELETE',
                headers :{
                    'x-access-token' : localStorage.getItem('token') 
                }
            })
        }),
        getByWorkspaceId : builder.query({
            query : (workspaceId) => ({
                url : `board/get/${workspaceId}`,
                method : 'GET',
                headers :{
                    'x-access-token' : localStorage.getItem('token') 
                }
            })
        
        })

    })

})

export const { useAddBoardMutation, useGetBoardQuery, useUpdateBoardMutation,useGetByWorkspaceIdQuery,useDeleteBoardMutation } = boardApi;