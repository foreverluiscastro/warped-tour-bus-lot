import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Wrapper>
          <Button as={Link} to="/trips">Plan A Trip</Button>
          <Button as={Link} to="/food">Look For Food</Button>
          <Button as={Link} to="/lodging">Get Some Sleep</Button>
          <Button as={Link} to="/attractions">Enjoy Yourself</Button>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  margin: 40px auto;
  padding: 16px;
  gap: 24px;
  text-align: center;
  border-radius: 6px;
  box-shadow: 0 0.5em 10em -0.125em rgb(10 10 10 / 25%),
    0 0 0 1px rgb(10 10 10 / 6%);
    display: flex;
`;

const WrapperChild = styled.div`
  display: flex;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Home;