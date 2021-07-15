import React from "react";
import styled from "styled-components";
import CachedIcon from "@material-ui/icons/Cached";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckIcon from "@material-ui/icons/Check";
import GeneralStats from "./GeneralStats";

const PatientHome = () => {
	//state for the data to be given in general stats
	return (
		<Wrap>
			<GeneralStats Icon={CachedIcon} title="Request Made" stat={3} />
			<GeneralStats Icon={CachedIcon} title="Pending Requests" stat={3} />
			<GeneralStats Icon={CheckIcon} title="Approved Requests" stat={4} />
			<GeneralStats Icon={CancelIcon} title="Rejected Requests" stat={1} />
		</Wrap>
	);
};

export default PatientHome;

const Wrap = styled.div`
	display: flex;
	padding-top: 120px;
	margin-top: 50px;
	border-top: 2px solid black;
`;
