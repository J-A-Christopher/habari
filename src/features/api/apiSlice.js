import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2",
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () =>
        "/top-headlines?country=us&category=business&apiKey=8b38b42439bd40d3a599005d0cc8146d",
    }),
  }),
});

export const { useGetNewsQuery } = apiSlice;

