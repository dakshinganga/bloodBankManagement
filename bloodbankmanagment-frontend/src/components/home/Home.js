import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Home = () => {
  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3001/")
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Banner>
        <img src="/images/homepage.jpg" alt="homepage" />
      </Banner>
      <Middle>
        <span>"Blood has no substitute, only Blood can substitute Blood"</span>
      </Middle>
      <Bottom>
        <Upper>
          <h3>LEARN ABOUT DONATION</h3>
        </Upper>
        <Lower>
          <Left>
            <UpperLeft>
              <img
                src="https://www.eraktkosh.in/BLDAHIMS/bloodbank/transactions/assets/webp/donationFact.webp"
                alt="image1"
              />
            </UpperLeft>
            <LowerLeft>
              <p>
                After donating blood, the body works to replenish the blood
                loss. This stimulates the production of new blood cells and in
                turn, helps in maintaining good health.
              </p>
            </LowerLeft>
          </Left>
          <Right>
            <img
              src="https://mytransfusion.com.au/sites/default/files/styles/content_section/public/Red%20cell%20compatibility.png?itok=Yd0feMzm"
              alt="img"
            />
          </Right>
        </Lower>
      </Bottom>
      <Link to="/organDonation">
        <OrganContainer>
          <h1>🅾🆁🅶🅰🅽 🅳🅾🅽🅰🆃🅸🅾🅽 </h1>
        </OrganContainer>
      </Link>
    </Container>
  );
};

export default Home;

const Container = styled.div``;

const Banner = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

const Middle = styled.div`
  height: 200px;
  width: 100%;
  background-color: white;
  display: grid;
  place-items: center;
  border: 2px solid black;
  // margin-bottom: 35px;
  span {
    font-size: 35px;
    font-style: italic;
    font-weight: 500;
  }
`;

const Bottom = styled.div`
  // background-color: #de1f62;
`;

const Upper = styled.div`
  display: grid;
  place-items: center;
  font-weight: 400;
  line-height: 1.4rem;
  font-size: 36px;
  margin-bottom: 70px;
  padding-top: 20px;
`;

const Lower = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 0 40px;
`;

const UpperLeft = styled.div`
  padding-bottom: 20px;
  img {
    width: 100%;
  }
`;

const LowerLeft = styled.div`
  p {
    line-height: 2rem;
    margin: 0 10px;
    font-size: 17.5px;
    color: #292929;
    font-weight: 400;
    text-align: center;
  }
`;

const Right = styled.div`
  padding-left: 30px;
  margin-bottom: 20px;
  flex-grow: 1;
  img {
    min-width: 600px;
    min-height: 400px;
    object-fit: cover;
  }
`;

const OrganContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  padding: 20px;
  margin: 10px;
  background-color: #eac7bf;

  /* text-decoration: ; */
`;
