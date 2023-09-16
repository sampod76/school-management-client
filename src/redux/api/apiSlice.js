import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
  }),
  tagTypes: [
    "student",
    "user",
    "book",
    "class",
    "income",
    "events",
    "teacher",
    "assignWork",
    "workPlan",
    "expense",
    "notice",
    "onlineAssignments",
    "exams",
    "classRoutine",
    "meeting",
    "pendingStudent",
    "studentAttendance",
  ],
  endpoints: () => ({}),
});
