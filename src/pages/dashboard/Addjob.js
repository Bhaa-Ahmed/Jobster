import { FormRow, FormRowSelect } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
	clearValues,
	createJob,
	handleChange,
	editJob,
} from "../../features/job/jobSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllJobs } from "../../features/alljobs/allJobsSlice";

const Addjob = () => {
	const navigate = useNavigate();
	const {
		isLoading,
		position,
		company,
		jobLocation,
		jobTypeOptions,
		jobType,
		statusOptions,
		status,
		isEditing,
		editJobId,
	} = useSelector(store => store.job);
	const dispatch = useDispatch();

	const { user } = useSelector(store => store.user);

	const handleSubmit = e => {
		e.preventDefault();

		if (!position || !company || !jobLocation) {
			toast.error("Please Fill Out All Fields");
			return;
		}

		if (isEditing) {
			dispatch(
				editJob({
					jobId: editJobId,
					job: { company, position, jobLocation, jobType, status },
				})
			);
			navigate("/all-jobs");
			dispatch(getAllJobs());
			return;
		}

		dispatch(createJob({ status, position, company, jobType, jobLocation }));
	};

	const handleJobInput = e => {
		const name = e.target.name;
		const value = e.target.value;
		dispatch(handleChange({ name, value }));
	};

	useEffect(() => {
		if (!isEditing) {
			dispatch(handleChange({ name: "jobLocation", value: user.location }));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Wrapper>
			<form className="form">
				<h3>{isEditing ? "edit job" : "add job"}</h3>

				<div className="form-center">
					<FormRow
						type="text"
						name="position"
						value={position}
						handleChange={handleJobInput}
					/>
					<FormRow
						type="text"
						name="company"
						value={company}
						handleChange={handleJobInput}
					/>
					<FormRow
						type="text"
						name="jobLocation"
						labelText="job location"
						value={jobLocation}
						handleChange={handleJobInput}
					/>
					<FormRowSelect
						name="status"
						value={status}
						handleChange={handleJobInput}
						list={statusOptions}
					/>
					<FormRowSelect
						name="jobType"
						labelText="job type"
						value={jobType}
						handleChange={handleJobInput}
						list={jobTypeOptions}
					/>
					<div className="btn-container">
						<button
							type="button"
							className="btn btn-block clear-btn"
							onClick={() => dispatch(clearValues())}
						>
							clear
						</button>
						<button
							type="submit"
							className="btn btn-block submit-btn"
							onClick={handleSubmit}
							disabled={isLoading}
						>
							submit
						</button>
					</div>
				</div>
			</form>
		</Wrapper>
	);
};

export default Addjob;
