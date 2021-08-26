import React from 'react';
import styled from 'styled-components';
import { SmallButton } from '../styles';
import { Link } from 'react-router-dom';

function Lodging() {
    return (
        <>
        <SmallButton as={Link} to="/">Back</SmallButton>
        <Wrapper>
            <h1>Find a place to recharge.</h1>
            <p>Nothing beats a nice warm bath and soft bed to sleep in.</p>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
  max-width: 1080px;
  margin: 40px auto;
  text-align: left;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 0.5em 10em -0.125em rgb(10 10 10 / 25%),
    0 0 0 1px rgb(10 10 10 / 6%);
`;

export default Lodging;