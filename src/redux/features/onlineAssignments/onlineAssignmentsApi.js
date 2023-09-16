import { api } from "@/redux/api/apiSlice";
const onlineAssignmentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOnlineAssignments: builder.query({
      query: () => `/online_assignments`,
      providesTags: ["onlineAssignments"],
    }),
    getSingleOnlineAssignments: builder.query({
      query: (id) => `/online_assignments/${id}`,
    }),
    postOnlineAssignments: builder.mutation({
      query: (data) => ({
        url: `/online_assignments`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["onlineAssignments"],
    }),
    updateOnlineAssignment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/online_assignments/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteOnlineAssignments: builder.mutation({
      query: (id) => ({
        url: `/online_assignments/${id}`,
        method: "DELETE",
        invalidatesTags: ["onlineAssignments"],
      }),
    }),
  }),
});

export const {
  useGetOnlineAssignmentsQuery,
  useGetSingleOnlineAssignmentsQuery,
  usePostOnlineAssignmentsMutation,
  useUpdateOnlineAssignmentMutation,
  useDeleteOnlineAssignmentsMutation,
} = onlineAssignmentsApi;
