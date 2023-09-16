import { api } from "@/redux/api/apiSlice";
const incomeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllIncome: builder.query({
      query: () => `/income`,
      providesTags: ["income"],
    }),
    incomeTimeRange: builder.query({
      query: (id) => `/income/${id}`,
      providesTags: ["income"],
    }),
    getSingleIncome: builder.query({
      query: (id) => `/income/${id}`,
    }),
    addIncome: builder.mutation({
      query: (data) => ({
        url: `/income/create-income`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["income"],
    }),
    updateIncome: builder.mutation({
      query: ({ id, data }) => ({
        url: `/income/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["income"],
    }),
    deleteIncome: builder.mutation({
      query: (id) => ({
        url: `/income/${id}`,
        method: "DELETE",
        invalidatesTags: ["income"],
      }),
    }),
  }),
});

export const {
  useGetAllIncomeQuery,
  useAddIncomeMutation,
  useDeleteIncomeMutation,
  useIncomeTimeRangeQuery,
  useGetSingleIncomeQuery,
  useUpdateIncomeMutation,
} = incomeApi;
