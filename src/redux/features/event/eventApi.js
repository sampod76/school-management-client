import { api } from "@/redux/api/apiSlice";
const eventApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllEvent: builder.query({
      query: () => `/events`,
      providesTags: ["events"],
    }),
    // dailyIncome: builder.query({
    //   query: () => `/income/daily`,
    // }),
    getSingleEvent: builder.query({
      query: (id) => `/events/${id}`,
    }),
    addEvent: builder.mutation({
      query: (data) => ({
        url: `/events`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["events"],
    }),
    updateEvent: builder.mutation({
      query: ({ id, data }) => ({
        url: `/events/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["events"],
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/events/${id}`,
        method: "DELETE",
        invalidatesTags: ["events"],
      }),
    }),
  }),
});

export const {
  useGetAllEventQuery,
  useGetSingleEventQuery,
  useAddEventMutation,
  useDeleteEventMutation,
  useUpdateEventMutation,
} = eventApi;

console.log(useGetAllEventQuery);
