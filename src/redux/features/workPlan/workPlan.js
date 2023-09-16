import { api } from "@/redux/api/apiSlice";
const workPlanApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllWorkPlan: builder.query({
      query: () => `/work_plan`,
      providesTags: ["workPlan"],
    }),
    // dailyIncome: builder.query({
    //   query: () => `/income/daily`,
    // }),
    getSingleWorkPlan: builder.query({
      query: (id) => `/work_plan/${id}`,
    }),
    workPlan: builder.mutation({
      query: (data) => ({
        url: `/work_plan`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["workPlan"],
    }),
    updateWorkPlan: builder.mutation({
      query: ({ id, data }) => ({
        url: `/work_plan/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["workPlan"],
    }),
    deleteWorkPlan: builder.mutation({
      query: (id) => ({
        url: `/work_plan/${id}`,
        method: "DELETE",
        invalidatesTags: ["workPlan"],
      }),
    }),
  }),
});

export const {
  useGetAllWorkPlanQuery,
  useGetSingleWorkPlanQuery,
  useUpdateWorkPlanMutation,
  useWorkPlanMutation,
  useDeleteWorkPlanMutation,
} = workPlanApi;
