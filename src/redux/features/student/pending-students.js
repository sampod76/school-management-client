import { api } from "@/redux/api/apiSlice";
const pendingStudentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPendingStudents: builder.query({
      query: () => `/pending-students`,
      providesTags: ["pendingStudent"],
    }),
    getSinglePendingStudent: builder.query({
      query: (id) => `/pending-students/${id}`,
    }),
    postPendingStudent: builder.mutation({
      query: (data) => ({
        url: `/pending-students`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["pendingStudent"],
    }),
    patchPendingStudent: builder.mutation({
      query: (data) => ({
        url: `/pending-students/${data?.id}`,
        method: "PATCH",
        body: data?.data,
      }),
    }),
    patchPendingStudentApproved: builder.mutation({
      query: (data) => ({
        url: `/pending-students/approved-student-adminssion/${data?.id}`,
        method: "PATCH",
        body: data?.data,
      }),
      invalidatesTags: ["pendingStudent"],
    }),
    deletePendingStudent: builder.mutation({
      query: (id) => ({
        url: `/pending-students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["pendingStudent"],
    }),
  }),
});

export const {
  useGetPendingStudentsQuery,
  useGetSinglePendingStudentQuery,
  usePostPendingStudentMutation,
  usePatchPendingStudentMutation,
  usePatchPendingStudentApprovedMutation,
  useDeletePendingStudentMutation,
} = pendingStudentApi;
