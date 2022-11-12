import { FormRowSelect, FormRow } from "./";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SearchContainer";
import { handleChange, clearFilters } from "../features/alljobs/allJobsSlice";

const SearchContainer = () => {
	const { search, searchStatus, searchType, sort, sortOptions, isLoading } =
		useSelector(store => store.allJobs);

	const { jobTypeOptions, statusOptions } = useSelector(store => store.job);

	const dispatch = useDispatch();

	const handleSearch = e => {
		if (isLoading) return;
		dispatch(handleChange({ name: e.target.name, value: e.target.value }));
	};
	const handleSubmit = e => {
		e.preventDefault();
		dispatch(clearFilters());
	};

	return (
		<Wrapper>
			<form className="form" onSubmit={handleSubmit}>
				<h4>search form</h4>
				<div className="form-center">
					<FormRow
						type="text"
						name="search"
						value={search}
						handleChange={handleSearch}
					/>
					<FormRowSelect
						labelText="status"
						name="searchStatus"
						value={searchStatus}
						handleChange={handleSearch}
						list={["all", ...statusOptions]}
					/>
					<FormRowSelect
						labelText="type"
						name="searchType"
						value={searchType}
						handleChange={handleSearch}
						list={["all", ...jobTypeOptions]}
					/>
					<FormRowSelect
						name="sort"
						value={sort}
						handleChange={handleSearch}
						list={sortOptions}
					/>
					<button
						type="submit"
						className="btn btn-block btn-danger"
						disabled={isLoading}
					>
						clear filters
					</button>
				</div>
			</form>
		</Wrapper>
	);
};

export default SearchContainer;
