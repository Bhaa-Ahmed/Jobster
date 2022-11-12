import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading, StatsContainer, ChartContainer } from "../../components";
import { showStats } from "../../features/alljobs/allJobsSlice";

const Stats = () => {
	const { isLoading, monthlyApplications } = useSelector(
		store => store.allJobs
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(showStats());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) {
		return <Loading center />;
	}

	return (
		<>
			<StatsContainer />
			{monthlyApplications.length > 0 && <ChartContainer />}
		</>
	);
};

export default Stats;
