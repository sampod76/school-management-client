import { api } from "@/redux/api/apiSlice";
const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users`,
      providesTags: ["user"],
    }),
    getSingleUser: builder.query({
      query: (id) => `/users/${id}`,
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    patchUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
        invalidatesTags: ["user"],
      }),
    }),
  }),
  overrideExisting: module.hot?.status() === "apply",
});

export const {
  useGetUsersQuery,
  useGetSingleUserQuery,
  useLoginUserMutation,
  usePatchUserMutation,
  useDeleteUserMutation,
} = usersApi;
