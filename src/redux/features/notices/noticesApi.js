import { api } from "@/redux/api/apiSlice";
const noticeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNotices: builder.query({
      query: () => `/notices`,
      providesTags: ["notice"],
    }),
    getSingleNotice: builder.query({
      query: (id) => `/notices/${id}`,
    }),
    postNotice: builder.mutation({
      query: (data) => ({
        url: `/notices`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["notice"],
    }),
    patchNotice: builder.mutation({
      query: ({ id, data }) => ({
        url: `/notices/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteNotice: builder.mutation({
      query: (id) => ({
        url: `/notices/${id}`,
        method: "DELETE",
        invalidatesTags: ["notice"],
      }),
    }),
  }),
});

export const {
  useGetNoticesQuery,
  useGetSingleNoticeQuery,
  usePostNoticeMutation,
  usePatchNoticeMutation,
  useDeleteNoticeMutation,
} = noticeApi;
