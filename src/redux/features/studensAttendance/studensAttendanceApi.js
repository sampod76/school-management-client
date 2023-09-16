import { api } from "@/redux/api/apiSlice";
const studensAttendanceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStudentAttendances: builder.query({
      query: () => `/student-attendance`,
      providesTags: ["studentAttendance"],
    }),
   
    getSingleStudentAttendance: builder.query({
      query: (id) => `/student-attendance/${id}`,
    }),
    postStudentAttendance: builder.mutation({
      query: (data) => ({
        url: `/student-attendance`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["studentAttendance"],
    }),
    patchStudentAttendance: builder.mutation({
      query: ({ id, data }) => ({
        url: `/student-attendance/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["studentAttendance"],
    }),
    deleteStudentAttendance: builder.mutation({
      query: (id) => ({
        url: `/student-attendance/${id}`,
        method: "DELETE",
        invalidatesTags: ["studentAttendance"],
      }),
    }),
  }),
});

export const {
  useGetStudentAttendancesQuery,
  useGetSingleStudentAttendanceQuery,
  usePostStudentAttendanceMutation,
  usePatchStudentAttendanceMutation,
  useDeleteStudentAttendanceMutation,
  useGetAllUniqueStudentAttendancesQuery
} = studensAttendanceApi;
