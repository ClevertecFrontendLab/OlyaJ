import { Category, GetAllRecipesParams, RecipesResponse } from '../model/recipesTypes'
import { apiSlice } from './../../../query/create-api'


export const recipesApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
     getAllRecipes: builder.query<RecipesResponse, GetAllRecipesParams>({
       query: () => '/recipe'
     }),
     getCategoryById: builder.query<Category, { id: string }>({
       query: ({ id }) => `/category/${id}`
     })
   })
 });
 
 export const { useGetAllRecipesQuery, useGetCategoryByIdQuery } = recipesApi;
 

