import { api } from "@/redux/api/apiSlice";
const classRoutineApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getClassRoutine: builder.query({
      query: () => `/class_routine`,
      providesTags: ["classRoutine"],
    }),
    getSingleClassRoutine: builder.query({
      query: (id) => `/class_routine/${id}`,
    }),
    postClassRoutine: builder.mutation({
      query: (data) => ({
        url: `/class_routine`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["classRoutine"],
    }),
    patchClassRoutine: builder.mutation({
      query: ({ id, data }) => ({
        url: `/class_routine/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["classRoutine"],
    }),
    deleteClassRoutine: builder.mutation({
      query: (id) => ({
        url: `/class_routine/${id}`,
        method: "DELETE",
        invalidatesTags: ["classRoutine"],
      }),
    }),
  }),
});

export const {
  useGetClassRoutineQuery,
  useGetSingleClassRoutineQuery,
  usePostClassRoutineMutation,
  usePatchClassRoutineMutation,
  useDeleteClassRoutineMutation,
} = classRoutineApi;
