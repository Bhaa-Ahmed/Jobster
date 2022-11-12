import { configureStore } from "@reduxjs/toolkit";
import allJobsSlice from "./features/alljobs/allJobsSlice";
import jobSlice from "./features/job/jobSlice";
import userslice from "./features/user/userSlice";

export const store = configureStore({
	reducer: {
		user: userslice,
		job: jobSlice,
		allJobs: allJobsSlice,
	},
});
