import { api } from "@/redux/api/apiSlice";
const expenseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllExpense: builder.query({
      query: () => `/expense`,
      providesTags: ["expense"],
    }),
    expenseTimeRange: builder.query({
      query: (id) => `/expense/${id}`,
      providesTags: ["expense"],
    }),
    getSingleExpense: builder.query({
      query: (id) => `/expense/${id}`,
    }),
    addExpense: builder.mutation({
      query: (data) => ({
        url: `/expense/create-expense`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["expense"],
    }),
    updateExpense: builder.mutation({
      query: ({ id, data }) => ({
        url: `/expense/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["expense"],
    }),

    deleteExpense: builder.mutation({
      query: (id) => ({
        url: `/expense/${id}`,
        method: "DELETE",
        invalidatesTags: ["expense"],
      }),
    }),
  }),
});

export const {
  useGetAllExpenseQuery,
  useAddExpenseMutation,
  useGetSingleExpenseQuery,
  useExpenseTimeRangeQuery,
  useUpdateExpenseMutation,
  useDeleteExpenseMutation,
} = expenseApi;
