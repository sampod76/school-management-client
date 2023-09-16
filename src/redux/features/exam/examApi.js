import { api } from "@/redux/api/apiSlice";
const examApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllExam: builder.query({
      query: () => `/exam`,
      invalidatesTags: ["exams"],
    }),
    getSingleExam: builder.query({
      query: (id) => `/exam/${id}`,
    }),
    addExam: builder.mutation({
      query: (data) => ({
        url: `/exam`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["exams"],
    }),
    updateExam: builder.mutation({
      query: ({ id, data }) => ({
        url: `/exam/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["exams"],
    }),

    deleteExam: builder.mutation({
      query: (id) => ({
        url: `/exam/${id}`,
        method: "DELETE",
        invalidatesTags: ["exams"],
      }),
    }),
  }),
});

export const {
  useGetAllExamQuery,
  useAddExamMutation,
  useGetSingleExamQuery,
  useUpdateExamMutation,
  useDeleteExamMutation,
} = examApi;
