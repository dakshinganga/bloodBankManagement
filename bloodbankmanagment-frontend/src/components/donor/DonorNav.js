import React from'react';
import styled from  'styled-components';
import {navData} from './navData';
import  {Link} from 'react-router-dom';

const DonorNav = () => {
    return (
        <div>
           {navData.map(({ Icon, title, route }) => (
				<Link to={`${route}`}>
					<Container>
						<IconContainer>
							<Icon />
						</IconContainer>
						<Title>{title}</Title>
					</Container>
				</Link>
			))}
        </div>
    )
}

export default DonorNav; 

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
