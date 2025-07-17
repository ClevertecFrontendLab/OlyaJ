import { GetAllRecipesParams, RecipesResponse } from '../model/recipesTypes'
import { apiSlice } from './../../../query/create-api'



export const recipesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
     getAllRecipes: builder.query<RecipesResponse, GetAllRecipesParams>({
        query: ()=> '/recipe'
     })
    }),
  })

  export const {useGetAllRecipesQuery} = recipesApi


