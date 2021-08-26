import React, { useState } from 'react';
import styled from 'styled-components';
import { SmallButton, Input, Label } from '../styles';
import { Link } from 'react-router-dom';

function Trip() {
    const [startDestination, setStartDestination] = useState("")
    const [endDestination, setEndDestination] = useState("")

    return (
        <>
        <SmallButton as={Link} to="/">Back</SmallButton>
        <Wrapper>
            <h1>Planning a trip should be fun.</h1>
            <Divider/>
            <p>Whether you're on a tight schedule or you got the day to spend, we got you covered. </p>
            {/* 
            The goal is when you begin to fill out
            the information in the input field, we can send 
            an async call to the Google API that will be able
            to send us a list of cities or towns that match the query
            to yeild faster results.
             */}
            <WrapperChild>
            <Label htmlFor="startDestination">Start</Label>
            <Input
            type="text"
            id="startDestination"
            value={startDestination}
            onChange={(e) => setStartDestination(e.target.value)}
            placeholder="Where are you starting this journey?"
            />
            <Label htmlFor="endDestination">End</Label>
            <Input
            type="text"
            id="endDestination"
            value={endDestination}
            onChange={(e) => setEndDestination(e.target.value)}
            placeholder="Where are you going?"
            />
            </WrapperChild>
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

const WrapperChild = styled.div`
  display: flex;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Trip;