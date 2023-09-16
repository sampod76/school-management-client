import { api } from "@/redux/api/apiSlice";
const studentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => `/students`,
      providesTags: ["student"],
    }),
    getSingleStudent: builder.query({
      query: (id) => `/students/${id}`,
    }),
    postStudent: builder.mutation({
      query: (data) => ({
        url: `/students`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["student"],
    }),
    patchStudent: builder.mutation({
      query: (data) => ({
        url: `/students/${data?.id}`,
        method: "PATCH",
        body: data?.data,
      }),
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["student"],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetSingleStudentQuery,
  usePostStudentMutation,
  usePatchStudentMutation,
  useDeleteStudentMutation,
} = studentApi;
