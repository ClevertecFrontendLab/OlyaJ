import {
  GetAllRecipesParams,
  Recipe,
  RecipesResponse,
} from '../model/recipesTypes';
import { apiSlice } from './../../../query/create-api';

export const recipesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // обычный запрос
    getAllRecipes: builder.query<RecipesResponse, GetAllRecipesParams>({
      query: (params) => ({
        url: '/recipe',
        params,
      }),
    }),
    
    // запрос по подкатегории (id в path, остальное в query)
    getRecipesByCategoryId: builder.query<RecipesResponse, { id: string } & GetAllRecipesParams>({
      query: ({ id, ...params }) => ({
        url: `/recipe/category/${id}`,
        params, 
      }),
    }),

    getRecipeById: builder.query<Recipe, string>({
      query: (id) => `/recipe/${id}`,
    }),
    
  }),
});

export const {
  useGetAllRecipesQuery,
  useGetRecipesByCategoryIdQuery,
  useGetRecipeByIdQuery,
  useLazyGetAllRecipesQuery
} = recipesApi;
