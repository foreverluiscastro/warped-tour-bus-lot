import React from 'react';
import styled from 'styled-components';
import { SmallButton } from '../styles';
import { Link } from 'react-router-dom';

function Trip() {
    return (
        <>
        <SmallButton as={Link} to="/">Back</SmallButton>
        <Wrapper>
            <h1>Planning a trip should be fun.</h1>
            <p>Whether you're on a tight schedule or you got the day to spend, we got you covered. </p>
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

export default Trip;