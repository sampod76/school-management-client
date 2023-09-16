import { api } from "@/redux/api/apiSlice";
const teacherApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => `/teachers`,
      providesTags: ["teacher"],
    }),
    getSingleTeacher: builder.query({
      query: (id) => `/teachers/${id}`,
    }),
    postTeacher: builder.mutation({
      query: (data) => ({
        url: `/teachers`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["teacher"],
    }),
    patchTeacher: builder.mutation({
      query: ({ id, data }) => ({
        url: `/teachers/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteTeacher: builder.mutation({
      query: (id) => ({
        url: `/teachers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["teacher"],
    }),
  }),
});

export const {
  useGetTeachersQuery,
  useGetSingleTeacherQuery,
  usePostTeacherMutation,
  usePatchTeacherMutation,
  useDeleteTeacherMutation,
} = teacherApi;
