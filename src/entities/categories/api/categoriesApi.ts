
import { apiSlice } from './../../../query/create-api'
import { CategoryResponse } from "../model/categoriesTypes";


export const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
     getAllCategories: builder.query<CategoryResponse[], void>({
        query: ()=> '/category'
     })
    }),
  })

  export const {useGetAllCategoriesQuery} = categoriesApi


