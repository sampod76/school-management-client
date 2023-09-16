import { api } from "@/redux/api/apiSlice";
const workAssignApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllAssignedWork: builder.query({
      query: () => `/work_schedule`,
      providesTags: ["assignWork"],
    }),
    // dailyIncome: builder.query({
    //   query: () => `/income/daily`,
    // }),
    // getSingleIncome: builder.query({
    //   query: (id) => `/income/${id}`,
    // }),
    assignWork: builder.mutation({
      query: (data) => ({
        url: `/work_schedule`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["assignWork"],
    }),
    updateAssignedwork: builder.mutation({
      query: ({ id, data }) => ({
        url: `/work_schedule/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["assignWork"],
    }),
    deleteAssignedwork: builder.mutation({
      query: (id) => ({
        url: `/work_schedule/${id}`,
        method: "DELETE",
        invalidatesTags: ["assignWork"],
      }),
    }),
  }),
});

export const {
  useGetAllAssignedWorkQuery,
  useAssignWorkMutation,
  useUpdateAssignedworkMutation,
  useDeleteAssignedworkMutation,
} = workAssignApi;
