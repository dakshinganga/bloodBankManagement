import React from "react";
import styled from "styled-components";
import AdminNav from "./AdminNav";
import AdminHome from "./AdminHome";
import AdminDonor from "./AdminDonor";
import AdminPatient from "./AdminPatient";
import AdminDonations from "./AdminDonations";
import AdminRequestHistory from "./AdminRequestHistory";
import AdminBloodStock from "./AdminBloodStock";
import AdminRequests from "./AdminRequests";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const AdminDashBoard = () => {
	return (
		<BrowserRouter>
			<Container>
				<LeftContainer>
					<AdminNav />
				</LeftContainer>
				<RightContainer>
					<Switch>
						<Route path="/admin/Home">
							<AdminHome />
						</Route>
						<Route path="/admin/Donor">
							<AdminDonor />
						</Route>
						<Route path="/admin/Patient">
							<AdminPatient />
						</Route>
						<Route path="/admin/Donations">
							<AdminDonations />
						</Route>
						<Route path="/admin/BloodRequests">
							<AdminRequests />
						</Route>
						<Route path="/admin/RequestHistory">
							<AdminRequestHistory />
						</Route>
						<Route path="/admin/BloodStock">
							<AdminBloodStock />
						</Route>
					</Switch>
				</RightContainer>
			</Container>
		</BrowserRouter>
	);
};

export default AdminDashBoard;

const Container = styled.div`
	display: flex;
`;

const LeftContainer = styled.div`
	background-color: #003366;
	height: calc(100vh - 70px);
	padding-left: 5px;
	flex: 0.25;
	min-width: 200px;
`;

const RightContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #e8e8e8;
	padding-left: 40px;
	padding-right: 40px;
`;
