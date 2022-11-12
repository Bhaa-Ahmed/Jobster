import { useState } from "react";
import Wrapper from "../assets/wrappers/ChartsContainer";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import { useSelector } from "react-redux";

const ChartContainer = () => {
	const [barChart, serBarChart] = useState(true);
	const { monthlyApplications: data } = useSelector(store => store.allJobs);

	return (
		<Wrapper>
			<h4>Monthly Applications</h4>
			<button type="button" onClick={() => serBarChart(!barChart)}>
				{barChart ? "Area Chart" : "Bar Chart"}
			</button>
			{barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
		</Wrapper>
	);
};

export default ChartContainer;
