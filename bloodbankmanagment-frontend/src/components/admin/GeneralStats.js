import React from "react";
import styled from "styled-components";

const GeneralStats = ({ Icon, title, stat }) => {
	return (
		<Wrap>
			<FirstRow>
				<Icon fontSize="large" />
			</FirstRow>
			<SecondRow>
				<span style={{ fontWeight: "300" }}>{title}</span>
				<span style={{ fontWeight: "800" }}>{stat}</span>
			</SecondRow>
		</Wrap>
	);
};

export default GeneralStats;

const Wrap = styled.div`
	display: flex;
	border: 2px solid black;
	width: 150px;
	justify-content: space-between;
	flex-direction: column;
	padding: 4px;
	margin: 10px;
	background-color: white;
	min-height: 100px;
	min-width: 250px;
`;

const FirstRow = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
`;

const SecondRow = styled.div`
	display: flex;
	flex-direction: column;
`;
