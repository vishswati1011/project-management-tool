import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./url";

export const workspaceApi = createApi({
    reducerPath:'workspaceApi',
    baseQuery : fetchBaseQuery({baseUrl : BASE_URL}),
    endpoints : (builder) => ({
        addWorkspace : builder.mutation({
            query : (payload) => ({
                url : 'workspace/add',
                method: 'POST',
                body : payload,
                headers :{
                    'x-access-token' : localStorage.getItem('token') 
                }
            })
        }),
        getWorkspace : builder.query({
            query : () =>({
                url: 'workspace/get',
                method :'GET',
                headers :{
                    'x-access-token' : localStorage.getItem('token') 
                }
            })
        }),
        updateWorkspace : builder.mutation({
            query : (payload) => ({
                url : 'workspace/update',
                method : 'POST',
                body : payload,
                headers :{
                    'x-access-token' : localStorage.getItem('token') 
                }
            })
        }),
        deleteWorkspace : builder.query({
            query : (workspaceId) => ({
                url : `workspace/delete/${workspaceId}`,
                method : 'DELETE',
                headers :{
                    'x-access-token' : localStorage.getItem('token') 
                }
            })
        }),
        getByOrgId : builder.query({
            query : (orgId) => ({
                url : `workspace/get/byOrgId`,
                method : 'GET',
                headers :{
                    'x-access-token' : localStorage.getItem('token') 
                }
            })
        
        })

    })

})

export const { useAddWorkspaceMutation, useGetWorkspaceQuery, useUpdateWorkspaceMutation,useGetByOrgIdQuery } = workspaceApi;