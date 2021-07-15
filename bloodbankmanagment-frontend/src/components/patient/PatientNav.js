import React from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import ReplayIcon from "@material-ui/icons/Replay";
import { Link } from "react-router-dom";

const PatientNav = () => {
	return (
		<>
			<Link to="/patient/home">
				<Container>
					<IconContainer>
						<HomeIcon />
					</IconContainer>
					<Title>Home</Title>
				</Container>
			</Link>
			<Link to="/patient/makeRequest">
				<Container>
					<IconContainer>
						<ControlPointIcon />
					</IconContainer>
					<Title>Make Request</Title>
				</Container>
			</Link>
			<Link to="/patient/requestHistory">
				<Container>
					<IconContainer>
						<ReplayIcon />
					</IconContainer>
					<Title>Request History</Title>
				</Container>
			</Link>
		</>
	);
};

export default PatientNav;

const Container = styled.div`
	display: flex;
	padding: 10px;
	border-radius: 5px;
	margin: 10px 5px;
	align-items: center;
	justify-content: start;
	color: white;
	cursor: pointer;
	:hover {
		background-color: #585858;
	}
`;

const IconContainer = styled.div`
	padding: 4px;
`;

const Title = styled.div`
	padding-right: 5px;
`;
