import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import HotelIcon from "@material-ui/icons/Hotel";
import PersonIcon from "@material-ui/icons/Person";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./header.css";

const Header = ({ isAdmin, setIsAdmin }) => {
	return (
		<Container>
			<LeftContainer>
				<img src="/images/heart1.png" alt="heartimage" />
				<span>Blood Bank Management</span>
			</LeftContainer>
			{!isAdmin ? (
				<RightContainer>
					<Link to="/">
						<HomeButton>
							<HomeIcon htmlColor="white" />
							<span>HOME</span>
						</HomeButton>
					</Link>
					<Link to="/patient">
						<PatientButton>
							<HotelIcon htmlColor="white" />
							<span>PATIENT</span>
						</PatientButton>
					</Link>
					<Link to="/donor">
						<DonorButton>
							<PersonIcon htmlColor="white" />
							<span>DONOR</span>
						</DonorButton>
					</Link>
					<Link to="/admin">
						<AdminButton>
							<LocalLibraryIcon htmlColor="white" />
							<span>ADMIN</span>
						</AdminButton>
					</Link>
				</RightContainer>
			) : (
				<Link to="/">
					<Logout onClick={() => setIsAdmin(false)}>
						<ExitToAppIcon />
						<span>LOGOUT</span>
						{/* functionality for logout */}
					</Logout>
				</Link>
			)}
		</Container>
	);
};

export default Header;

const Container = styled.nav`
	min-height: 70px;
	background-color: red;
	display: flex;
	justify-content: space-between;
	position: sticky;
	top: 0;
`;

const LeftContainer = styled.div`
	display: flex;
	align-items: center;
	min-height: 60px;
	span {
		font-weight: 800;
		color: #f8f8f8;
		font-size: 18px;
	}
	img {
		width: 40px;
		padding: 0 10px;
	}
`;

const RightContainer = styled.div`
	display: flex;
	align-items: center;
	color: #f8f8f8;
`;
const HomeButton = styled.div`
	display: flex;
	align-items: center;
	margin-right: 30px;
	cursor: pointer;
`;
const PatientButton = styled(HomeButton)`
	display: flex;
	align-items: center;
	margin-right: 30px;
	cursor: pointer;
`;
const DonorButton = styled(HomeButton)`
	display: flex;
	align-items: center;
	margin-right: 30px;
	cursor: pointer;
`;
const AdminButton = styled(HomeButton)`
	display: flex;
	align-items: center;
	margin-right: 30px;
	cursor: pointer;
`;

const Logout = styled(HomeButton)`
	margin: 23px;
`;
