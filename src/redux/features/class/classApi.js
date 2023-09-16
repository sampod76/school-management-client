import { api } from "@/redux/api/apiSlice";
const classApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getClasses: builder.query({
      query: () => `/classes`,
      providesTags: ["class"],
    }),
    getSingleClass: builder.query({
      query: (id) => `/classes/${id}`,
    }),
    postClass: builder.mutation({
      query: (data) => ({
        url: `/classes`,
        method: "POST",
        body: data,
      }),
      //   invalidatesTags: ["class"],
    }),
    patchClass: builder.mutation({
      query: ({ id, data }) => ({
        url: `/classes/${id}`,
        method: "PATCH",
        body: data,
      }),
      //   invalidatesTags: ["class"],
    }),
    deleteClass: builder.mutation({
      query: (id) => ({
        url: `/classes/${id}`,
        method: "DELETE",
        invalidatesTags: ["class"],
      }),
    }),
  }),
});

export const {
  useGetClassesQuery,
  useGetSingleClassQuery,
  usePostClassMutation,
  usePatchClassMutation,
  useDeleteClassMutation,
} = classApi;
