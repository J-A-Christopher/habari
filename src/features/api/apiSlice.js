import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = process.env.REACT_APP_API_KEY;
console.log(apiKey);

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2",
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () =>
        `/top-headlines?country=us&category=business&apiKey=${apiKey}`,
    }),
  }),
});

export const { useGetNewsQuery } = apiSlice;
