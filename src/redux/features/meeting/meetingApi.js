import { api } from "@/redux/api/apiSlice";
const meetingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllMeeting: builder.query({
      query: () => `/meeting`,
      providesTags: ["meeting"],
    }),
    getSingleMeeting: builder.query({
      query: (id) => `/meeting/${id}`,
    }),

    addMeeting: builder.mutation({
      query: (data) => ({
        url: `/meeting/create-meeting`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["meeting"],
    }),
    updateMeeting: builder.mutation({
      query: ({ id, data }) => ({
        url: `/meeting/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["meeting"],
    }),

    deleteMeeting: builder.mutation({
      query: (id) => ({
        url: `/meeting/${id}`,
        method: "DELETE",
        invalidatesTags: ["meeting"],
      }),
    }),
  }),
});

export const {
  useGetAllMeetingQuery,
  useAddMeetingMutation,
  useGetSingleMeetingQuery,
  useUpdateMeetingMutation,
  useDeleteMeetingMutation,
} = meetingApi;
